import Facebook from '././assets/facebook.png';
import Instagram from '././assets/instagram.png';

export const SocialLinks = () => (
  <div id="social-links" className="flex">
    <a target="_blank" href="https://www.facebook.com/theopalitesmusic"><img src={Facebook}/></a>
    <a target="_blank" href="https://www.instagram.com/theopalites/"><img src={Instagram}/></a>
  </div>
)