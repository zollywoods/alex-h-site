import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";

export default function FooterAutre() {
  return (
    <div className={styles.footerAutre}>
        <div className={styles.footerLeft}>
        <Link href="/" className={styles.nameUnderline}> Alex Heilbron  </Link>
        </div>

        <div className={styles.footerRight}>
            <Link href="/work" className={styles.footerList}> Work </Link>
            <Link href="/info"  className={styles.footerList}> Info </Link>
            <Link href="/cv" className={styles.footerList}> CV </Link> 
            <Link href="https://www.instagram.com/a.p.heilbron/?hl=en" className={styles.footerList}> Instagram </Link>
        </div>
    </div>

  );
}
