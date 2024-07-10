import React from 'react';
import Navbar from './Navbar.jsx';
import Card from './Card.jsx';

const App = () => {
  const programsData = [
    { title: 'Scholarship Program', description: 'Financial assistance for deserving students.' },
    { title: 'Mentorship Initiative', description: 'Guidance from experienced professionals.' },
    { title: 'Educational Resources', description: 'Providing books, technology, and learning materials.' },
  ];

  const impactAreas = [
    { icon: '📚', title: 'Education', description: 'Empowering through knowledge' },
    { icon: '🤝', title: 'Inclusivity', description: 'Supporting all, regardless of background' },
    { icon: '🌟', title: 'Opportunity', description: 'Creating pathways to success' },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Empowering Through Education</h1>
          <p className="mb-8 text-xl">Uplifting underprivileged students across India</p>
          <button className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-100 transition duration-300">
            Support Our Cause
          </button>
        </div>
      </div>
      
      {/* Mission Statement */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Mission</h2>
        <p className="text-lg text-center max-w-3xl mx-auto">
          We are dedicated to the upliftment of underprivileged students and individuals by providing help and assistance in education. 
          Our charitable work ensures benefits for the public at large in India, without any distinction of caste, color, creed, religion, or gender.
        </p>
      </div>

      {/* Programs Section */}
      <div className="container mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Our Programs</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {programsData.map((program, index) => (
            <Card key={index} title={program.title} description={program.description} />
          ))}
        </div>
      </div>

      {/* Impact Areas Section */}
      <div className="bg-gray-200 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {impactAreas.map((area, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{area.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{area.title}</h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Success Stories</h2>
          <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
            <p className="text-lg mb-4">"Thanks to the trust's support, I was able to complete my education and secure a job. Their assistance changed my life."</p>
            <div className="font-semibold">Priya Sharma, Software Engineer</div>
          </div>
        </div>
      </div>

      {/* Call-to-Action Section */}
      <div className="bg-blue-600 text-white py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Join Us in Making a Difference</h2>
          <p className="mb-8">Your support can help transform lives through education.</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-100 transition duration-300">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;
