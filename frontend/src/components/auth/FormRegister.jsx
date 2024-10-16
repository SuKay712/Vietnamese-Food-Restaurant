import styles from "./FormAuth.scss";
import { ICONS } from "../../constants/icons";
import { useState } from "react";
import { useNavigate } from 'react-router-dom';

const FormRegister = () => {
  const navigate = useNavigate()

  const [showPassword, setPassword] = useState(false);

  const handleHidePassword = () => {
    setPassword(prevState => !prevState)
  }
  return (
    <div className="justify-content-center form">
      <div className="w-100">
        <button className="tab_button" onClick={() =>{navigate('/auth/login')}}>Sign In</button>
        <button className="tab_button actived">Sign Up</button>
      </div>
      <div className="form-data p-4">
        <div className="form-group mb-3">
          <label htmlFor="name" className="form-label text-color__black">
            Name
          </label>
          <input type="email" className="form-control" id="email" placeholder="Enter your name" />
        </div>
        <div className="form-group mb-3">
          <label htmlFor="email" className="form-label text-color__black">
            Email
          </label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" />
        </div>
        <div className="form-group mb-3">
          <label
            htmlFor="password" className="form-label text-color__black">
            Password
          </label>
          <div className="position-relative">
            <input type={showPassword ? 'text' : 'password'} className="form-control" id="password" placeholder="8+ characters" />
            <img
              src={ICONS.eye}
              className="position-absolute hide-password"
              alt="Eye Icon"
              onClick={handleHidePassword}
            />
          </div>
        </div>
        <div className="form-group mb-3">
          <label
            htmlFor="password" className="form-label text-color__black">
            Confirm Password
          </label>
          <div className="position-relative">
            <input type={showPassword ? 'text' : 'password'} className="form-control" id="password" placeholder="Re-enter your password" />
            <img
              src={ICONS.eye}
              className="position-absolute hide-password"
              alt="Eye Icon"
              onClick={handleHidePassword}
            />
          </div>
        </div>
        <button
          className="btn btn-primary border-0 w-100 mt-2"
          style={{background: '#FA8232'}}
        >
          SIGN UP
          <img src={ICONS.arrow_right} className="ms-2"/>
        </button>
      </div>
    </div>
  )
}

export default FormRegister;
