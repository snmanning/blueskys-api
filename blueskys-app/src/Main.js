import React from 'react';
import './Main.css';

const Main = (props) => (
    <div className='Main-container'>
        {props.children}
    </div>
)

export default Main;