import styles from "../styles/components/Footer.module.scss";
// import instagramIcon from "../images/socialMediaIcons/instagram.svg";
// import whatsappIcon from "../images/socialMediaIcons/whatsapp.svg";
// import twitterIcon from "../images/socialMediaIcons/twitter.svg";
// import facebookIcon from "../images/socialMediaIcons/facebook.svg";

function Footer() {
  return (
    <footer className={styles.container}>
      {/* <div className={styles.left}>
        <div className={styles.logo}>
          <img src={instagramIcon} alt="insta icon" />
        </div>
        <div className={styles.logo}>
          <img src={whatsappIcon} alt="insta icon" />
        </div>
        <div className={styles.logo}>
          <img src={twitterIcon} alt="insta icon" />
        </div>
        <div className={styles.logo}>
          <img src={facebookIcon} alt="insta icon" />
        </div>
      </div> */}
      <div className={styles.left}>
        <h2>
          <span>Have Some</span> <b>Queries?</b>
        </h2>
        <h2>
          Get in touch <span>With Us!</span>
        </h2>
      </div>
      <div className={styles.right}>
        <h2>
          <span>Call us on: </span> <b>+91 1234567890</b>
        </h2>
        <h2>
          <span>Mail Us: </span> <b>ecorootsfoundation@gmail.com</b>
        </h2>
      </div>
    </footer>
  );
}

export default Footer;
