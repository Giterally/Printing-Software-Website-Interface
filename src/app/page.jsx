import Image from "next/image";
import styles from "./home.module.css";

const Home = () => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h1 className={styles.title}>A Software Interface for a Tactile Printing Device.</h1>
        <p className={styles.desc}>
          For decades, visually impaired students have been unable to interpret visual constructs but 
          a new refreshable tactile surface of braille-like resolution may bring that to an end.
        </p>
        <div className={styles.buttons}>
          <button className={styles.button}>Learn More</button>
          <button className={styles.button}>Contact</button>
        </div>
        <div className={styles.brands}>
          <Image src="/brands.png" alt="" fill className={styles.brandImg}/>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image src="/exampleprint.png" alt="" fill className={styles.heroImg}/>
      </div>
    </div>
  );
};

export default Home;
