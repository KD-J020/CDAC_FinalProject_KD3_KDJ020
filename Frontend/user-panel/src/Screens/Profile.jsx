import React from 'react'
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {getUserById,updateUserProfile} from '../Service/user'
function Profile() {
  const [profile, setProfile] = useState({});
  const [imageSrc, setImageSrc] = useState(null);
  const[userImage,setUserImage]=useState(imageSrc)
  const navigate = useNavigate();
  const loadProfile = async () => {
    try {
      const result = await getUserById(1);
      console.log(result)
      if (result) {
        setProfile(result);
        if (result.image) {
          setImageSrc(`data:image/jpeg;base64,${result.image}`);
        }
      }
    } catch (error) {
      console.error("Error loading profile:", error);
    }
  };


  useEffect(() => {
    loadProfile();
    setImageSrc(`data:image/jpeg;base64,${userImage}`);
      
  }, [userImage]);


  const handleImage = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String=reader.result.split(",")[1]
        setUserImage(base64String); // Set the image preview
        setImageSrc(`data:image/jpeg;base64,${base64String}`); // Store base64 without metadata
      };
      reader.readAsDataURL(file); // Convert file to base64
    }
  };
  const base64ToByteArray = (base64) => {
    const binaryString = window.atob(base64);
    const len = binaryString.length;
    const bytes = new Uint8Array(len);
    for (let i = 0; i < len; i++) {
      bytes[i] = binaryString.charCodeAt(i);
    }
    return bytes;
  };

  const handleSave = async () => {
    if (!profile.id) return;
    const profileData = {
      id: profile.id,
      firstName: profile.firstName || "",
      lastName: profile.lastName || "",
      email: profile.email || "",
      phone: profile.phone || "",
      password: profile.password || "",
      image: userImage? base64ToByteArray(userImage):profile.image || "",
    };

    try {
      await updateUserProfile(profileData);
      navigate("/home");
    } catch (error) {
      console.error("Error updating profile:", error);
    }
  };

  return (
    <div className="container mt-1">
      <h2>Profile</h2>
      <div className="row">
        <div className="col-md-6">
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              value={profile.firstName || ""}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              id="email"
              value={profile.email || ""}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              className="form-control"
              id="phone"
              value={profile.phone || ""}
              readOnly
            />
          </div>
          <div className="mb-3">
            <label htmlFor="profileImage" className="form-label">
              Profile Image
            </label>
            <input type="file" accept='image/*' onChange={handleImage} className="form-control" id="image" />
          </div>
          <div className="mb-3">
            <button className='btn btn-success' onClick={handleSave}>save</button>
            </div>
        </div>
        <div className="col-md-6">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Profile Image</h5>
              {imageSrc ? (
                <img
                  src={imageSrc}
                  alt="Profile"
                  className="img-fluid"
                  style={{ width: 400, height: 400 }}
                />
              ) : (
                <span>No Image</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;
