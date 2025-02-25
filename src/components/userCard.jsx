export default function UserCard({user}) {
    const { firstName, lastName, age, gender, interests } = user;
  return (
    <div className="card bg-base-100 w-96 shadow-xl rounded-2xl overflow-hidden">
  {/* Profile Image */}
  <figure className="relative h-96">
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Profile"
      className="w-full h-full object-cover"
    />
    {/* Gradient overlay for text readability */}
    <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-gray-900 to-transparent" />
  </figure>

  {/* Profile Info */}
  <div className="card-body p-6 relative -mt-24">
    {/* Name and Age */}
    <div className="flex items-center justify-between">
      <h2 className="card-title text-3xl font-bold text-white">
        {firstName} {lastName}, {age}
      </h2>
      <span className="badge badge-outline text-white border-white">5 miles away</span>
    </div>

    {/* Bio */}
    <p className="text-white mt-2">
      Dog lover 🐶 | Coffee enthusiast ☕ | Looking for someone to explore the city with!
    </p>

    {/* Interests */}
    <div className="mt-4">
      <h3 className="text-sm font-semibold text-gray-300 mb-2">Interests</h3>
      <div className="flex flex-wrap gap-2">
        <span className="badge badge-primary badge-sm">Hiking</span>
        <span className="badge badge-primary badge-sm">Photography</span>
        <span className="badge badge-primary badge-sm">Travel</span>
        <span className="badge badge-primary badge-sm">Music</span>
      </div>
    </div>

    {/* Action Buttons */}
    <div className="card-actions justify-center gap-4 mt-6">
      <button className="btn btn-circle btn-outline btn-error text-xl">✗</button>
      <button className="btn btn-circle btn-primary text-xl">♥</button>
    </div>
  </div>
</div>
  );
}
