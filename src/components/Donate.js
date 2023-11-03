import React, { useState } from 'react';
import './Donation.css'

const Donation = () => {
  const [selectedOption, setSelectedOption] = useState('food');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [donationAmount, setDonationAmount] = useState('10');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleDonationAmountChange = (event) => {
    setDonationAmount(event.target.value);
  };

  const handleDonation = () => {
    const donationData = {
      option: selectedOption,
      phoneNumber: phoneNumber,
      donationAmount: donationAmount,
    };

    fetch('https://charity-0d32.onrender.com/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(donationData),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Donation submitted successfully');
        } else {
          console.error('Failed to submit donation');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  return (
    <div className="donation-form">
      <h2>Donate Now</h2>
      <label>Select Donation Option:</label>
      <select
        className="donation-select"
        value={selectedOption}
        onChange={handleOptionChange}
      >
        <option value="food">Food</option>
        <option value="clothing">Clothing</option>
        <option value="fees">Fees</option>
        <option value="medication">Medication</option>
        <option value="shelter">Shelter</option>
        <option value="others">Others</option>
      </select>

      <label>Donation Amount:</label>
      <input
        className="donation-input"
        type="number"
        value={donationAmount}
        onChange={handleDonationAmountChange}
        placeholder="Enter donation amount"
      />

      <label>Phone Number:</label>
      <input
        className="donation-input"
        type="text"
        value={phoneNumber}
        onChange={handlePhoneNumberChange}
        placeholder="Enter your phone number"
      />

      <button className="donation-button" onClick={handleDonation}>
        Donate
      </button>
    </div>
  );
};

export default Donation;