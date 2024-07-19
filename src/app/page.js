// 'use server'
import Image from "next/image";
import styles from "./page.module.css";
import Link from "next/link";
import FooterHome from "./components/FooterHome.js"

export const dynamic = "force-dynamic";

export default  async function Home() {

  function getRandomInt(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled); // The maximum is exclusive and the minimum is inclusive
  }
  

  const randomImage = () => {
    return("cover/" + getRandomInt(1, 5) + ".jpg")
  }

  return (
    <main className={styles.homeContainer}>
        <img src={randomImage()}  className={styles.backgroundImage} />
        <FooterHome/>
    </main>
  );
}
