import React from 'react';
import './CreditCard.css';
import mastercardIcon from '../images/master.png'
import visaIcon from '../images/visa.png'

function CreditCard(props) {
  const { 
    type, 
    number, 
    expirationMonth, 
    expirationYear, 
    bank, 
    owner, 
    bgColor, 
    color 
  } = props;

  const cardStyle = {
    backgroundColor: bgColor,
    color: color
  };

  const formatCardNumber = (number) => {
    const groups = number.match(/.{1,4}/g);
    const formattedGroups = groups.map((group, index) => 
      index === groups.length - 1 
        ? group 
        : group.replace(/\d/g, '•')
    );
    return formattedGroups.join(' ');
  };

  const formatExpirationDate = (month, year) => {
    const formattedMonth = month.toString().padStart(2, '0');
    const formattedYear = year.toString().slice(-2);
    return `${formattedMonth}/${formattedYear}`;
  };

  const renderCardTypeIcon = () => {
    switch (type) {
      case 'Visa':
        return <img src={visaIcon} alt="Visa" className="card-icon" />;
      case 'Master Card':
        return <img src={mastercardIcon} alt="MasterCard" className="card-icon" />;
      default:
        return null;
    }
  };

  return (
    <div className="credit-card" style={cardStyle}>
      <div className="card-type">{renderCardTypeIcon()}</div>
      <div className="card-number">{formatCardNumber(number)}</div>
      <div className="card-details">
        <p className="card-expiration">
          Expires {formatExpirationDate(expirationMonth, expirationYear)}
          &nbsp;&nbsp;&nbsp;
          {bank}
        </p>
        <p className="card-owner">{owner}</p>
      </div>
    </div>
  );
}

export default CreditCard;