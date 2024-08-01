import Image from "next/image";
import styles from "./input.module.css";

export const metadata = {
    title: "Input Page",
    description: "Input description",
};

const InputPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.sidebar}>
        <div className={styles.sidebarHeader}>
          <h2 className={styles.header}>New Pic <span className={styles.shortcut}>(Ctrl+D)</span></h2>
          <button className={styles.newPicButton}>+</button>
        </div>
        <div className={styles.sections}>
          <h3 className={styles.sectionHeader}>Today</h3>
          <div className={styles.chatItem}>Family Photo</div>
          <div className={styles.chatItem}>Camera Design</div>
          <div className={styles.chatItem}>HCI</div>
          <div className={styles.chatItem}>Candy Bar</div>
          <h3 className={styles.sectionHeader}>Yesterday</h3>
          <div className={styles.chatItem}>Dragan</div>
          <div className={styles.chatItem}>Work Flow</div>
          <h3 className={styles.sectionHeader}>Previous 30 Days</h3>
          <div className={styles.chatItem}>Meeting tools</div>
          <div className={styles.chatItem}>Dissertation</div>
        </div>
        <div className={styles.footer}>
          <div className={styles.setting}>Settings</div>
          <div className={styles.help}>Help</div>
          <div className={styles.userName}>User Name</div>
        </div>
      </div>
      <div className={styles.mainContent}>
        <div className={styles.headerSection}>
          <button className={styles.printButton}>Print</button>
          <button className={styles.drawButton}>Draw</button>
        </div>
        <div className={styles.canvas}>
          {Array.from({ length: 9 }).map((_, index) => (
            <div key={index} className={styles.gridItem}>{index + 1}</div>
          ))}
        </div>
        <div className={styles.instructions}>
          <p>Welcome to our image generation software!</p>
          <p>Here, you can generate images by conversing with AI. Our canvas is divided into nine regions, each with a number assigned, starting from the top left corner and numbering from left to right, top to bottom, from 1 to 9.</p>
          <p>You can use the following format to communicate with the AI: "Please draw a [description] in grid [number]."</p>
          <p>For example: "Please draw a dog in grid 4, and draw some clouds in grid 3."</p>
          <p>You can use the following shortcuts to enhance your experience:</p>
          <ul>
            <li>Press Ctrl + D to create a new image.</li>
            <li>Use the plus and minus buttons to adjust the font size in the dialogue window.</li>
            <li>Press Ctrl + Alt + D to describe the complete image generated.</li>
            <li>Press Ctrl + Alt + S to send the image to print.</li>
            <li>Press Ctrl + I to view the instructions again.</li>
          </ul>
          <p>Let's get creative! Enjoy the interaction with AI and create amazing images!</p>
        </div>
        <div className={styles.actionButtons}>
          <button className={styles.describeButton}>Describe</button>
          <button className={styles.printButton}>Send to Print</button>
        </div>
      </div>
    </div>
  );
};

export default InputPage;
