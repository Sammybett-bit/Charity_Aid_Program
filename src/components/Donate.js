import React, { useState } from 'react';
import axios from 'axios';
import './Donation.css';

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
      const response = await axios.post('https://charity-0d32.onrender.com/donations', {
        option: formData.option,
        donationAmount: formData.donationAmount,
        phonenumber: formData.phonenumber,
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
    <div className="donation-form">
      <h2>Donate Now</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
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

