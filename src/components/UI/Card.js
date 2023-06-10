/**
 * @file Card.js
 * @author Luke Wagener
 * @date 6/10/2023
 * 
 * This component serves as a reusable card element styled with CSS modules.
 */

import React from 'react';
import classes from './Card.module.css';

/**
 * Card component.
 *
 * @param {Object} props - Properties passed to component
 * @param {string} props.className - CSS class names
 * @param {any} props.children - Elements to be displayed as children of Card
 */
const Card = (props) => {
  return <div className={`${classes.card} ${props.className}`}>{props.children}</div>;
};

export default Card;
