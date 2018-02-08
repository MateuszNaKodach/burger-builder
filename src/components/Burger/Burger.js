import React from 'react';
import styles from './Burger.css';
import BurgerIngredient, { BREAD_TOP, BREAD_BOTTOM, CHEESE, MEAT } from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    const transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [... Array(props.ingredients[igKey])].map((_,i) => {
                return <BurgerIngredient key ={igKey+i} type={igKey}/>
            })
        });
        
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type={BREAD_TOP}/>
            {transformedIngredients}
            <BurgerIngredient type={BREAD_BOTTOM}/>
        </div>
    );
}

export default burger;