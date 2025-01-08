import React from 'react';

const ImageGallery = () => {
  const images = [
    {
      id: 1,
      title: 'Data Center Solutions',
      description: 'State-of-the-art data center facilities',
      width: 600,
      height: 400,
    },
    {
      id: 2,
      title: 'Network Infrastructure',
      description: 'Enterprise-grade networking solutions',
      width: 600,
      height: 400,
    },
    {
      id: 3,
      title: 'Smart Meeting Rooms',
      description: 'Modern collaboration spaces',
      width: 600,
      height: 400,
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#0783B9] mb-12">Our Solutions in Action</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {images.map((image) => (
            <div key={image.id} className="relative overflow-hidden rounded-xl shadow-lg group">
              <img
                src={`/api/placeholder/${image.width}/${image.height}`}
                alt={image.title}
                className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{image.title}</h3>
                  <p className="text-white/80">{image.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImageGallery;