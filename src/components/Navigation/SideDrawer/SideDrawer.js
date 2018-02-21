import React, {Fragment} from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import Backdrop from '../../UI/Backdrop/Backdrop';
import styles from './SideDrawer.css';

const sideDrawer = (props) => {
    let attachedStyles =  [styles.SideDrawer, styles.Close];
    if(props.open) {
        attachedStyles = [styles.SideDrawer];
    }
    return (
        <Fragment>
            <Backdrop show={props.open} clicked={props.closed}/>
            <div className={attachedStyles.join(' ')}>
                <div className={styles.Logo}>
                    <Logo/>
                </div>
                <nav>
                    <NavigationItems/>
                </nav>
            </div>
        </Fragment>
    );
};

export default sideDrawer;