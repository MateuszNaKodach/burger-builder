import React from 'react';
import { SALAD, BEACON, CHEESE, MEAT } from '../BurgerIngredient/BurgerIngredient';

import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.css';

const controls = [
    {label: 'Salad', type: SALAD},
    {label: 'Beacon', type: BEACON},
    {label: 'Cheese', type: CHEESE},
    {label: 'Meat', type: MEAT}
]

const buildControls = (props) => (
    <div className={styles.BuildControls}>
        {controls.map(ctrl => <BuildControl key={ctrl.label} {...ctrl} />)}
    </div>
)

export default buildControls;