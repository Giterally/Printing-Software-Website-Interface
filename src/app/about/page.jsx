import Image from "next/image";
import styles from "./about.module.css";

export const metadata = {
  title: "About Page",
  description: "About description",
};


const AboutPage = () => {

  // console.log("lets check where it works")
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <h2 className={styles.subtitle}>The UCL Global Disability Innovation Hub</h2>
        <h1 className={styles.title}>
          We are developing a device that can open up the world of education to visually disabled students.
        </h1>
        <p className={styles.desc}>
          Using a modified 3D printer with installed lasers, we have used a heat-projection technique to raise
           metal elements into an upright position such that they act as a braille-like tactile
            surface for image intepretation.
        </p>
        <div className={styles.boxes}>
          <div className={styles.box}>
            <h1>10 K+</h1>
            <p>Years of experience</p>
          </div>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <Image
          src="/tigi.png"
          alt="Tigi Image"
          fill
          className={styles.img}
        />
      </div>
    </div>
  );
};

export default AboutPage;