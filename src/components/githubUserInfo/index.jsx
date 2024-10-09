import React from 'react';

const GitHubUserInfo = ({ user, isLargeViewport }) => {
  return (
    <div className={isLargeViewport ? "banner" : "card w-96 bg-base-100 shadow-xl"}>
      {isLargeViewport ? (
        <div className="flex items-center p-4 bg-gray-200 rounded-lg">
          <img src={user.avatar_url} alt={user.userName} className="rounded-full w-32 h-32 mr-4" />
          <div>
            <h2 className="text-2xl font-bold">{user.userName}</h2>
            <p className="text-gray-600">{user.name}</p>
            <p className="text-gray-500">{user.location}</p>
            <p className="text-gray-700 mt-2">{user.bio}</p>
            <span className="badge badge-primary">Public Github Repos: {user.public_repos}</span>
          </div>
        </div>
      ) : (
        <>
          <figure>
            <img src={user.avatar_url} alt={user.userName} className="rounded-full w-24 h-24 mx-auto mt-4" />
          </figure>
          <div className="card-body">
            <h2 className="card-title">{user.userName}</h2>
            <p className="text-gray-500">{user.name}</p>
            <p className="text-gray-400">{user.location}</p>
            <p className="text-gray-700 mt-2">{user.bio}</p>
            <div className="mt-4">
              <span className="badge badge-primary">Public Github Repos: {user.public_repos}</span>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default GitHubUserInfo;
