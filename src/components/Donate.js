import React, { useState } from 'react';
import axios from 'axios';

const Donation = () => {
  const [selectedOption, setSelectedOption] = useState('food');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [donationAmount, setDonationAmount] = useState('10');
  const [errorMessage, setErrorMessage] = useState('');

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const handlePhoneNumberChange = (event) => {
    setPhoneNumber(event.target.value);
  };

  const handleDonationAmountChange = (event) => {
    setDonationAmount(event.target.value);
  };

  const handleDonation = async () => {
    const donationData = {
      option: selectedOption,
      phoneNumber: phoneNumber,
      donationAmount: donationAmount,
    };

    try {
      const response = await axios.post('https://charity-0d32.onrender.com/donations', donationData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (response.status === 201) {
        console.log('Donation submitted successfully');
        // Optionally, reset the form or show a success message.
      } else {
        setErrorMessage('Failed to submit donation. Please try again.');
      }
    } catch (error) {
      console.error('Failed to submit donation:', error);
      setErrorMessage('Failed to submit donation. Please try again.');
    }
  };

  return (
    <div>
      <h2>Donate Now</h2>
      {errorMessage && <p>{errorMessage}</p>}
      <label>Select Donation Option:</label>
      <select value={selectedOption} onChange={handleOptionChange}>
        <option value="food">Food</option>
        <option value="clothing">Clothing</option>
        <option value="fees">Fees</option>
        <option value="medication">Medication</option>
        <option value="shelter">Shelter</option>
        <option value="others">Others</option>
      </select>

      <label>Phone Number:</label>
      <input type="text" value={phoneNumber} onChange={handlePhoneNumberChange} />

      <label>Donation Amount:</label>
      <input type="text" value={donationAmount} onChange={handleDonationAmountChange} />

      <button onClick={handleDonation}>Submit Donation</button>
    </div>
  );
};

export default Donation;
