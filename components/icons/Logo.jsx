import * as React from "react";
import Image from "next/image";

function Logo({ fill = "#3B81F6", ...rest }) {
  return (
    <div className="w-8 h-8 rounded-full mr-2">
      <Image 
        src="https://cdn.vectorstock.com/i/500p/20/76/man-avatar-profile-vector-21372076.jpg" 
        alt="Profile" 
        width={32} // Adjust width according to your design
        height={32} // Adjust height according to your design
        // Remove className prop
      />
    </div>
  );
}

export default Logo;
