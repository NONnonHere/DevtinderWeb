import { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../utils/userSlice';
import axios from 'axios';

const Profile = () => {
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user.user);
  const [isEditing, setIsEditing] = useState(false);
  const [newSkill, setNewSkill] = useState('');

  // Initialize formData with empty array for skills if none exist
  const [formData, setFormData] = useState({
    firstName: user?.firstName || '',
    lastName: user?.lastName || '',
    gender: user?.gender || '',
    age: user?.age || '',
    skills: Array.isArray(user?.skills) ? user.skills : [] // Ensure skills is always an array
  });
  const [error, setError] = useState('');

  useEffect(() => {
    // Update formData when user data changes
    if (user) {
      setFormData({
        firstName: user.firstName || '',
        lastName: user.lastName || '',
        gender: user.gender || '',
        age: user.age || '',
        skills: Array.isArray(user.skills) ? user.skills : [] // Ensure skills is always an array
      });
    }
  }, [user]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleAddSkill = (e) => {
    e.preventDefault();
    if (newSkill.trim() && formData.skills.length < 10) {
      // Update skills array
      const updatedSkills = [...formData.skills, newSkill.trim()];
      
      setFormData(prev => ({
        ...prev,
        skills: updatedSkills
      }));
      
      // Clear input
      setNewSkill('');
      
      // Log for debugging
      console.log('Updated skills:', updatedSkills);
    }
  };

  const handleSubmit = async () => {
    try {
      // Log the data being sent
      console.log('Sending update request with data:', formData);
      
      const res = await axios.patch(
        'http://localhost:7777/profile/update',
        {
          ...formData,
          skills: formData.skills // Ensure skills array is included
        },
        { 
          withCredentials: true,
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );

      if (res.status === 200) {
        console.log('Update successful:', res.data);
        // Update Redux store with new data
        dispatch(updateUser({ ...user, ...formData }));
        setIsEditing(false);
        setError('');
      }
    } catch (err) {
      console.error('Error details:', err.response || err);
      setError(err.response?.data || 'Failed to update profile');
    }
  };

  const handleImageUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      try {
        const formData = new FormData();
        formData.append('profileImage', file);
        
        const res = await axios.post(
          'http://localhost:7777/profile/upload-image',
          formData,
          { 
            withCredentials: true,
            headers: {
              'Content-Type': 'multipart/form-data'
            }
          }
        );

        if (res.status === 200) {
          dispatch(updateUser(res.data));
        }
      } catch (err) {
        setError('Failed to upload image');
        console.error('Error uploading image:', err);
      }
    }
  };

  if (!user) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-slate-800">
        <div className="text-white">Loading user data...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-800 p-4">
      <div className="card bg-slate-700 text-white w-96 shadow-xl rounded-2xl overflow-hidden">
        {error && (
          <div className="bg-red-100 text-red-700 p-3 text-sm">{error}</div>
        )}

        {/* Profile Image Section */}
        <div className="relative w-full h-48 group">
          <img
            src={user.profileImage || "https://via.placeholder.com/400x400?text=Profile+Image"}
            alt="Profile"
            className="w-full h-48 object-cover"
          />
          {isEditing && (
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity">
              <label className="btn btn-circle btn-ghost text-white cursor-pointer">
                <input
                  type="file"
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageUpload}
                />
                ✏️
              </label>
            </div>
          )}
        </div>

        <div className="card-body p-6">
          {/* First Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">First Name</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="input input-bordered bg-slate-600 text-white w-full"
            />
          </div>

          {/* Last Name */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Last Name</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="input input-bordered bg-slate-600 text-white w-full"
            />
          </div>

          {/* Gender */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Gender</span>
            </label>
            <select
              name="gender"
              value={formData.gender}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="select select-bordered bg-slate-600 text-white w-full"
            >
              <option value="">Select Gender</option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Age */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Age</span>
            </label>
            <input
              type="number"
              name="age"
              value={formData.age}
              onChange={handleInputChange}
              disabled={!isEditing}
              className="input input-bordered bg-slate-600 text-white w-full"
            />
          </div>

          {/* Skills */}
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">
                Skills ({formData.skills.length}/10)
              </span>
            </label>
            
            {/* Display Current Skills */}
            <div className="flex flex-wrap gap-2 mb-2">
              {Array.isArray(formData.skills) && formData.skills.map((skill, index) => (
                <div key={index} className="badge badge-primary badge-lg">
                  {skill}
                  {isEditing && (
                    <button 
                      className="ml-2"
                      onClick={() => {
                        const updatedSkills = formData.skills.filter((_, i) => i !== index);
                        setFormData(prev => ({
                          ...prev,
                          skills: updatedSkills
                        }));
                      }}
                    >
                      ×
                    </button>
                  )}
                </div>
              ))}
            </div>

            {/* Add New Skill Form */}
            {isEditing && formData.skills.length < 10 && (
              <form onSubmit={handleAddSkill} className="flex gap-2">
                <input
                  type="text"
                  value={newSkill}
                  onChange={(e) => setNewSkill(e.target.value)}
                  placeholder="Enter a skill"
                  className="input input-bordered bg-slate-600 text-white flex-grow"
                />
                <button 
                  type="submit" 
                  className="btn btn-primary"
                  disabled={!newSkill.trim()}
                >
                  Add
                </button>
              </form>
            )}
          </div>

          {/* Action Buttons */}
          <div className="card-actions justify-end mt-6">
            {isEditing ? (
              <>
                <button 
                  className="btn btn-outline text-white"
                  onClick={() => {
                    setIsEditing(false);
                    setFormData({
                      firstName: user.firstName || '',
                      lastName: user.lastName || '',
                      gender: user.gender || '',
                      age: user.age || '',
                      skills: Array.isArray(user.skills) ? user.skills : []
                    });
                    setNewSkill('');
                  }}
                >
                  Cancel
                </button>
                <button 
                  className="btn btn-primary"
                  onClick={handleSubmit}
                >
                  Save Changes
                </button>
              </>
            ) : (
              <button 
                className="btn btn-primary"
                onClick={() => setIsEditing(true)}
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;