import React, { useState } from "react";

function FormValidation() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    dob: "",
    mobile: "",
    gender: "",
    role: "",
    pinCode: ""
  });

  const [errors, setErrors] = useState({});

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const mobileRegex = /^[6-9]\d{9}$/;
  const pinCodeRegex = /^\d{6}$/;
  const nameRegex = /^[A-Za-z ]{3,}$/;

  const validateForm = () => {
    let formErrors = {};

    if (!formData.name) {
      formErrors.name = "Name is required";
    } else if (!nameRegex.test(formData.name)) {
      formErrors.name = "Name must be at least 3 characters and contain only letters";
    }

    if (!formData.email) {
      formErrors.email = "Email is required";
    } else if (!emailRegex.test(formData.email)) {
      formErrors.email = "Enter a valid email address";
    }

    if (!formData.password) {
      formErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      formErrors.password = "Password must be at least 8 characters long";
    }

    if (!formData.dob) {
      formErrors.dob = "Date of birth is required";
    }

    if (!formData.mobile) {
      formErrors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(formData.mobile)) {
      formErrors.mobile = "Enter a valid 10-digit mobile number";
    }

    if (!formData.gender) {
      formErrors.gender = "Gender is required";
    }

    if (!formData.role) {
      formErrors.role = "Role is required";
    }

    if (!formData.pinCode) {
      formErrors.pinCode = "Pin code is required";
    } else if (!pinCodeRegex.test(formData.pinCode)) {
      formErrors.pinCode = "Enter a valid 6-digit pin code";
    }

    setErrors(formErrors);
return Object.keys(formErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Form submitted successfully!");
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const formStyle = {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    margin: 'auto',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9'
  };

  const inputStyle = {
    marginBottom: '10px',
    padding: '8px',
    fontSize: '14px',
    borderRadius: '3px',
    border: '1px solid #ccc'
  };

  const labelStyle = {
    marginBottom: '5px',
    fontWeight: 'bold'
  };

  const errorStyle = {
    color: 'red',
    fontSize: '12px',
    marginBottom: '10px'
  };

  const buttonStyle = {
    padding: '10px',
    fontSize: '16px',
    backgroundColor: '#28a745',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer'
  };

  return (
    <div>
      <h2 style={{ textAlign: 'center' }}>Form Validation</h2>
      <form onSubmit={handleSubmit} style={formStyle}>
        <div>
          <label style={labelStyle}>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Enter your name"
          />
          <p style={errorStyle}>{errors.name ? errors.name : ''}</p>
        </div>

        <div>
          <label style={labelStyle}>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Enter your email"
          />
          <p style={errorStyle}>{errors.email ? errors.email : ''}</p>
        </div>

        <div>
          <label style={labelStyle}>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Enter your password"
          />
          <p style={errorStyle}>{errors.password ? errors.password : ''}</p>
        </div>

        <div>
          <label style={labelStyle}>Date of Birth:</label>
          <input
            type="date"
            name="dob"
            value={formData.dob}
            onChange={handleChange}
            style={inputStyle}
          />
          <p style={errorStyle}>{errors.dob ? errors.dob : ''}</p>
        </div>

        <div>
          <label style={labelStyle}>Mobile:</label>
          <input
            type="text"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Enter your mobile number"
          />
          <p style={errorStyle}>{errors.mobile ? errors.mobile : ''}</p>
        </div>

        <div>
          <label style={labelStyle}>Gender:</label>
          <select name="gender" value={formData.gender} onChange={handleChange} style={inputStyle}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <p style={errorStyle}>{errors.gender ? errors.gender : ''}</p>
        </div>

        <div>
          <label style={labelStyle}>Role:</label>
          <input
            type="text"
            name="role"
            value={formData.role}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Enter your role"
          />
          <p style={errorStyle}>{errors.role ? errors.role : ''}</p>
        </div>

        <div>
          <label style={labelStyle}>Pin Code:</label>
          <input
            type="text"
            name="pinCode"
            value={formData.pinCode}
            onChange={handleChange}
            style={inputStyle}
            placeholder="Enter your pin code"
          />
          <p style={errorStyle}>{errors.pinCode ? errors.pinCode : ''}</p>
        </div>

        <div>
          <button type="submit" style={buttonStyle}>Submit</button>
        </div>
      </form>
    </div>
  );
}

export default FormValidation;