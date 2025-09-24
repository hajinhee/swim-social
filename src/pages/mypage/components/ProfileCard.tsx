import { Link } from "react-router-dom";

interface ProfileCardProps {
  userProfile: {
    profileImage: string;
    name: string;
    email: string;
    joinDate: string;
  };
}
export const ProfileCard = ({ userProfile }: ProfileCardProps) => {
  return (
    <div className="relative overflow-hidden rounded-3xl bg-white p-6 shadow-xl ring-1 ring-gray-900/5 transition-transform duration-300 ease-in-out">
      <div className="absolute -right-16 -top-16 size-48 rounded-full bg-gradient-to-br from-blue-100 to-transparent opacity-20"></div>
      <div className="absolute -left-16 -bottom-16 size-48 rounded-full bg-gradient-to-tl from-purple-100 to-transparent opacity-20"></div>

      <div className="flex items-center space-x-5">
        <div className="flex-shrink-0">
          <img
            className="size-20 rounded-full object-cover shadow-md ring-2 ring-white"
            src={userProfile.profileImage}
            alt={userProfile.name}
          />
        </div>
        <div className="min-w-0 flex-1">
          <h2 className="text-xl font-bold tracking-tight text-gray-900">
            {userProfile.name}
          </h2>
          <p className="mt-1 truncate text-sm text-gray-500">
            {userProfile.email}
          </p>
          <p className="mt-1 text-xs text-gray-400">
            가입일: {userProfile.joinDate}
          </p>
        </div>
        <div className="flex-shrink-0">
          <Link
            to="/profile-edit"
            className="flex items-center space-x-2 text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            <i className="ri-edit-line text-lg"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
