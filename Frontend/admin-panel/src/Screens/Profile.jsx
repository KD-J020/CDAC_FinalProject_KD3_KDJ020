import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getAdminById, updateUserProfile } from "../Service/adminService";

function Profile() {
  const [profile, setProfile] = useState({});
  const [imageSrc, setImageSrc] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const loadProfile = async () => {
      try {
        const result = await getUserById(1);
        if (result) {
          setProfile(result);
          if (result.profileImage) {
            setImageSrc(`data:image/jpeg;base64,${result.profileImage}`);
          }
        }
      } catch (error) {
        console.error("Error loading profile:", error);
      }
    };
    loadProfile();
  }, []);

  const handleSave = async () => {
    if (!profile.id) return;

    const profileData = {
      id: profile.id,
      firstName: profile.firstName || "",
      lastName: profile.lastName || "",
      email: profile.email || "",
      phone: profile.phone || "",
      password: profile.password || "",
      profileImage: profile.profileImage || "",
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
            <input type="file" className="form-control" id="profileImage" />
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
