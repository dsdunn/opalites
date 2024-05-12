import { CognitoIdentityProviderClient, InitiateAuthCommand, GetUserCommand, GlobalSignOutCommand } from "@aws-sdk/client-cognito-identity-provider"; // ES Modules import
import { Band } from "./types";

const cognitoClient = new CognitoIdentityProviderClient({
  region: 'us-west-2'
});

export const getData = async (abortSignal: AbortSignal) => {
 try {
   const response = await fetch('https://ozmjn512g9.execute-api.us-west-2.amazonaws.com/opalites', { signal: abortSignal });
  //  const response = await fetch('http://localhost:3000/opalites', { signal: abortSignal });
   const result = response.json();

   return result;
 } catch (e) {
  console.error(e);
 }
}

export const putData = async (token: string, data: Band) => {
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

export const loginUser = async ({ username, password }: { username: string, password: string }) => {
  try {
    const command = new InitiateAuthCommand({
      AuthFlow: 'USER_PASSWORD_AUTH',
      AuthParameters: {
        USERNAME: username,
        PASSWORD: password,
      },
      ClientId: '4sb4pk05206tebsb8um1o2ecr2',
    });

    const authResult = await cognitoClient.send(command);

    if (authResult?.$metadata?.httpStatusCode === 200) {
      return authResult.AuthenticationResult;
    }

    console.log('no auth result');
  } catch (error) {
    console.log('login error: ', error)
  }
}

export const logOutUser = async (token: string) => {
const command = new GlobalSignOutCommand({ AccessToken: token });

  try {
    const response = await cognitoClient.send(command);
    return response;
  } catch (error) {
    console.log(error);
  }
}

export const getUser = async (token: string) => {
  const command = new GetUserCommand({ AccessToken: token });

  try {
    return await cognitoClient.send(command);
  } catch (e) {
    console.log(e);
  }
}