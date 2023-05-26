import styles from "./Header.module.css";
import stylehome from "../../HomeStyles/genralStyle/Headerhome.module.css";
import data from "../../utils/dataHome.json";
import Resourcse from "../../libhome/custom/Resourcse";
import Solutions from "../../libhome/custom/Solutions";
import ShowCases from "../../libhome/custom/ShowCases";
import HeaderHomeButton from "../atomic/HeaderHomeButton";
import HeaderHomeLogo from "../atomic/HeaderHomeLogo";
// import { Link } from "react-router-dom";

interface DataType {
  id: number;
  interactiveData?: {
    label: string;
    link: string;
  }[];
  pricingData?: {
    label: string;
    link: string;
  }[];
}
const dataItem: DataType = data[17];

export default function HeaderHome() {
  return (
    <header>
      <nav className={styles.nav_bar} key={dataItem.id}>
        <HeaderHomeLogo />
        <ul className={styles.items_liste}>
          {dataItem.interactiveData?.map((item) => (
            <li className={stylehome.items_listeFirstHome} key={item.label}>
              <a className={stylehome.items_listeFirstHome} href={item.link}>{item.label}</a>
            </li>
          ))}
          <li>
            <Solutions />
          </li>
          <li>
            <ShowCases />
          </li>
          <li>
            <Resourcse />
          </li>
          {dataItem.pricingData?.map((item) => (
            <li className={stylehome.items_listeFirstHome} key={item.label}>
              <a href={item.link}>{item.label}</a>
            </li>
          ))}
          {/* <li className={stylehome.items_listeFirstHome}>
            <Link className={styles.SolutionsMenu_title} to="/PricingPag">
              Pricing
            </Link>
          </li> */}
        </ul>
        <HeaderHomeButton />
      </nav>
    </header>
  );
}
