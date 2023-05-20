import styles from '../../HomeStyles/atomic/LiveVideoBtn.module.css'
import Icon_arrowRigth from '../../icons/arrow-1.svg'
export default function LiveVideoBtn(){
    return(
        <a
        className={styles.LiveVideoBtn}
        href="https://www.liveryvideo.com/video/"
      >
      live video
        <span>
          <img
            className={styles.LiveVideoBtn_Icon_arrowRight}
            src={Icon_arrowRigth}
            alt="arrowright"
          />
        </span>
      </a>
    )
}