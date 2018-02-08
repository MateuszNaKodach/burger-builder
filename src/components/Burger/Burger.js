import React from 'react';
import styles from './Burger.css';
import BurgerIngredient, { BREAD_TOP, BREAD_BOTTOM, CHEESE, MEAT } from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type={BREAD_TOP}/>
            <BurgerIngredient type={CHEESE}/>
            <BurgerIngredient type={MEAT}/>
            <BurgerIngredient type={BREAD_BOTTOM}/>
        </div>
    );
}

export default burger;