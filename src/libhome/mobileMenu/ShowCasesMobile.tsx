import { useState } from "react";
import styles from "./SolutionMobile.module.css";
import iconOpen from "../../icons/iconOpen.webp"
import iconClose from "../../icons/iconClose.webp"

export default function ShowCasesMobile() {
  // button click
  const [isOpen, setOpen] = useState(false);

  return (
    <section className={styles.SolutionMobile}>
      <button
        className={styles.SolutionMobile_Btn}
        onClick={() => setOpen(!isOpen)}
      >
        {isOpen ? (
          <div className={styles.SolutionMobile_Open}>
           <p> SHOWCASES </p> 
            <img className={styles.OpenIcon} src={iconClose} alt="2" />
          </div>
        ) : (
          <div className={styles.SolutionMobile_Close}>
            <p> SHOWCASES</p>
            
            <img className={styles.CloseIcon} src={iconOpen} alt="/" />
          </div>
        )}
      </button>
      {isOpen && (
       
          <ul className={styles.SolutionMobile_Items}>
            <li>
              <a href="https://www.liveryvideo.com/showcase/">
              All showcases
              </a>
            </li>
            <li>
              <a href="https://www.liveryvideo.com/showcase/#showcase-sports-en-e-sports">
              Sports & e-Sports
              </a>
            </li>
            <li>
              <a href="https://www.liveryvideo.com/showcase/#showcase-e-commerce">
              E-commerce
              </a>
            </li>
            <li>
              <a href="https://www.liveryvideo.com/showcase/#showcase-business-events">
              Business events
              </a>
            </li>
            <li>
              <a href="https://www.liveryvideo.com/showcase/#showcase-live-gameshow-en-travia">
              Live gameshows & trivia
              </a>
            </li>
            <li>
              <a href="https://www.liveryvideo.com/showcase/#showcase-live-entertainment-en-events">
              Live entertainment & events
              </a>
            </li>
            <li>
              <a href="https://www.liveryvideo.com/showcase/#showcase-ott">
              OTT & social video
              </a>
            </li>
            <li>
              <a href="https://www.liveryvideo.com/showcase/#showcase-news-en-finance">
              News & finance
              </a>
            </li>
            <li>
              <a href="https://www.liveryvideo.com/showcase/#showcase-betting-en-gambling">
              Betting & gambling
              </a>
            </li>
            <li>
              <a href="https://www.liveryvideo.com/showcase/#showcase-learning-en-development">
              Learning & development
              </a>
            </li>
        
          </ul>
        
      )}
    </section>
  );
}
