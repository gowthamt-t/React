import React, { useState } from 'react';
import './PaymentPage.css';

const PaymentPage = () => {
    const [formData, setFormData] = useState({
        cardNumber: '',
        expiryDate: '',
        cvv: '',
        cardHolderName: '',
        // donationAmount: 50, // Default donation amount
        paymentMethod: 'Credit/Debit Card' // Default payment method
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle payment submission logic here
        console.log('Form Data:', formData);

        // Show success message
        alert('Donation successful! Thank you for your support.');
    };

    return (
        <div className="payment-page-container">
            <h1>Complete Your Donation</h1>
            <form className="payment-form" onSubmit={handleSubmit}>
                <div className="form-section">
                    <h2>Payment Details</h2>
                    <div className="input-group">
                        <label>Name of the donor</label>
                        <input
                            type="text"
                            name="cardNumber"
                            value={formData.cardNumber}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    <div className="input-group">
                        <label>Cause of Donation</label>
                        <input
                            type="text"
                            name="expiryDate"
                            value={formData.expiryDate}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                    {/* <div className="input-group">
                        <label>CVV</label>
                        <input
                            type="text"
                            name="cvv"
                            value={formData.cvv}
                            onChange={handleInputChange}
                            required
                        />
                    </div> */}
                    {/* <div className="input-group">
                        <label>Card Holder Name</label>
                        <input
                            type="text"
                            name="cardHolderName"
                            value={formData.cardHolderName}
                            onChange={handleInputChange}
                            required
                        />
                    </div> */}
                    <div className="input-group">
                        <label>Donation Amount</label>
                        <input
                            type="number"
                            name="donationAmount"
                            value={formData.donationAmount}
                            onChange={handleInputChange}
                            required
                        />
                    </div>
                </div>
                <div className="form-section">
                    <h2>Payment Method</h2>
                    <div className="input-group">
                        <label>Select Payment Method</label>
                        <select
                            name="paymentMethod"
                            value={formData.paymentMethod}
                            onChange={handleInputChange}
                            required
                        >
                            <option value="Credit/Debit Card">Credit/Debit Card</option>
                            <option value="PayPal">PayPal</option>
                            <option value="Bank Transfer">Bank Transfer</option>
                        </select>
                    </div>
                </div>
                <button type="submit" className="submit-btn">Donate Now</button>
            </form>
        </div>
    );
};

export default PaymentPage;
