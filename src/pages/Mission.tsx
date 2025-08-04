import React, { useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import { Heart, Shield, Users, Smile, Star, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const fadeUp = {
  initial: { opacity: 0, y: 40 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const Mission: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-primary-50 to-primary-100 overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            className="max-w-4xl mx-auto text-center"
            initial="initial"
            animate="animate"
            variants={fadeUp}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold text-gray-800 mb-8"
              whileHover={{ scale: 1.03 }}
            >
              Our Mission & Values
            </motion.h1>
            <motion.div
              className="w-24 h-1 bg-secondary-500 mx-auto mb-8"
              initial={{ width: 0 }}
              animate={{ width: '6rem', transition: { duration: 1 } }}
            />
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              At Daisy's Journey, we're dedicated to enhancing patient care through compassionate volunteer service and meaningful human connections.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <motion.img
              src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg"
              alt="Hospital volunteer helping patient"
              className="w-full h-auto rounded-2xl shadow-2xl"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
            <div>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">Our Mission</h2>
              <div className="w-20 h-1 bg-secondary-500 mb-8"></div>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>Daisy's Journey is committed to improving the hospital experience for patients through compassionate volunteer services.</p>
                <p>We recruit, train, and support volunteers who provide comfort, companionship, and assistance to patients and families.</p>
                <p>Through our programs, we aim to reduce anxiety, loneliness, and contribute to a more positive healthcare environment.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">Our Vision</h2>
              <div className="w-20 h-1 bg-secondary-500 mb-8"></div>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>We envision a healthcare system where volunteer support is essential to patient care and healing.</p>
                <p>Daisy’s Journey strives to set new benchmarks in volunteer integration and program excellence.</p>
                <p>We aim to expand nationwide so every patient experiences our compassion and care.</p>
              </div>
            </div>
            <motion.img
              src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg"
              alt="Hospital volunteer team meeting"
              className="w-full h-auto rounded-2xl shadow-2xl order-1 md:order-2"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            />
          </motion.div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Our Core Values</h2>
            <div className="w-24 h-1 bg-secondary-500 mx-auto mb-8"></div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">These principles guide everything we do at Daisy's Journey</p>
          </div>
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            {[
              { icon: Heart, title: 'Compassion', desc: 'We approach every interaction with empathy, kindness, and care.' },
              { icon: Shield, title: 'Integrity', desc: 'We uphold honesty, accountability, and professionalism in all we do.' },
              { icon: Users, title: 'Inclusivity', desc: 'We welcome all backgrounds, promoting equality and dignity.' },
              { icon: Smile, title: 'Positivity', desc: 'We bring optimism to every moment, no matter the circumstance.' },
              { icon: Star, title: 'Excellence', desc: 'We aim for high standards in training, delivery, and management.' },
              { icon: Clock, title: 'Dedication', desc: 'We value consistency and reliability in our volunteer service.' }
            ].map(({ icon: Icon, title, desc }, i) => (
              <motion.div
                key={title}
                className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100"
                whileHover={{ scale: 1.03, y: -6 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20 }}
              >
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                  <Icon className="text-primary-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">{title}</h3>
                <p className="text-gray-600 leading-relaxed">{desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Mission;
