import './ChatWindow.scss';
import React, { useState } from "react";
import { Link } from 'react-router-dom';

function ChatWindow() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        contactNumber: "",
    });

    const [errors, setErrors] = useState({
        name: "",
        email: "",
        contactNumber: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
        setErrors((prevErrors) => ({
            ...prevErrors,
            [name]: "", 
        }));
    };

    const validate = () => {
        let isValid = true;
        let validationErrors = {};

        if (!formData.name.trim()) {
            validationErrors.name = "Name is required.";
            isValid = false;
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!formData.email.trim()) {
            validationErrors.email = "Email is required.";
            isValid = false;
        } else if (!emailRegex.test(formData.email)) {
            validationErrors.email = "Enter a valid email address.";
            isValid = false;
        }

        const contactRegex = /^\d{10}$/; 
        if (!formData.contactNumber.trim()) {
            validationErrors.contactNumber = "Contact number is required.";
            isValid = false;
        } else if (!contactRegex.test(formData.contactNumber)) {
            validationErrors.contactNumber =
                "Enter a valid 10-digit contact number.";
            isValid = false;
        }

        setErrors(validationErrors);
        return isValid;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validate()) {
            alert("Form submitted successfully!");
            
        }
    };

    return (
        <>
                <form onSubmit={handleSubmit} className="information">
                    <div className="information__area">
                        <textarea
                            name="name"
                            placeholder="Full Name"
                            value={formData.name}
                            onChange={handleChange}
                        ></textarea>
                        {errors.name && <p className="error">{errors.name}</p>}
                    </div>

                    <div className="information__area">
                        <textarea
                            name="email"
                            placeholder="Email"
                            value={formData.email}
                            onChange={handleChange}
                        ></textarea>
                        {errors.email && <p className="error">{errors.email}</p>}
                    </div>

                    <div className="information__area">
                        <textarea
                            name="contactNumber"
                            placeholder="Contact Number"
                            value={formData.contactNumber}
                            onChange={handleChange}
                        ></textarea>
                        {errors.contactNumber && (
                            <p className="error">{errors.contactNumber}</p>
                        )}
                    </div>

                    <Link to = "/chat">
                        <button className="information__button" type="submit">
                            Start Chat
                        </button>
                    </Link>
                </form>
        </>
    );
}

export default ChatWindow;