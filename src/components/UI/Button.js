/**
 * @file Button.js
 * @author Luke Wagener
 * @date 6/10/2023
 * 
 * This component serves as a reusable button element styled with CSS modules.
 */

import React from 'react';
import classes from './Button.module.css';

/**
 * Button component.
 *
 * @param {Object} props - Properties passed to component
 * @param {string} props.type - Button type
 * @param {Function} props.onClick - Callback function for button's onClick event
 * @param {any} props.children - Elements to be displayed as children of button
 */
const Button = (props) => {
  return (
    <button
      className={classes.button}
      type={props.type || 'button'}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Button;
