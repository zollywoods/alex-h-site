import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import Footer from "../components/Footer.js"
import IndividualWork from "../components/IndividualWork.js"
import { promises as fs } from 'fs';

export const dynamic = "force-dynamic";

export default async function Home() {

    var theTextUrl = "/works-text.txt" 
    var text = null;

    const theWholeFile = await fs.readFile(process.cwd() + theTextUrl, 'utf8');

        //  fs.readFile(theTextUrl, (err, data) => {
        //     if (err) throw err;
        //     // text = data.toString()
        //     console.log(data.toString());
        //     text =  data.toString()
        //   });
    
    // const oneText = theWholeFile.slice(0, 5);
// const oneText = theWholeFile
    // const oneText = theWholeFile.split('3:').pop().split('\n')[0]; // returns 'two'
    // const oneText = theWholeFile.split('3:').pop().split('\n')[0]; // returns 'two'
    // var oneText = theWholeFile.substring(theWholeFile.indexOf('1: ') + 2, theWholeFile.indexOf('2: ') )
    var oneText = null


    // const oneText = theWholeFile
    // const oneText = theWholeFile.substring(
    //     theWholeFile.indexOf("1:") + 1, 
    //     theWholeFile.lastIndexOf("2:")
    // );
    




    console.log("oneText ==> ", oneText)
    let images = []
    for(let i = 1; i < 59; i++){
        let stringNumber = i;
        if(i < 10){
            stringNumber = "/works/0" + i + ".jpg"
            oneText = theWholeFile.substring(theWholeFile.indexOf(i + ': ') + 2, theWholeFile.indexOf( i + 1 + ': ') )
            var kept = oneText.substring( 0, oneText.indexOf(",")) + ',';
            var remainder = oneText.substring(oneText.indexOf(",")+1, oneText.length);

            var firstWord = kept.trim()
            firstWord = firstWord.split(' ');
            firstWord = firstWord[0]

            // oneText = kept.italics() + remainder
            images.push( <IndividualWork url={stringNumber} title={kept} description={remainder} firstWord={firstWord}/>)

        }
        else{
            stringNumber = "/works/" + i + ".jpg"
            oneText = theWholeFile.substring(theWholeFile.indexOf(i + ': ') + 3, theWholeFile.indexOf( i + 1 + ': ') )
            var kept = oneText.substring( 0, oneText.indexOf(",")) + ',';
            var remainder = oneText.substring(oneText.indexOf(",")+1, oneText.length);
            // let res = kept.split(' ')[0];
            var firstWord = kept.trim()
            firstWord = firstWord.split(' ');
            firstWord = firstWord[0]
            console.log(i, " and , ", firstWord)
            if(firstWord === "Installation"){

                console.log("YAY, ", i)
                console.log(kept)
            }
            // oneText = kept + remainder
            images.push( <IndividualWork url={stringNumber} title={kept} description={remainder} firstWord={firstWord}/>)

    
        }
    }


    return (
        <main className={styles.workContainer}>

        {images}
        <Footer/>
        </main>
    );
    }
