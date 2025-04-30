import Image from "next/image";
import styles from "../page.module.css";
import Link from "next/link";
import Footer from "../components/Footer.js"
import IndividualWork from "../components/IndividualWork.js"

export default function CV() {



    return (
        <main className={styles.workContainer}>
        <div className={styles.cvWrapper}>

        <h2> Alex Heilbron </h2>
        <p> b. San Rafael, CA </p>
        <p> Lives / Works in Los Angeles, CA </p>

        <br/>
        <h3> <i>EDUCATION </i> </h3>

        <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
                 2017- 2020
            </div>
            <div className={styles.cvRight}>
                University of California Los Angeles, M.F.A in Painting and Drawing
            </div>
        </div>

        <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
                2014 - 2017
            </div>
            <div className={styles.cvRight}>
                Kunstakademie Düsseldorf, Meisterschüler from Christopher Williams
            </div>
        </div>

        <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
                2005 - 2009
            </div>
            <div className={styles.cvRight}>
                San Francisco Art Institute, B.F.A in Painting
            </div>
        </div>

        <br/>
        <h3> <i>SOLO EXHIBITIONS </i> </h3>

      <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
             2025
            </div>
            <div className={styles.cvRight}>
                <i> Lined Adornment,  </i> Claremont Lewis Museum, Claremont, CA
            </div>
        </div>

      <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
             2024
            </div>
            <div className={styles.cvRight}>
                <i> Assembler,  </i> Wil Aballe Art Projects, Vancouver, BC
            </div>
        </div>
        
        <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
             2023
            </div>
            <div className={styles.cvRight}>
                <i> Apophenic,  </i> Meliksetian Briggs, Dallas, TX
            </div>
        </div>

        <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
             2022
            </div>
            <div className={styles.cvRight}>
                <i> Pre-Nuptial Agreement, </i> NADA, New York, NY
            </div>
        </div>

        <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
             2021
            </div>
            <div className={styles.cvRight}>
                <i> Time and Intent, </i> Meliksetien Briggs, Los Angeles, CA
            </div>
        </div>

        <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
             2020
            </div>
            <div className={styles.cvRight}>
                <i> High Shame, </i> Hiestand Galleries, Oxford, Ohio
            </div>
        </div>

        <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
             2017
            </div>
            <div className={styles.cvRight}>
                <i> Scent Description for a Young Woman, </i> Ashley, Berlin, Germany
            </div>
         </div>
            

        <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
             
            </div>
            <div className={styles.cvRight}>
                <i> Before Physician Narratives Came Patient Narratives, </i> Storage Capacite,
Düsseldorf, Germany
            </div>
        </div>

        <br/>
        <h3> <i>SELECTED GROUP EXHIBITIONS </i> </h3>
        {/* <br/> */}

        <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
             2024
            </div>
            <div className={styles.cvRight}>
                <i> Born Digital, </i> Santa Barbara Museum of Art, Santa Barbara, CA
            </div>
         </div>
            
         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
                2023
            </div>
            <div className={styles.cvRight}>
                <i> At the Wolford House, </i> Wolford House, Los Angeles, CA
            </div>
         </div>


         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
                
            </div>
            <div className={styles.cvRight}>
                <i> California Subject, </i> Temples, Los Angeles, CA
            </div>
         </div>

         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
                2022
            </div>
            <div className={styles.cvRight}>
                <i> Women Painting Women, </i> The Modern, Fort Worth, TX
            </div>
         </div>

         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
                
            </div>
            <div className={styles.cvRight}>
                <i> Cassoni </i> (*with Niko Chodor), Anne Baurrault, Paris, France
            </div>
         </div>


         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
                2021
            </div>
            <div className={styles.cvRight}>
                <i> Riviera Parking, </i> (*as Riviera Parking) Studio For Artistic Research, Düsseldorf, Germany
            </div>
         </div>

         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
                
            </div>
            <div className={styles.cvRight}>
                <i> Sub-Shapes, </i> Cirrus Gallery, Los Angeles, CA
            </div>
         </div>


         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
                2019
            </div>
            <div className={styles.cvRight}>
                <i> C’BARET What Not/Speak Easy, </i> LAXART, Los Angeles, California
         </div>
         </div>


         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
                2017
            </div>
            <div className={styles.cvRight}>
                <i> the body is a temple and a body is a subject and a temple has walls – it
            becomes apparent that a temple is a body, </i> Moscow Museum of Modern Art,
            Moscow, Russia
         </div>
         </div>


         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
                
            </div>
            <div className={styles.cvRight}>
                <i> Visual Athletics, </i> Cosmo Sports, Düsseldorf, Germany
         </div>
         </div>

         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
                2016
            </div>
            <div className={styles.cvRight}>
                <i> Mise En Abyme, </i> Good Press Gallery, Glasgow, Scotland
         </div>
         </div>

         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
                
            </div>
            <div className={styles.cvRight}>
                <i> Expi50/50loveja, </i> Container, Düsseldorf, Germany
         </div>
         </div>

         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
                
            </div>
            <div className={styles.cvRight}>
                <i> Makes Your Soul Feel Good Forever #2, </i> Good Forever, Düsseldorf, Germany
         </div>
         </div>

         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
                
            </div>
            <div className={styles.cvRight}>
                <i> She Hated Haiku, </i> Poppy’s, Sacramento, CA
         </div>
         </div>


         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
                2015
            </div>
            <div className={styles.cvRight}>
                <i> Too Good to Be True, </i> Contemporary Fine Arts, Berlin, Germany
         </div>
         </div>


         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
                
            </div>
            <div className={styles.cvRight}>
                <i> Mittagstisch, </i> Ladybug House, San Francisco, CA
         </div>
         </div>

         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
                2014
            </div>
            <div className={styles.cvRight}>
                <i> Wacky Worlds, </i> Mission Comics, San Francisco, CA
         </div>
         </div>

         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
                
            </div>
            <div className={styles.cvRight}>
                <i> Above the Wall Below the Wall, </i> Unit Pitt Gallery, Vancouver, BC
         </div>
         </div>

         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
                
            </div>
            <div className={styles.cvRight}>
                <i> Speed Dating, </i> Zollamt, Offenbach, Germany
         </div>
         </div>

         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
                
            </div>
            <div className={styles.cvRight}>
                <i> Kanadianish Deutsch Freundschaft, </i> Lucky&#39;s Gallery, Vancouver, BC
         </div>
         </div>


         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
                2013
            </div>
            <div className={styles.cvRight}>
                <i> Sleepover, </i> Positive/Negative, Vancouver, BC
         </div>
         </div>

         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
                
            </div>
            <div className={styles.cvRight}>
                <i> All the Rotten Eggs In One Basket, </i> Gallery Fukai, Vancouver, BC
         </div>
         </div>



         <br/>
        <h3> <i>AWARDS, GRANTS AND RESIDENCIES </i> </h3>
        {/* <br/> */}



        <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
            2023
            </div>
            <div className={styles.cvRight}>
            Pollock Krasner Foundation Grant
         </div>
         </div>

         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
            2021
            </div>
            <div className={styles.cvRight}>
            Canadian Council for the Arts, Research and Creation Grant
         </div>
         </div>

         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
            
            </div>
            <div className={styles.cvRight}>
            Kala Art Institute Residency, Berkeley, CA
         </div>
         </div>


         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
            2019 - 2020
            </div>
            <div className={styles.cvRight}>
            Helen Frankenthaler Painting Award
         </div>
         </div>

         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
            2019 - 2020
            </div>
            <div className={styles.cvRight}>
            British Columbia Arts Scholarship
         </div>
         </div>

         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
            2019
            </div>
            <div className={styles.cvRight}>
            William and Dorothy Yeck Purchase Award
         </div>
         </div>





         <br/>
        <h3> <i>PUBLICATIONS </i> </h3>
        {/* <br/> */}



        <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
            2022
            </div>
            <div className={styles.cvRight}>
            Publication for the exhibition, <i> Women Painting Women, </i> Edited with text
            by Andrea Karnes. Preface by Marla Price. Text by Emma Amos, Faith
            Ringgold, and Lorna Simpson.
         </div>
         </div>




         <br/>
        <h3> <i>TEACHING AND LECTURES </i> </h3>
        {/* <br/> */}


        <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
            2024
            </div>
            <div className={styles.cvRight}>
            Artist Talk and Graduate studio visits, University of Dallas, Texas and Museum of Contemporary Art, Dallas        
             </div>
         </div>

         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
            2024
            </div>
            <div className={styles.cvRight}>
            Artist Talk, Pomona College, Claremont, CA      
        </div>
         </div>

         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
            2023 - present
            </div>
            <div className={styles.cvRight}>
            Scripps College, Department of Art, Visiting Lecturer
        </div>
         </div>


         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
            2022 - 2023
            </div>
            <div className={styles.cvRight}>
            University of California Santa Barbara, Art Department Visiting Lecturer
        </div>
         </div>

         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
            2022 
            </div>
            <div className={styles.cvRight}>
            École nationale supérieure des beaux-arts de Lyon, Artist Talk
        </div>
         </div>

         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
            2021 
            </div>
            <div className={styles.cvRight}>
            University of California Santa Barbara, Artist Talk as Riviera Parking
        </div>
         </div>

         <div className={styles.cvFlexLine}>
            <div className={styles.cvLeft}>
            2020 
            </div>
            <div className={styles.cvRight}>
            Miami University, Artist Talk
        </div>
         </div>













        </div>

        <Footer/>
        </main>
    );
    }
