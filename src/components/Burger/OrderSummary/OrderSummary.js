import React, {Fragment} from 'react';
import Button from '../../UI/Button/Button.js';
import {BUTTON_DANGER, BUTTON_SUCCESS} from "../../UI/Button/Button";

const orderSummary = (props) => {
    const ingredientSummary = Object.keys(props.ingredients)
        .map(igKey =>
            <li key={igKey}>
                <span style={{textTransform: 'capitalize'}}>{igKey}</span> : {props.ingredients[igKey]}
            </li>);

    return (
        <Fragment>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue to Checkout?</p>
            <Button btnType={BUTTON_DANGER} clicked={props.purchaseCancelled}>CANCEL</Button>
            <Button btnType={BUTTON_SUCCESS} clicked={props.purchaseContinued}>CONTINUE</Button>
        </Fragment>
    );
};

export default orderSummary;