import dataHome from "../../utils/dataHome.json";
import styles from "../../HomeStyles/custom/ReadyFor.module.css";

interface DataType {
  id?: number;
  componentName?: string;
  title?: string;
  description?: string;
}
const dataItem: DataType = dataHome[19];
export default function ReadyFor() {
  return (
    <section key={dataItem.id} className={styles.ReadyFor_Section}>
      <p className={styles.ReadyFor_ComponentName}>{dataItem.componentName}</p>
      <h2 className={styles.ReadyFor_title}>{dataItem.title}</h2>
      <p className={styles.ReadyFor_description}>{dataItem.description}</p>
    </section>
  );
}
