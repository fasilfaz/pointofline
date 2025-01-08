
const ClientsSection = () => {
  const clients = [
    { id: 1, width: 200, height: 100 },
    { id: 2, width: 200, height: 100 },
    { id: 3, width: 200, height: 100 },
    { id: 4, width: 200, height: 100 },
    { id: 5, width: 200, height: 100 },
    { id: 6, width: 200, height: 100 }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-[#0783B9] mb-12">Trusted by Industry Leaders</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
          {clients.map((client) => (
            <div key={client.id} className="flex items-center justify-center p-4">
              <img
                src={`/api/placeholder/${client.width}/${client.height}`}
                alt={`Client ${client.id}`}
                className="max-w-full h-auto grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClientsSection;
