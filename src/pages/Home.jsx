import React from "react";
import Container from "../components/Container/Container";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <Container>
      <div className="w-full min-h-screen bg-gray-50">
        <section className="flex flex-col md:flex-row items-center justify-between max-w-7xl mx-auto p-6 mt-10">
          <div className="md:w-1/2 space-y-6">
            <h2 className="text-4xl font-bold text-gray-800">
              Welcome to Our Hospital Management System
            </h2>
            <p className="text-gray-600">
              Easily manage patients, appointments, staff, and reports all in
              one place. Streamline your hospital operations efficiently.
            </p>
            <div className="flex space-x-4 ">
              <Link
                className="px-5 py-2 bg-green-500 rounded-xl"
                to={"/register"}
              >
                Get Started
              </Link>
              <Link
                to={"/login"}
                className="px-5 py-2 bg-gray-200 rounded-xl text-gray-800 hover:bg-gray-300"
              >
                Login
              </Link>
            </div>
          </div>

          <div className="md:w-1/2 mt-6 md:mt-0">
            <img
              src="https://plus.unsplash.com/premium_photo-1681842934644-0d05b05e3348?q=80&w=861&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Hospital"
              loading="lazy"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </section>

        {/* Features Section */}
        <section className="max-w-7xl mx-auto p-6 mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">Patient Management</h3>
            <p className="text-gray-600">
              Add, update, and track patient information efficiently.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">Appointment Scheduling</h3>
            <p className="text-gray-600">
              Schedule appointments and manage doctor availability seamlessly.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h3 className="font-bold text-lg mb-2">Reports & Analytics</h3>
            <p className="text-gray-600">
              Generate reports and analyze hospital operations in real-time.
            </p>
          </div>
        </section>
      </div>
    </Container>
  );
};

export default Home;
