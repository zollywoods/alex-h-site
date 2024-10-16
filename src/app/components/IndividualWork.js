'use client'

import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
// const fs = require('fs');
import { useRef } from "react";

export const dynamic = "force-dynamic";

export default function IndividualWork({url, title, description, firstWord}) {
    
    //  fileContent = fileContent.slice(0,fileContent.lastIndexOf('3'))
      // var text = null
      // const text = useRef();

      // var file = "/Users/zaid/Documents/Design/alexh_site/public/works-text.txt"

      // fs.readFile(file, (err, data) => {
      //   if (err) throw err;
      //   // text = data.toString()
      //   // console.log(file)
      //   // console.log(data.toString());
      //   text.current = data.toString()
      // });

      // fetch("/Users/zaid/Documents/Design/alexh_site/public/works-text.txt")
      // fetch('file.txt')
      // .then(response => response.text())
      // .then(text => console.log(text))
      // outputs the content of the text file
    
      
  return (
    <div>
      <div className={styles.individualWorkContainer}>
          <img className={styles.workImage} src={url}/>
      </div>

      <div className={styles.workText}>
        { firstWord === "Installation" ?  title != ',' &&  title : <i> {title != ',' &&  title} </i>} {description}
        {/* <i> {title != ',' &&  title}</i> {description} */}
      </div>
    </div>



  );
}
