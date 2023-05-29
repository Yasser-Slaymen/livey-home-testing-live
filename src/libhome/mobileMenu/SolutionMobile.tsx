import { useState } from "react";
import styles from "./SolutionMobile.module.css";
import iconOpen from "../../icons/iconOpen.webp";
import iconClose from "../../icons/iconClose.webp";

export default function SolutionMobile() {
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
            <p> SOLUTIONS </p>
            <img className={styles.OpenIcon} src={iconClose} alt="2" />
          </div>
        ) : (
          <div className={styles.SolutionMobile_Close}>
            <p> SOLUTIONS</p>

            <img className={styles.CloseIcon} src={iconOpen} alt="/" />
          </div>
        )}
      </button>
      {isOpen && (
        <ul className={styles.SolutionMobile_Items}>
          <li>
            <a href="https://www.liveryvideo.com/livery-solutions/">
            All solutions
            </a>
          </li>
          <li>
            <a href="https://www.liveryvideo.com/ultra-low-latency-video/">
            Live streaming
            </a>
          </li>
          
          <li>
            <a href="https://www.liveryvideo.com/live-shopping-solution/">
            Live shopping
            </a>
          </li>
          <li>
            <a href="https://www.liveryvideo.com/livery-usp-internal-communication/">
            Internal communication
            </a>
          </li>
          <li>
            <a href="https://www.liveryvideo.com/solution-livery-live-elearning/">
            Live e-learning
            </a>
          </li>
          <li>
            <a href="https://www.liveryvideo.com/gameshows-and-trivia/">
            Gameshows & trivia
            </a>
          </li>
          <li>
            <a href="https://www.liveryvideo.com/livery-usp-sports-betting/">
            Sports & e-sports
            </a>
          </li>
          <li>
            <a href="https://www.liveryvideo.com/corporate-communication/">
            Corporate communication
            </a>
          </li>
          
        </ul>
      )}
    </section>
  );
}
