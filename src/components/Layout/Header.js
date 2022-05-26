import { Fragment } from "react";
import HeaderCartButton from "./HeaderCardButton";
import mealImg from "../../assets/meals.jpg";
import styles from "./Header.module.css";

const Header=props=>{
return <Fragment>
    <header className={styles.header}>
        <h2>ReactMeals</h2>
        <HeaderCartButton onClick={props.onShow}/>
    </header>
    <div className={styles['main-image']}>
        <img src={mealImg}/>
    </div>
</Fragment>
}

export default Header;