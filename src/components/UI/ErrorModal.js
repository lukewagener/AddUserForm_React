/**
 * @file ErrorModal.js
 * @author Luke Wagener
 * @date 6/10/2023
 * 
 * This component is a modal for displaying error messages.
 */

import React from 'react';
import Card from './Card';
import Button from './Button';
import classes from './ErrorModal.module.css';

/**
 * ErrorModal component.
 *
 * @param {Object} props - Properties passed to component
 * @param {Function} props.onConfirm - Callback function to handle confirm event
 * @param {string} props.title - Title of the error
 * @param {string} props.message - Error message
 */
const ErrorModal = (props) => {
  return (
    <div>
      <div className={classes.backdrop} onClick={props.onConfirm}/>
      <Card className={classes.modal}>
        <header className={classes.header}>
          <h2>{props.title}</h2>
        </header>
        <div className={classes.content}>
          <p>{props.message}</p>
        </div>
        <footer className={classes.actions}>
          <Button onClick={props.onConfirm}>Okay</Button>
        </footer>
      </Card>
    </div>
  );
};

export default ErrorModal;
