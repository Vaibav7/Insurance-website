import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBuilding, FaHeartbeat, FaCar } from 'react-icons/fa';
import img1 from "../assets/products/a.png";
import img2 from "../assets/products/b.png";
import img3 from "../assets/products/c.png";
import img4 from "../assets/products/d.png";
import img5 from "../assets/products/e.png";
import img6 from "../assets/products/f.png";
import img7 from "../assets/products/g.png";
import img8 from "../assets/products/h.png";
import img9 from "../assets/products/i.png"; // New image
import img10 from "../assets/products/j.png"; // New image
import img11 from "../assets/products/k.png"; // New image
import img12 from "../assets/products/l.png"; // New image

const insuranceData = [
  {
    category: 'Business Insurance',
    icon: <FaBuilding size={30} className="text-blue-600" />,
    description: 'One stop business insurance solutions',
    plans: [
      { id: 1, name: 'Marine Cargo', link: '/products/marine-cargo', image: img1, price: 'Starts from ₹10,000/year',description: '"Comprehensive marine cargo insurance offers protection for goods during sea transportation, covering risks such as damage, loss, theft, and unforeseen accidents. Whether shipping domestically or internationally, this coverage ensures your cargo is safeguarded against financial loss."' },
      { id: 2, name: 'Group Health', link: '/products/group-health', image: img2, price: 'Starts from ₹5,000/year', description: '"Comprehensive marine cargo insurance offers protection for goods during sea transportation, covering risks such as damage, loss, theft, and unforeseen accidents. Whether shipping domestically or internationally, this coverage ensures your cargo is safeguarded against financial loss."'},
      { id: 3, name: 'Fire & Burglary', link: '/products/fire-burglary', image: img3, price: 'Starts from ₹8,000/year', description: '"Comprehensive marine cargo insurance offers protection for goods during sea transportation, covering risks such as damage, loss, theft, and unforeseen accidents. Whether shipping domestically or internationally, this coverage ensures your cargo is safeguarded against financial loss."'},
      { id: 4, name: 'Workmen Insurance', link: '/products/workmen-insurance', image: img4, price: 'Starts from ₹12,000/year',description: '"Comprehensive marine cargo insurance offers protection for goods during sea transportation, covering risks such as damage, loss, theft, and unforeseen accidents. Whether shipping domestically or internationally, this coverage ensures your cargo is safeguarded against financial loss."' },
    ],
  },
  {
    category: 'Health Insurance',
    icon: <FaHeartbeat size={30} className="text-green-600" />,
    description: '11,000+ Network Hospitals',
    plans: [
      { id: 5, name: 'Individual Health Insurance', link: '/products/health-insurance', image: img5, price: 'Starts from ₹6,000/year', description: '"Comprehensive marine cargo insurance offers protection for goods during sea transportation, covering risks such as damage, loss, theft, and unforeseen accidents. Whether shipping domestically or internationally, this coverage ensures your cargo is safeguarded against financial loss."'},
      { id: 6, name: 'TATA AIG Eldercare', link: '/products/tata-eldercare', image: img6, price: 'Starts from ₹15,000/year',description: '"Comprehensive marine cargo insurance offers protection for goods during sea transportation, covering risks such as damage, loss, theft, and unforeseen accidents. Whether shipping domestically or internationally, this coverage ensures your cargo is safeguarded against financial loss."' },
      { id: 9, name: 'Family Health Insurance', link: '/products/family-floater', image: img9, price: 'Starts from ₹7,500/year', description: '"Comprehensive marine cargo insurance offers protection for goods during sea transportation, covering risks such as damage, loss, theft, and unforeseen accidents. Whether shipping domestically or internationally, this coverage ensures your cargo is safeguarded against financial loss."'},
      { id: 10, name: 'Critical Illness Cover', link: '/products/critical-illness', image: img10, price: 'Starts from ₹20,000/year', description: '"Comprehensive marine cargo insurance offers protection for goods during sea transportation, covering risks such as damage, loss, theft, and unforeseen accidents. Whether shipping domestically or internationally, this coverage ensures your cargo is safeguarded against financial loss."'},
    ],
  },
  {
    category: 'Motor Insurance',
    icon: <FaCar size={30} className="text-red-600" />,
    description: 'Up to 75% off on Motor Insurance',
    plans: [
      { id: 7, name: 'Car Insurance', link: '/products/car', image: img7, price: 'Starts from ₹3,000/year',description: '"Comprehensive marine cargo insurance offers protection for goods during sea transportation, covering risks such as damage, loss, theft, and unforeseen accidents. Whether shipping domestically or internationally, this coverage ensures your cargo is safeguarded against financial loss."' },
      { id: 8, name: 'Bike Insurance', link: '/products/bike', image: img8, price: 'Starts from ₹2,000/year',description: '"Comprehensive marine cargo insurance offers protection for goods during sea transportation, covering risks such as damage, loss, theft, and unforeseen accidents. Whether shipping domestically or internationally, this coverage ensures your cargo is safeguarded against financial loss."' },
      { id: 11, name: 'Commercial Vehicle Insurance', link: '/products/commercial-vehicle', image: img11, price: 'Starts from ₹10,000/year',description: '"Comprehensive marine cargo insurance offers protection for goods during sea transportation, covering risks such as damage, loss, theft, and unforeseen accidents. Whether shipping domestically or internationally, this coverage ensures your cargo is safeguarded against financial loss."' },
      { id: 12, name: 'Auto Rickshaw Insurance', link: '/products/auto-rickshaw', image: img12, price: 'Starts from ₹5,000/year',description: '"Comprehensive marine cargo insurance offers protection for goods during sea transportation, covering risks such as damage, loss, theft, and unforeseen accidents. Whether shipping domestically or internationally, this coverage ensures your cargo is safeguarded against financial loss."' },
    ],
  },
];

