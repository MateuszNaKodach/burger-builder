import React from 'react';
import { SALAD, BACON, CHEESE, MEAT } from '../BurgerIngredient/BurgerIngredient';

import BuildControl from './BuildControl/BuildControl';
import styles from './BuildControls.css';

const controls = [
    { label: 'Salad', type: SALAD },
    { label: 'Bacon', type: BACON },
    { label: 'Cheese', type: CHEESE },
    { label: 'Meat', type: MEAT }
]

const buildControls = (props) => (
    <div className={styles.BuildControls}>
        {controls.map(ctrl => <BuildControl
            key={ctrl.label}
            {...ctrl}
            added={() => props.ingredientAdded(ctrl.type)} />)
        }
    </div>
)

export default buildControls;