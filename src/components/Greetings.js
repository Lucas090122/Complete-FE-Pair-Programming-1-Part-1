import React from 'react';
import './Greeting.css';

function Greetings({ lang, children }) {
  let greeting;

  switch (lang) {
    case 'de':
      greeting = 'Hallo';
      break;
    case 'fr':
      greeting = 'Bonjour';
      break;
    case 'en':
      greeting = 'Hello';
      break;
    case 'es':
      greeting = 'Hola';
      break;
    case 'fi':
      greeting = 'Hei';
      break;
    default:
      greeting = 'Hello';
  }

  return (
    <div className='greeting'>
      <strong>{greeting} {children}</strong>
    </div>
  );
}

export default Greetings;