import React from 'react';
import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const testimonials = [
  {
    name: "John Doe",
    profileImage: "https://randomuser.me/api/portraits/men/1.jpg",
    review: "The insurance plans provided were exactly what I was looking for. The customer service was excellent and very helpful.",
    rating: 5
  },
  {
    name: "Jane Smith",
    profileImage: "https://randomuser.me/api/portraits/women/2.jpg",
    review: "I am very happy with my coverage and the affordable premiums. The team was very professional and made the process so simple.",
    rating: 4
  },
  {
    name: "Michael Brown",
    profileImage: "https://randomuser.me/api/portraits/men/3.jpg",
    review: "Great experience! They helped me choose the best policy for my needs and made everything so easy to understand.",
    rating: 5
  },
  {
    name: "Emma Wilson",
    profileImage: "https://randomuser.me/api/portraits/women/4.jpg",
    review: "Fantastic service! I feel confident knowing I have the right coverage. I will definitely recommend this company to others.",
    rating: 4
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-r from-[#88BDBC] to-[#254E58]" id="testimonials">
      <div className="max-w-7xl mx-auto px-6 sm:px-12 text-center">
        <h1 className="text-5xl font-semibold text-white mb-20">What Our Clients Say</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-transform duration-300 ease-in-out transform"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 * index }}
              whileHover={{ scale: 1.1 }} // This will scale the component on hover
            >
              <div className="flex items-center justify-center mb-4">
                <img
                  src={testimonial.profileImage}
                  alt={testimonial.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold text-[#254E58]">{testimonial.name}</h3>
                  <div className="flex text-yellow-400">
                    {Array.from({ length: 5 }, (_, i) => (
                      <FaStar key={i} className={i < testimonial.rating ? 'text-yellow-400' : 'text-gray-300'} />
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600">{testimonial.review}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
