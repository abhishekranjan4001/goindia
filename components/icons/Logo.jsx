import * as React from "react";

function Logo({ fill = "#3B81F6", ...rest }) {
  return (
    <div className="w-8 h-8 rounded-full mr-2"><img src="https://cdn.vectorstock.com/i/500p/20/76/man-avatar-profile-vector-21372076.jpg" alt="Profile" className="w-full h-full rounded-full" /></div>
  );
}

export default Logo;
