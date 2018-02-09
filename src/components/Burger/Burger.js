import React from 'react';
import styles from './Burger.css';
import BurgerIngredient, { BREAD_TOP, BREAD_BOTTOM, CHEESE, MEAT } from './BurgerIngredient/BurgerIngredient';

const burger = (props) => {

    //Sprobowac bez spread operator! Jak wtedy dział reduce?
    let transformedIngredients = Object.keys(props.ingredients)
        .map(igKey => {
            return [...Array(props.ingredients[igKey])].map((_,i) => {
                return <BurgerIngredient key ={igKey+i} type={igKey}/>
            })
        }).reduce((arr, el) => arr.concat(el), []);
        
    if(transformedIngredients.length === 0){
        transformedIngredients = <p>Please start adding ingredients!</p>
    }
    
    return (
        <div className={styles.Burger}>
            <BurgerIngredient type={BREAD_TOP}/>
            {transformedIngredients}
            <BurgerIngredient type={BREAD_BOTTOM}/>
        </div>
    );
}

export default burger;