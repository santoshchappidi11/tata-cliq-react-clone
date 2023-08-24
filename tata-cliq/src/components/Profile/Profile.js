import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import { toast } from "react-hot-toast";
import { AuthContexts } from "../Context/AuthContext";

const Profile = () => {
  const { state, Login } = useContext(AuthContexts);
  const [editProfile, setEditProfile] = useState({ name: "", password: "" });
  const [isShowScreen, setIsShowScreen] = useState(false);
  const [isShowEditProfilePopup, setIsShowEditProfilePopup] = useState(false);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    if (state?.currentUser?.email) {
      setCurrentUser(state.currentUser);
    } else {
      setCurrentUser({});
    }
  }, [state]);

  useEffect(() => {
    if (currentUser) {
      const allUsers = JSON.parse(localStorage.getItem("users"));
      for (let i = 0; i < allUsers.length; i++) {
        if (
          allUsers[i].email == currentUser.email &&
          allUsers[i].password == currentUser.password
        ) {
          setEditProfile(allUsers[i]);
        }
      }
    }
  }, [currentUser]);

  const handleChangeValues = (e) => {
    setEditProfile({ ...editProfile, [e.target.name]: e.target.value });
  };

  const openEditProfilePopup = () => {
    setIsShowScreen(true);
    setIsShowEditProfilePopup(true);
  };

  const closeEditProfilePopup = () => {
    setIsShowScreen(false);
    setIsShowEditProfilePopup(false);
  };

  const handleEditProfileSubmit = (e) => {
    e.preventDefault();

    if (editProfile.name && editProfile.password) {
      if (currentUser?.email) {
        const allUsers = JSON.parse(localStorage.getItem("users"));
        for (let i = 0; i < allUsers.length; i++) {
          if (
            allUsers[i].email == currentUser.email &&
            allUsers[i].password == currentUser.password
          ) {
            allUsers[i].name = editProfile.name;
            allUsers[i].password = editProfile.password;
            currentUser.name = editProfile.name;
            currentUser.password = editProfile.password;
            Login(currentUser);
            localStorage.setItem("users", JSON.stringify(allUsers));
          }
        }
      }
      setIsShowScreen(false);
      setIsShowEditProfilePopup(false);
      toast.success("Profile updated successfully!");
    } else {
      toast.error("Please fill all the fields!");
    }
  };

  return (
    <div id="profile-screen">
      <div id="profile">
        <div id="left-profile">
          <div id="left-header">
            <h4>Menu</h4>
          </div>
          <div className="left-common">
            <img
              src="https://www.tatacliq.com/src/general/components/img/WL5.svg"
              alt="profile"
            />
            <p>My Wishlist</p>
          </div>
          <div className="left-common">
            <img
              src="https://www.tatacliq.com/src/general/components/img/order-history.svg"
              alt="profile"
            />
            <p>Order History</p>
          </div>
          <div className="left-common">
            <img
              src="https://www.tatacliq.com/src/account/components/img/addressbook.svg"
              alt="profile"
            />
            <p>Address Book</p>
          </div>
          <div className="left-common">
            <img
              src="https://www.tatacliq.com/src/account/components/img/brand.svg"
              alt="profile"
            />
            <p>Brands</p>
          </div>
          <div className="left-common">
            <img
              src="https://www.tatacliq.com/src/account/components/img/card.svg"
              alt="profile"
            />
            <p>Saved Payments</p>
          </div>
          <div className="left-common">
            <img
              src="https://www.tatacliq.com/src/account/components/img/alert.svg"
              alt="profile"
            />
            <p>Alerts & Coupons</p>
          </div>
          <div className="left-common">
            <img
              src="https://www.tatacliq.com/src/account/components/img/giftCards.svg"
              alt="profile"
            />
            <p>Gift Card</p>
          </div>
          <div className="left-common">
            <img
              src="https://www.tatacliq.com/src/account/components/img/cliqCash.svg"
              alt="profile"
            />
            <p>CLiQ Cash</p>
          </div>
          <div className="left-common">
            <img
              src="https://www.tatacliq.com/src/account/components/img/addressbook.svg"
              alt="profile"
            />
            <p>Manage Notifications</p>
          </div>
          <div className="left-common">
            <img
              src="https://www.tatacliq.com/src/account/components/img/settingsRed.svg"
              alt="profile"
            />
            <p>Profile</p>
          </div>
        </div>
        <div id="main-profile">
          <div id="main-header">
            <h4>General Information</h4>
          </div>
          <div className="details">
            <div className="details-header">
              <h4>Basic Details</h4>
              <span
                style={{ cursor: "pointer" }}
                onClick={openEditProfilePopup}
              >
                Edit
              </span>
            </div>
            <div className="details-body">
              <div className="fields">
                <label>First Name</label>
                <input
                  type="text"
                  placeholder="First Name"
                  value={currentUser.name}
                />
              </div>
              <div className="fields">
                <label>Last Name</label>
                <input
                  type="text"
                  placeholder="Last Name"
                  value={currentUser.name}
                />
              </div>
              <div className="fields">
                <label>Date of Birth</label>
                <input type="date" placeholder="Date of Birth" />
              </div>
            </div>
          </div>
          {/* ---------------------- */}
          <div className="details">
            <div className="details-header">
              <h4>Contact Details</h4>
              <span>Edit</span>
            </div>
            <div className="details-body">
              <div className="fields">
                <label>Mobile Number</label>
                <input type="number" placeholder="Mobile Number" />
              </div>
              <div className="fields">
                <label>E-mail</label>
                <input
                  type="email"
                  placeholder="Email"
                  value={currentUser.email}
                />
              </div>
            </div>
          </div>
          {/* ---------------------------------------- */}
          <div className="details">
            <div className="details-header">
              <h4>Personal Details</h4>
              <span>Add</span>
            </div>
            <div className="details-body">
              <div className="fields">
                <label>Gender</label>
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
        <div id="right-profile">
          <div className="circle">
            <p>S</p>
          </div>
          <p>{currentUser.email}</p>
        </div>
      </div>
      {/* --------------------------------edit-profile-popup------------------------ */}
      {isShowScreen && (
        <div id="screen">
          {isShowEditProfilePopup && (
            <div id="edit-profile">
              <div className="close">
                <i
                  class="fa-solid fa-xmark fa-xl"
                  onClick={closeEditProfilePopup}
                ></i>
              </div>
              <div className="header">
                <h1>Edit Profile</h1>
              </div>
              <form onSubmit={handleEditProfileSubmit}>
                <input
                  type="text"
                  name="name"
                  placeholder="Change Your Name"
                  value={editProfile.name}
                  onChange={handleChangeValues}
                />
                <input
                  type="text"
                  name="password"
                  placeholder="Change Your Password"
                  value={editProfile.password}
                  onChange={handleChangeValues}
                />
                <button type="submit">Update Profile</button>
              </form>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
