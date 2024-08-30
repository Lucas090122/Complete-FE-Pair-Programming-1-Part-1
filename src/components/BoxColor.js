import React from 'react';

function rgbToHex(r, g, b) {
  const toHex = (num) => {
    const hex = num.toString(16);
    return hex.length === 1 ? '0' + hex : hex;
  };
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function BoxColor({ r, g, b }) {
  const backgroundColor = `rgb(${r}, ${g}, ${b})`;
  const hexColor = rgbToHex(r, g, b);

  const style = {
    backgroundColor: backgroundColor,
    padding: '20px',
    margin: '10px',
    color: 'white',
    textAlign: 'center',
    border: '3px solid black'
  };

  return (
    <div style={style} >
      <p >rgb({r}, {g}, {b})</p>
      <p>{hexColor}</p>
    </div>
  );
}

export default BoxColor;