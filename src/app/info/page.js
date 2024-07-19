import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import FooterAutre from "../components/FooterAutre.js"
import IndividualWork from "../components/IndividualWork.js"

export default function Home() {


    return (
        <main className={styles.infoContainer}>
            <div className={styles.info}>
                <Link href="info@alexheilbron.com"> email </Link>  <br/>
                <Link href="https://www.instagram.com/a.p.heilbron/"> instagram </Link> 
            </div>

            <FooterAutre/>
        </main>
    );
    }
