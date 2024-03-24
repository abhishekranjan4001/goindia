import React from "react";
import Sidebar from "./Sidebar";
import DiscussionForum from "./discussion_forum";
import MarketStories from "./market_stories";

const Layout = ({ children }) => {
  return (
    <div className="h-screen flex flex-row justify-start">
      <Sidebar />
      <div className="flex-1 p-4 text-white">
          <div className="grid grid-cols-2">
      <DiscussionForum />
      <MarketStories />
      </div>
      </div>
    </div>
  );
};

export default Layout;
