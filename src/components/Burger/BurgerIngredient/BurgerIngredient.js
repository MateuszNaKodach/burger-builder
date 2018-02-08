import React, { Component } from 'react';
import PropTypes from 'prop-types';

import styles from './BurgerIngredient.css';

export const BREAD_BOTTOM = 'bread-bottom';
export const BREAD_TOP = 'bread-top';
export const MEAT = 'meat';
export const CHEESE = 'cheese';
export const BEACON = 'beacon';
export const SALAD = 'salad';


class BurgerIngredient extends Component {

    render() {
        let ingredient = null;
        switch (this.props.type) {
            case (BREAD_BOTTOM):
                ingredient = <div className={styles.BreadBottom}></div>;
                break;
            case (BREAD_TOP):
                ingredient = (
                    <div className={styles.BreadTop}>
                        <div className={styles.Seeds1}></div>
                        <div className={styles.Seeds2}></div>
                    </div>
                );
                break;
            case (MEAT):
                ingredient = <div className={styles.Meat}></div>;
                break;
            case (CHEESE):
                ingredient = <div className={styles.Cheese}></div>;
                break;
            case (BEACON):
                ingredient = <div className={styles.Beacon}></div>;
                break;
            case (SALAD):
                ingredient = <div className={styles.Salad}></div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;

    };

};


BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired
};

export default BurgerIngredient;