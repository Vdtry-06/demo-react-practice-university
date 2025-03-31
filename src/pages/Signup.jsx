"use client"

import { useState } from "react"
import { Link } from "react-router-dom"
import "../styles/Signup.css"

const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Add your signup logic here
  }

  return (
    <div className="signup-container">
      <div className="signup-form-container">
        <h1 className="signup-title">Đăng Ký</h1>
        <p className="signup-subtitle">
          Đã có tài khoản?{" "}
          <Link to="/login" className="login-link">
            Đăng nhập
          </Link>
        </p>

        <form onSubmit={handleSubmit} className="signup-form">
          <div className="form-row">
            <input
              type="text"
              name="firstName"
              placeholder="Họ"
              className="form-input"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
            <input
              type="text"
              name="lastName"
              placeholder="Tên"
              className="form-input"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-input"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="tel"
            name="phone"
            placeholder="Số điện thoại"
            className="form-input"
            value={formData.phone}
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Mật khẩu"
            className="form-input"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button type="submit" className="signup-button">
            Đăng Ký
          </button>
        </form>

        <div className="social-login">
          <p className="social-text">Hoặc dùng</p>
          <div className="social-buttons">
            <button className="social-button facebook-button">F</button>
            <button className="social-button google-button">G</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup