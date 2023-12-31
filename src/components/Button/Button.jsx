import React from 'react';
import './Button.css';

export default function Button(props) {
  const { onClick, label } = props;

  return (
    <button
      className='button'
      type='submit'
      onClick={onClick}
    >
      {label}
    </button>
  );
}
