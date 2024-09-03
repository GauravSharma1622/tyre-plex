import React from 'react';

const services = [
  { id: 1, name: 'Tyre Sales', description: 'Wide range of tyres available for all vehicles.' },
  { id: 2, name: 'Tyre Repair', description: 'Expert tyre repair services.' },
  { id: 3, name: 'Wheel Alignment', description: 'Precision wheel alignment services.' },
];

const Services = () => {
  return (
    <section id="services" className="p-8 bg-white">
      <h2 className="text-2xl font-bold mb-4">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map(service => (
          <div key={service.id} className="p-4 border rounded-lg shadow">
            <h3 className="text-xl font-semibold">{service.name}</h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
