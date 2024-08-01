import styles from "./footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.logo}>University College London</div>
      <div className={styles.text}>
        UCL © All rights reserved.
      </div>
    </div>
  );
};

export default Footer;
