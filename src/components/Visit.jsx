import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContext";
import defaultImage from "../assets/images/LOGO2.jpg";

const Visit = () => {
  const { user, bio, setBio } = useContext(AuthContext);

  const [image, setImage] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  const handleBiochange = () => {
    setIsEditing(false);
  };
  return (
    <div className="flex items-center justify-center bg-white rounded-2xl shadow relative flex-col px-10 py-20">
      <div className="flex flex-col items-center justify-center">
        <div className="flex flex-col items-center justify-center relative">
          <img
            src={image || defaultImage}
            alt="profile"
            className="w-42 h-42 object-cover rounded-full border-4 border-gray-300 justify-center flex"
          />
          <div className="mt-18">
            <div className="text-black font-bold text-center my-2 lg:text-3xl text-sm">
              {user?.businessName || "Guest"} ✌️
            </div>
            {isEditing ? (
              <div className="flex flex-col items-center gap-2">
                <textarea
                  value={bio}
                  onChange={(e) => setBio(e.target.value)}
                  className="border border-gray-400 rounded-lg p-2 w-60 text-black"
                  placeholder="Enter your bio..."
                />
                <button
                  onClick={handleBiochange}
                  className="bg-purple-600 text-white rounded-3xl px-4 py-2 text-sm"
                >
                  Save
                </button>
              </div>
            ) : (
              <div className="text-black text-center lg:text-2xl text-sm flex flex-col items-center gap-2">
                <p>{bio || "Book your next cut in few minutes"}</p>
                <button
                  className="bg-white border border-purple-600 rounded-3xl px-5 py-2 text-sm"
                  onClick={() => setIsEditing(true)}
                >
                  Edit Bio
                </button>
              </div>
            )}
          </div>
          <label
            htmlFor="file-upload"
            className="absolute font-bold top-[10rem] bg-purple-600 text-white px-25 py-3 rounded-full cursor-pointer hover:bg-purple-700 my-3"
          >
            Upload
          </label>

          <input
            className="hidden"
            type="file"
            id="file-upload"
            onChange={handleImageUpload}
            accept="image/*"
          />
        </div>
      </div>
    </div>
  );
};

export default Visit;
