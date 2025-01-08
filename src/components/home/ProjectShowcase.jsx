import React from 'react';

const ProjectShowcase = () => {
  const projects = [
    {
      id: 1,
      title: 'Enterprise Data Center',
      location: 'Dubai, UAE',
      description: 'Complete data center solution for a major financial institution',
      width: 800,
      height: 500,
    },
    {
      id: 2,
      title: 'Smart Office Implementation',
      location: 'Abu Dhabi, UAE',
      description: 'Full-scale smart office transformation project',
      width: 800,
      height: 500,
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">Featured Projects</h2>
        {projects.map((project, index) => (
          <div 
            key={project.id} 
            className={`flex flex-col ${
              index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
            } gap-8 mb-16 items-center`}
          >
            <div className="lg:w-1/2">
              <img
                src={`/api/placeholder/${project.width}/${project.height}`}
                alt={project.title}
                className="rounded-xl shadow-lg w-full h-auto"
              />
            </div>
            <div className="lg:w-1/2">
              <h3 className="text-2xl font-bold text-blue-900 mb-4">{project.title}</h3>
              <p className="text-lg text-gray-600 mb-4">Location: {project.location}</p>
              <p className="text-gray-600 mb-6">{project.description}</p>
              <button className="bg-blue-900 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition-colors">
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectShowcase;