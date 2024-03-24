import React from 'react';


const DiscussionForum = () => {
  // Dummy data for discussion forum posts
  const discussionPosts = [
    {
      id: 1,
      username: 'Lorem Ipsum',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae lobortis magna, ac blandit tortor.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae lobortis magna, ac blandit tortor.',
      likes: 10,
      comments: 5,
      timestamp: '2 hours ago',
    },
    {
      id: 2,
      username: 'Lorem Ipsum',
      content: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Sed in tellus nec lacus porta eleifend ac nec lorem.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae lobortis magna, ac blandit tortor.',
      likes: 7,
      comments: 3,
      timestamp: '1 day ago',
    },
    {
      id: 3,
      username: 'Lorem Ipsum',
      content: 'Suspendisse potenti. Proin vel Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus vitae lobortis magna, ac blandit tortor.consequat justo. Morbi consectetur, velit vitae sagittis sollicitudin, enim magna ultrices felis, at cursus ipsum dui ut est.',
      likes: 15,
      comments: 8,
      timestamp: '3 days ago',
    },
  ];

  return (
    <div className="w-screen ml-5 mt-5 p-4">
      <h1 className="text-goindiaRed text-3xl text-uppercase font-sans font-bold mb-4">DISCUSSION FORUM</h1>
      {discussionPosts.map(post => (
        <div key={post.id} className="mb-4 bg-white rounded-lg shadow-md overflow-hidden w-10/11 md:w-1/2">
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center">
                <div className="w-8 h-8 rounded-full mr-2"><img src="https://cdn.vectorstock.com/i/500p/20/76/man-avatar-profile-vector-21372076.jpg" alt="Profile" className="w-full h-full rounded-full" /></div>
                <span className="text-gray-800 font-bold">{post.username}</span>
              </div>
              <span className="text-blue-500 text-sm">{post.timestamp}</span>
            </div>
            <p className="text-gray-800">{post.content}</p>
            <div className="flex items-center mt-4">
              <button className="text-gray-700 flex items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
</svg>

                {post.likes}
              </button>
              <button className="text-gray-700 flex items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>

                {post.comments}
              </button>
              <button className="text-gray-700 flex items-center mr-4">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
</svg>

                {post.likes}
              </button>
              <button className="text-gray-700 flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M7.217 10.907a2.25 2.25 0 1 0 0 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186 9.566-5.314m-9.566 7.5 9.566 5.314m0 0a2.25 2.25 0 1 0 3.935 2.186 2.25 2.25 0 0 0-3.935-2.186Zm0-12.814a2.25 2.25 0 1 0 3.933-2.185 2.25 2.25 0 0 0-3.933 2.185Z" />
</svg>
                Share
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DiscussionForum