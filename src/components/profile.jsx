const profile = () => {
  return (
    <div className="card bg-base-100 w-96 shadow-xl rounded-2xl overflow-hidden">
      {/* Profile Image with Edit Option */}
      <figure className="relative h-80 group">
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Profile"
          className="w-full h-full object-cover"
        />
        {/* Edit Image Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all flex items-center justify-center">
          <button className="btn btn-sm btn-circle btn-ghost text-white opacity-0 group-hover:opacity-100">
            ✏️
          </button>
        </div>
      </figure>

      {/* Editable Profile Info */}
      <div className="card-body p-6">
        {/* Name and Age */}
        <div className="flex items-center gap-2">
          <input
            type="text"
            defaultValue="Alex"
            className="input input-ghost text-2xl font-bold w-24 p-0 focus:outline-none"
          />
          <input
            type="number"
            defaultValue="28"
            className="input input-ghost text-2xl font-bold w-12 p-0 focus:outline-none"
          />
          <button className="btn btn-ghost btn-xs text-gray-500 hover:text-gray-700">
            ✏️
          </button>
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 mt-2">
          <span className="text-sm text-gray-500">📍</span>
          <input
            type="text"
            defaultValue="San Francisco, CA"
            className="input input-ghost text-sm text-gray-600 w-full p-0 focus:outline-none"
          />
        </div>

        {/* Bio */}
        <textarea
          defaultValue="Dog lover 🐶 | Coffee enthusiast ☕ | Looking for someone to explore the city with!"
          className="textarea textarea-ghost mt-4 text-gray-700 w-full h-20 resize-none focus:outline-none"
          placeholder="Tell us about yourself..."
        />

        {/* Interests */}
        <div className="mt-4">
          <h3 className="text-sm font-semibold text-gray-700 mb-2">
            Interests
          </h3>
          <div className="flex flex-wrap gap-2">
            <div className="badge badge-primary badge-sm flex items-center gap-1">
              Hiking
              <button className="btn btn-ghost btn-xs p-0 text-xs">×</button>
            </div>
            <div className="badge badge-primary badge-sm flex items-center gap-1">
              Photography
              <button className="btn btn-ghost btn-xs p-0 text-xs">×</button>
            </div>
            <div className="badge badge-primary badge-sm flex items-center gap-1">
              Travel
              <button className="btn btn-ghost btn-xs p-0 text-xs">×</button>
            </div>
            <input
              type="text"
              placeholder="Add interest"
              className="input input-ghost input-sm w-24 p-0 focus:outline-none"
            />
          </div>
        </div>

        {/* Action Buttons */}
        <div className="card-actions justify-end gap-2 mt-6">
          <button className="btn btn-outline btn-sm">Cancel</button>
          <button className="btn btn-primary btn-sm">Save Changes</button>
        </div>
      </div>
    </div>
  );
};

export default profile;