// components/AboutUs.jsx
import React from 'react';
import Navbar from './Navbar';

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold text-center mb-8">About Us</h1>
        <div className="bg-white rounded-lg shadow-md p-8 max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-lg mb-6">
            The Education Trust is dedicated to the upliftment of underprivileged students and individuals by providing help and assistance in education. Our mission is to ensure that quality education is accessible to all, regardless of their background or circumstances.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Commitment</h2>
          <p className="text-lg mb-6">
            We are committed to serving the public at large in India, without any distinction of caste, color, creed, religion, or gender. Our charitable work aims to create equal opportunities for education and personal growth for all.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Our Impact</h2>
          <p className="text-lg mb-6">
            Through our various programs and initiatives, we strive to make a lasting impact on the lives of underprivileged students. By providing educational resources, mentorship, and financial assistance, we empower individuals to overcome barriers and achieve their full potential.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Join Our Cause</h2>
          <p className="text-lg">
            We invite you to join us in our mission to transform lives through education. Whether through donations, volunteering, or spreading awareness, your support can help us create a brighter future for underprivileged students across India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
