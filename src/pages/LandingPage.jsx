import React, { useState, useContext } from "react";
import HERO_IMG from "../assets/hero-img.png";
import { APP_FEATURES } from "../utils/data";
import { useNavigate } from "react-router-dom";
import { LuSparkles } from "react-icons/lu";
import Modal from "../components/Modal";
import Login from "./Auth/Login";
import SignUp from "./Auth/SignUp";
import { UserContext } from "../context/userContext";
import ProfileInfoCard from "../components/Cards/ProfileInfoCard";

const LandingPage = () => {
  const { user } = useContext(UserContext);
  const navigate = useNavigate();

  const [openAuthModal, setOpenAuthModal] = useState(false);
  const [currentPage, setCurrentPage] = useState("login");

  const handleCTA = () => {
    if (!user) {
      setOpenAuthModal(true);
    } else {
      navigate("/dashboard");
    }
  };

  return (
    <div className="min-h-screen bg-[#000000]">
      {/* Background elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-0 w-[300px] h-[300px] bg-amber-200/20 blur-[100px] rounded-full" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-amber-100/20 blur-[100px] rounded-full" />
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <header className="flex justify-between items-center py-8">
          <div className="text-5xl font-bold text-orange-400">QGEN AI</div>
          {user ? (
            <ProfileInfoCard />
          ) : (
            <button
              onClick={() => setOpenAuthModal(true)}
              className="bg-gradient-to-r from-[#FF9324] to-[#e99a4b] text-white px-6 py-2 rounded-full font-medium hover:shadow-md transition-all"
            >
              Login / Sign Up
            </button>
          )}
        </header>

        {/* Hero section */}
        <section className="py-20">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <div className="inline-flex items-center bg-amber-100 text-amber-700 px-4 py-2 rounded-full mb-6">
                <LuSparkles className="mr-2" />
                <span className="text-sm font-medium">AI Powered</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                Ace Interviews with{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF9324] to-[#FCD760]">
                  AI-Powered
                </span>{" "}
                Learning
              </h1>
              <p className="text-lg text-gray-100 mb-8">
                Get role-specific questions, expand answers when you need them,
                dive deeper into concepts, and organize everything your way.
              </p>
              <button
                onClick={handleCTA}
                className="bg-gradient-to-r from-[#FF9324] to-[#e99a4b] text-white px-8 py-3 rounded-full font-semibold hover:shadow-md transition-all"
              >
                Get Started
              </button>
            </div>
            <div className="lg:w-1/2">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-amber-50">
                <h3 className="text-xl font-semibold mb-4">Your Interview Toolkit</h3>
                <p className="text-gray-600 mb-6">
                  From preparation to mastery — your ultimate interview toolkit is here.
                </p>
                <ul className="space-y-3">
                  {APP_FEATURES.slice(0, 3).map((feature) => (
                    <li key={feature.id} className="flex items-center">
                      <div className="w-6 h-6 bg-amber-100 rounded-full flex items-center justify-center mr-3">
                        <svg
                          width="12"
                          height="12"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-amber-600"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <span>{feature.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="py-16">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-orange-400 mb-4">
              Points to remember to outshine the competition
            </h2>
            <p className="text-gray-100 max-w-2xl mx-auto">
              Key features that will help you prepare effectively
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {APP_FEATURES.slice(0, 3).map((feature) => (
              <div
                key={feature.id}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-amber-50"
              >
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {APP_FEATURES.slice(3).map((feature) => (
              <div
                key={feature.id}
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all border border-amber-50"
              >
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 text-center text-l text-orange-400">
          Made by Yash Sharma 22BKT0074
        </footer>
      </div>

      {/* Auth Modal */}
      <Modal
        isOpen={openAuthModal}
        onClose={() => {
          setOpenAuthModal(false);
          setCurrentPage("login");
        }}
        hideHeader
      >
        <div>
          {currentPage === "login" && <Login setCurrentPage={setCurrentPage} />}
          {currentPage === "signup" && (
            <SignUp setCurrentPage={setCurrentPage} />
          )}
        </div>
      </Modal>
    </div>
  );
};

export default LandingPage;
