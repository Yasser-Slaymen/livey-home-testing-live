import styles from '../../HomeStyles/atomic/GetStartedBtn.module.css'
import { CounterDisplay } from "../../Storage/ConnterDisplay";

   

export default function FlexibleBtn() {
    const value = CounterDisplay();
  
    const elementorURL = `https://www.liveryvideo.com/pricing/?sliderValue=${value}`;
    return(
        <a className={styles.GetStartedBtn} href={elementorURL} target="_blank" rel="noopener noreferrer">see pricing</a>
    )
}
// import styles from '../../HomeStyles/atomic/GetStartedBtn.module.css'
// export default function FlexibleBtn() {
//     return(
//         <a className={styles.GetStartedBtn} href="https://www.liveryvideo.com/pricing/">see pricing</a>
//     )
// }