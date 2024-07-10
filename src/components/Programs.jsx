// components/Programs.jsx
import React from 'react';
import Card from './Card';

const Programs = () => {
  const programs = [
    {
      title: 'Scholarship Program',
      description: 'Financial assistance for deserving students to pursue higher education.',
      icon: '🎓',
    },
    {
      title: 'Mentorship Initiative',
      description: 'Connecting students with experienced professionals for guidance and support.',
      icon: '🤝',
    },
    {
      title: 'Educational Resources',
      description: 'Providing books, technology, and learning materials to underprivileged students.',
      icon: '📚',
    },
    {
      title: 'Skill Development Workshops',
      description: 'Hands-on training in various skills to enhance employability.',
      icon: '💼',
    },
    {
      title: 'Digital Literacy Program',
      description: 'Empowering students with essential computer and internet skills.',
      icon: '💻',
    },
    {
      title: 'Girls' Education Initiative',
      description: 'Focused support to promote education among girls in underserved communities.',
      icon: '👧',
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Hero Section */}
      <div className="bg-blue-600 text-white py-20">
        <div className="container mx-auto text-center">
          <h1 className="text-4xl font-bold mb-4">Our Programs</h1>
          <p className="mb-8 text-xl">Empowering minds, transforming lives</p>
        </div>
      </div>

      {/* Programs Overview */}
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <Card key={index}>
              <div className="text-4xl mb-4">{program.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{program.title}</h3>
              <p className="text-gray-600">{program.description}</p>
            </Card>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-gray-200 py-16">
        <div className="container mx-auto text-center px-4">
          <h2 className="text-3xl font-bold mb-4">Make a Difference</h2>
          <p className="mb-8 text-xl">Your support can help us expand our programs and reach more students in need.</p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-semibold text-lg hover:bg-blue-700 transition duration-300">
            Support Our Programs
          </button>
        </div>
      </div>

      {/* Impact Statistics */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Impact</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
            <p className="text-xl">Students Supported</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">100+</div>
            <p className="text-xl">Partner Schools</p>
          </div>
          <div>
            <div className="text-4xl font-bold text-blue-600 mb-2">20+</div>
            <p className="text-xl">Cities Reached</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
