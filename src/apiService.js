import { CognitoIdentityProviderClient, InitiateAuthCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import

const client = new CognitoIdentityProviderClient({
  region: 'us-west-2'
});

export const getData = async (abortSignal) => {
 try {
   const response = await fetch('https://ozmjn512g9.execute-api.us-west-2.amazonaws.com/opalites');
  //  const response = await fetch('http://localhost:3000/opalites', { signal: abortSignal });
   const result = response.json();

   return result;
 } catch (e) {
  console.error(e);
 }
}

export const putData = async (token, data) => {
  const options = {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      Authorization: token
    }
  }
  try {
    const response = await fetch('https://ozmjn512g9.execute-api.us-west-2.amazonaws.com/opalites', options);
    // const response = await fetch('http://localhost:3000/opalites', options);
    const result = response.json();

    return result;
  } catch (e) {
   console.error(e);
  }
}

export const loginUser = async ({username, password }) => {
  try {
    const command = new InitiateAuthCommand({
      AuthFlow: 'USER_PASSWORD_AUTH',
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password,
      },
      ClientId: '4sb4pk05206tebsb8um1o2ecr2',
    });

    const authResult = await client.send(command);

    if (authResult?.$metadata?.httpStatusCode === 200) {
      return authResult.AuthenticationResult;
    }

    console.log('no auth result');
  } catch (error) {
    console.log('login error: ', error)
  }
}