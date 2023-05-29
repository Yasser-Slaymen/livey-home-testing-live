import { useState } from "react";
import styles from "./SolutionMobile.module.css";
import iconOpen from "../../icons/iconOpen.webp";
import iconClose from "../../icons/iconClose.webp";

export default function ResourcesMobile() {
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
            <p> RESOURCES </p>
            <img className={styles.OpenIcon} src={iconClose} alt="2" />
          </div>
        ) : (
          <div className={styles.SolutionMobile_Close}>
            <p> RESOURCES</p>

            <img className={styles.CloseIcon} src={iconOpen} alt="/" />
          </div>
        )}
      </button>
      {isOpen && (
        <ul className={styles.SolutionMobile_Items}>
          <li>
            <a href="https://www.liveryvideo.com/resources/">
            All resources
            </a>
          </li>
          <li>
            <a href="https://www.liveryvideo.com/blog/livery-industries/">
            Industries
            </a>
          </li>
          <li>
            <a href="https://www.liveryvideo.com/blog/livery-compared/">
            Compare Livery to others
            </a>
          </li>
          <li>
            <a href="https://www.liveryvideo.com/blog/livery-explained/">
            Explainer videos
            </a>
          </li>
          <li>
            <a href="https://www.liveryvideo.com/blog/livery-articles/">
            Blog
            </a>
          </li>
          <li>
            <a href="https://www.liveryvideo.com/glossary/">
            Glossary
            </a>
          </li>
          <li>
            <a href="https://docs.liveryvideo.com/">
            Technical documentation
            </a>
          </li>
        </ul>
      )}
    </section>
  );
}
