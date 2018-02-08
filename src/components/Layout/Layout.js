import React from 'react';
import styles from './Layout.css';

const layout = (props) => (
  <React.Fragment>
    <div>
       Toolbar 
    </div>
    <main className={styles.Content}>
        {props.children}
    </main>
 </React.Fragment>
);

export default layout;