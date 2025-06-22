import React from 'react'
import ProfileInfoCard from "../Cards/ProfileInfoCard";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="h-16 bg-black border boredr-b border-gray-200/50 backdrop-blur-[2px] py-2.5 px-4 md:px-0 sticky top-0 z-30">
      <div className="container mx-auto flex items-center justify-between gap-5">
        <Link to="/dashboard">
          <h2 className="text-lg md:text-3xl font-medium text-orange-400 leading-5">
          QGEN AI
          </h2>
        </Link>

        <ProfileInfoCard />
      </div>
    </div>
  )
}

export default Navbar