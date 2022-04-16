import Image from "next/image";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <Image src="/img/bg.png" objectFit="cover" layout="fill" alt="" />
      </div>
      <div className={styles.item}>
        <div className={styles.card}>
          <h2 className={styles.motto}>
            WELCOME! WE HAVE SUPER DELICIOUS BURGER AND BAKED TO PERFECTION PIZZA JUST FOR YOU!
          </h2>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>FIND OUR RESTAURANTS</h1>
          <p className={styles.text}>
            10 Anson Road.
            <br /> Singapore 079903
            <br /> (65) 123-1213
          </p>
          <p className={styles.text}>
            11 Adam Road.
            <br /> Singapore 289876
            <br /> (65) 123-3456
          </p>
          <p className={styles.text}>
            01 King ALbert Park
            <br /> Singapore 598292
            <br /> (65) 456-7788
          </p>
          <p className={styles.text}>
            03 Penang Road.
            <br /> Singapore 238459
            <br /> (65) 567-8901
          </p>
        </div>
        <div className={styles.card}>
          <h1 className={styles.title}>OPENING HOURS</h1>
          <p className={styles.text}>
            MONDAY UNTIL FRIDAY
            <br /> 9:00 – 22:00
          </p>
          <p className={styles.text}>
            SATURDAY - SUNDAY
            <br /> 12:00 – 24:00
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;