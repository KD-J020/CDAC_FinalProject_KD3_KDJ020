import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import "../Styles/Register.css";
import { createUrl } from "../utils";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");
  

  const navigate = useNavigate();

  const onSignUp = async (firstName, lastName, email, password, phone) => {
    const user = {
        firstName,
        lastName,
        email,
        password,
        phone,
        role: "CUSTOMER"
    };

    try {
        const response = await fetch(createUrl(`user/post"`), {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        const data = await response.json();

        if (response.ok) {
            return { status: "success", message: data.message };
        } else {
            return { status: "error", message: data.message || "Registration failed" };
        }
    } catch (error) {
        console.error("Error in registration:", error);
        return { status: "error", message: error.message };
    }
  };
    

  const handleRegister = async (e) => {
    e.preventDefault();
    if (firstName.length === 0) {
      toast.warn("Please enter the first name");
    } else if (lastName.length === 0) {
      toast.warn("Please enter the last name");
    } else if (email.length === 0) {
      toast.warn("Please enter the email");
    } 
    else if (phone.length === 0) {
      toast.warn("Please enter the phone number");
    }
    else if (password.length === 0) {
      toast.warn("Please enter the password");
    } else if (confirmPassword.length === 0) {
      toast.warn("Please enter the confirm password");
    } else if (password !== confirmPassword) {
      toast.warn("Passwords do not match");
    }  else {
      const result = await onSignUp(firstName, lastName, email, password, phone);
      if (result.status === "success") {
        toast.success(result.message);
        navigate("/login");
    } else {
        toast.error(result.message);
    }
    }
  };
   
  const handleCancel = () => {
    navigate("/"); 
  };

  return (
    <div className="register-container">
      <form onSubmit={handleRegister} className="register-form">
        <h2 className="text-center">Register</h2>
        <div className="form-group">
          <label>First Name</label>
          <input
            type="text"
            className="form-control"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Last Name</label>
          <input
            type="text"
            className="form-control"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input
            type="text"
            className="form-control"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label>Confirm Password</label>
          <input
            type="password"
            className="form-control"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
          <button type="button" className="btn btn-secondary" onClick={handleCancel}>
            Cancel
          </button>
        </div>
        <p className="text-center mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-decoration-none text-primary">
            Login here
          </Link>
        </p>
      </form>
    </div>
  );    
}

export default Register;
