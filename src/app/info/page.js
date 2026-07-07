import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import FooterAutre from "../components/FooterAutre.js"
import IndividualWork from "../components/IndividualWork.js"

export default function Home() {


    return (
        <main className={styles.infoContainer}>
            <div className={styles.info}>
                <a href="mailto:info@alexheilbron.com"> email </a>  <br/>
                <Link href="https://www.instagram.com/a.p.heilbron/"> instagram </Link> 
            </div>

            <FooterAutre/>
        </main>
    );
    }
