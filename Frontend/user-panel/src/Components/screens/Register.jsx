import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Register() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [phone, setPhone] = useState("");

  const navigate = useNavigate();

  const onSignUp = async () => {
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
      if (result["status"] === "success") {
        toast.success("New admin registered successfully");
        navigate(-1);
      } else {
        toast.error(result["error"]);
      }
    }
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        backgroundColor: "#f7f9fc",
      }}
    >
      <div
        style={{
          width: "400px",
          padding: "20px",
          backgroundColor: "#ffffff",
          borderRadius: "10px",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 className="text-center mb-4" style={{ fontWeight: "bold" }}>
          Register User
        </h2>
        <div>
          <div className="mb-3" style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="firstName" style={{ marginBottom: "5px", fontWeight: "bold" }}>
              First Name
            </label>
            <input
              onChange={(e) => setFirstName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter your first name"
              style={{ padding: "8px" }}
            />
          </div>

          <div className="mb-3" style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="lastName" style={{ marginBottom: "5px", fontWeight: "bold" }}>
              Last Name
            </label>
            <input
              onChange={(e) => setLastName(e.target.value)}
              type="text"
              className="form-control"
              placeholder="Enter your last name"
              style={{ padding: "8px" }}
            />
          </div>

          <div className="mb-3" style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="email" style={{ marginBottom: "5px", fontWeight: "bold" }}>
              Email
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="form-control"
              placeholder="Enter your email"
              style={{ padding: "8px" }}
            />
          </div>

          <div className="mb-3" style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="phone" style={{ marginBottom: "5px", fontWeight: "bold" }}>
              Phone
            </label>
            <input
              onChange={(e) => setPhone(e.target.value)}
              type="tel"
              className="form-control"
              placeholder="Enter your phone number"
              style={{ padding: "8px" }}
            />
          </div>

          <div className="mb-3" style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="password" style={{ marginBottom: "5px", fontWeight: "bold" }}>
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="form-control"
              placeholder="Enter your password"
              style={{ padding: "8px" }}
            />
          </div>

          <div className="mb-3" style={{ display: "flex", flexDirection: "column" }}>
            <label htmlFor="confirmPassword" style={{ marginBottom: "5px", fontWeight: "bold" }}>
              Confirm Password
            </label>
            <input
              onChange={(e) => setConfirmPassword(e.target.value)}
              type="password"
              className="form-control"
              placeholder="Confirm your password"
              style={{ padding: "8px" }}
            />
          </div>

          <button
            onClick={onSignUp}
            className="btn btn-success w-100"
            style={{ padding: "10px", marginTop: "10px" }}
          >
            Sign Up
          </button>
          <p className="text-center mt-3">
            Already have an account?{" "}
            <Link to="/login" className="text-decoration-none text-primary">
              Login here
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Register;