const Product = () => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    dob: '',
    aadhaar: '',
    email: '',
  });

  const openModal = (plan) => {
    setSelectedPlan(plan);
  };

  const closeModal = () => {
    setSelectedPlan(null);
    setFormData({ name: '', dob: '', aadhaar: '', email: '' });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData); // Handle form submission logic
    closeModal();
  };

  return (
    <div className="container mx-auto p-8 bg-gradient-to-br from-[#f0f4f8] to-[#d1e8e4] rounded-lg shadow-xl">
      <h1 className="text-4xl font-bold text-center mb-8 mt-10 text-[#254E58] animate-fadeInDown">Our Products</h1>
      {insuranceData.map((category, index) => (
        <div key={index} className="mb-10 animate-fadeInUp">
          <div className="flex items-center mb-4">
            {category.icon}
            <h2 className="ml-3 text-3xl font-semibold text-[#254E58]">{category.category}</h2>
          </div>
          <p className="text-gray-700 mb-4">{category.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {category.plans.map((plan) => (
              <div
                key={plan.id}
                onClick={() => openModal(plan)}
                className="bg-white shadow-2xl rounded-lg p-4 flex flex-col items-center transform transition-transform duration-500 hover:scale-105 hover:shadow-3xl cursor-pointer"
              >
                <img src={plan.image} alt={plan.name} className="w-full h-32 object-cover rounded-t-lg mb-4" />
                <div className="text-xl mb-2 text-[#254E58] font-semibold">{plan.name}</div>
                <p className="text-sm text-gray-500 text-center">{plan.price}</p>
                <p className="text-xs text-gray-400 mt-2">Click to explore</p>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Modal */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full">
            <h2 className="text-2xl font-bold mb-4 text-[#254E58]">{selectedPlan.name}</h2>
            <p className="text-gray-700 mb-4">{selectedPlan.description || 'Detailed information about the plan.'}</p>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="date"
                name="dob"
                placeholder="DOB"
                value={formData.dob}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <input
                type="text"
                name="aadhaar"
                placeholder="Aadhaar Card Number"
                value={formData.aadhaar}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                maxLength={12}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full p-2 border rounded"
                required
              />
              <button type="submit" className="w-full bg-[#254E58] text-white py-2 rounded hover:bg-[#112D32]">
                Apply Now
              </button>
            </form>
            <button onClick={closeModal} className="mt-4 text-red-600 w-full text-center" aria-label="Close modal">
  Close
</button>

          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
