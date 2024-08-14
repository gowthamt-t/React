import React, { useState } from 'react';
import './FundraiserForm.css';

const FundraiserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    cause: '',
    description: '',
    goalAmount: '',
    mobileNumber: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8080/api/payments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert('Your fundraiser has been successfully submitted.');
        // Clear form fields after successful submission
        setFormData({
          name: '',
          cause: '',
          description: '',
          goalAmount: '',
          mobileNumber: '',
        });
      } else {
        alert('Failed to submit the form');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred while submitting the form');
    }
  };

  return (
    <div className="query-fundraiser-form">
      <h2>Start a Fundraiser</h2>
      <h3>Fill the fields below and we will get in touch shortly</h3>
      <form onSubmit={handleSubmit}>
        <div className="query-form-group">
          <label htmlFor="name">Fundraiser Name *</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="query-form-group">
          <label htmlFor="cause">Cause *</label>
          <input
            type="text"
            id="cause"
            name="cause"
            value={formData.cause}
            onChange={handleChange}
            required
          />
        </div>
        <div className="query-form-group">
          <label htmlFor="mobileNumber">Contact Person Mobile Number *</label>
          <input
            type="tel"
            id="mobileNumber"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            pattern="[0-9]{10}" /* Regex pattern for a 10-digit phone number */
            required
          />
        </div>
        <div className="query-form-group">
          <label htmlFor="goalAmount">Goal Amount *</label>
          <input
            type="number"
            id="goalAmount"
            name="goalAmount"
            value={formData.goalAmount}
            onChange={handleChange}
            required
          />
        </div>
        <div className="query-form-group">
          <label htmlFor="description">Description *</label>
          <textarea
            id="description"
            name="description"
            value={formData.description}
            onChange={handleChange}
            required
          />
        </div>
        
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FundraiserForm;
