import React, { useState, useEffect } from "react";
import { UserProfile } from "../types"; // Assuming you have a type for user profile data

const GetProfile = () => {
  const [userProfile, setUserProfile] =
    (useState < UserProfile) | (null > null);

  useEffect(() => {
    // Fetch user profile data here (example)
    const fetchProfile = async () => {
      try {
        const response = await fetch("api/user/profile");
        if (response.ok) {
          const data = await response.json();
          setUserProfile(data);
        } else {
          throw new Error("Failed to fetch user profile");
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchProfile();
  }, []);

  return (
    <div className="bg-gray-100 h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-2xl font-semibold mb-4">User Profile</h1>
        {userProfile && (
          <div>
            <p>Name: {userProfile.name}</p>
            <p>Email: {userProfile.email}</p>
            {/* Display other profile information */}
          </div>
        )}
      </div>
    </div>
  );
};

export default GetProfile;
