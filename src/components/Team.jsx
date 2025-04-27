// Team.jsx
import React from 'react';
import { ShieldCheck, CreditCard, DollarSign, Headphones, Star } from 'lucide-react';

const features = [
  {
    icon: <CreditCard className="w-8 h-8 text-white" />, 
    title: 'Payment Options',
    desc: 'Convenient and hassle-free, our easy payment options streamline your purchasing experience.',
  },
  {
    icon: <ShieldCheck className="w-8 h-8 text-white" />,
    title: 'Strong Security',
    desc: 'With cutting-edge encryption technologies and robust protocols, we safeguard your data against cyber threats.',
  },
  {
    icon: <DollarSign className="w-8 h-8 text-white" />,
    title: 'Competitive Commissions',
    desc: 'Our platform offers enticing commission rates, designed to reward your hard work and dedication.',
  },
  {
    icon: <Headphones className="w-8 h-8 text-white" />,
    title: '24/7 Support',
    desc: 'Our dedicated team is here around the clock to provide you with immediate assistance and solutions.',
  },
];

const Team = () => {
  return (
    <section className="py-20 px-6 md:px-12 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div className="md:col-span-2">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Why <span className="text-purple-500">Choose</span> Finance<br />
            SaaS FinEase?
          </h2>
          <p className="text-gray-600 mb-8 max-w-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="bg-gray-50 p-6 rounded-2xl shadow-sm">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-500 mb-4">
                  {feature.icon}
                </div>
                <h3 className="font-semibold text-lg text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-sm text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-[#1c1b43] rounded-3xl text-white p-8 flex flex-col justify-between">
          <div>
            <p className="text-sm text-purple-400 uppercase font-semibold mb-2">Our Visa Card</p>
            <h3 className="text-2xl font-bold mb-4">The Only Card You Need to Start</h3>
            <p className="text-sm text-gray-300 mb-6">
              With unparalleled convenience and versatility, this card empowers you to navigate the modern world.
            </p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-2 rounded-full font-semibold">
              Get Started
            </button>
          </div>
          <img src="/card-placeholder.png" alt="Credit Card" className="mt-6 rounded-xl" />
        </div>
      </div>
    </section>
  );
};

export default Team;
