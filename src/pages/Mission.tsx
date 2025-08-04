import React, { useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import { Heart, Shield, Users, Smile, Star, Clock } from 'lucide-react';

const Mission: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-gradient-to-br from-primary-50 to-primary-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-8">
              Our Mission & Values
            </h1>
            <div className="w-24 h-1 bg-secondary-500 mx-auto mb-8"></div>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed">
              At Daisy's Journey, we're dedicated to enhancing patient care through 
              compassionate volunteer service and meaningful human connections.
            </p>
          </div>
        </div>
      </section>

      {/* Mission Statement Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div>
                <img
                  src="https://images.pexels.com/photos/6129507/pexels-photo-6129507.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                  alt="Hospital volunteer helping patient"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
              
              <div>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                  Our Mission
                </h2>
                <div className="w-20 h-1 bg-secondary-500 mb-8"></div>
                
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Daisy's Journey is committed to improving the hospital experience for patients 
                    through compassionate volunteer services. We believe that empathetic human 
                    connection is an essential component of the healing process.
                  </p>
                  
                  <p>
                    Our mission is to recruit, train, and support dedicated volunteers who provide 
                    comfort, companionship, and assistance to patients and their families during 
                    their hospital stay.
                  </p>
                  
                  <p>
                    Through our presence and programs, we aim to alleviate anxiety, reduce feelings 
                    of isolation, and contribute to a more positive healthcare environment for all.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="order-2 md:order-1">
                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8">
                  Our Vision
                </h2>
                <div className="w-20 h-1 bg-secondary-500 mb-8"></div>
                
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    We envision a healthcare system where compassionate volunteer support is 
                    recognized as an integral part of patient care, leading to improved patient 
                    outcomes and experiences.
                  </p>
                  
                  <p>
                    Daisy's Journey strives to be the gold standard for hospital volunteer programs, 
                    setting benchmarks for volunteer training, support, and integration into the 
                    healthcare team.
                  </p>
                  
                  <p>
                    Our ultimate vision is to expand our model to hospitals nationwide, ensuring 
                    that every patient has access to the comfort and support that our volunteers 
                    provide.
                  </p>
                </div>
              </div>
              
              <div className="order-1 md:order-2">
                <img
                  src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                  alt="Hospital volunteer team meeting"
                  className="w-full h-auto rounded-2xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Our Core Values
              </h2>
              <div className="w-24 h-1 bg-secondary-500 mx-auto mb-8"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do at Daisy's Journey
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                  <Heart className="text-primary-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Compassion</h3>
                <p className="text-gray-600 leading-relaxed">
                  We approach every interaction with empathy, kindness, and a genuine desire to improve the 
                  wellbeing of patients and their families.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mb-6">
                  <Shield className="text-secondary-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Integrity</h3>
                <p className="text-gray-600 leading-relaxed">
                  We maintain the highest standards of honesty, accountability, and professional conduct in 
                  all our volunteer activities and organizational operations.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                  <Users className="text-primary-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Inclusivity</h3>
                <p className="text-gray-600 leading-relaxed">
                  We welcome volunteers and serve patients from all backgrounds, creating an environment 
                  of respect, dignity, and equality for all.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mb-6">
                  <Smile className="text-secondary-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Positivity</h3>
                <p className="text-gray-600 leading-relaxed">
                  We bring optimism and hope to every patient interaction, creating moments of joy and 
                  comfort even in challenging circumstances.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mb-6">
                  <Star className="text-primary-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Excellence</h3>
                <p className="text-gray-600 leading-relaxed">
                  We strive for the highest standards in volunteer training, program delivery, and organizational 
                  management to provide exceptional service.
                </p>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
                <div className="w-16 h-16 bg-secondary-100 rounded-2xl flex items-center justify-center mb-6">
                  <Clock className="text-secondary-600" size={28} />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4">Dedication</h3>
                <p className="text-gray-600 leading-relaxed">
                  We recognize the value of consistent, reliable volunteer service and are committed to 
                  maintaining a dependable presence for those who need us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-24 bg-primary-600 text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                Our Impact
              </h2>
              <div className="w-24 h-1 bg-secondary-500 mx-auto mb-8"></div>
              <p className="text-xl text-primary-100 max-w-3xl mx-auto">
                How Daisy's Journey makes a difference in healthcare
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">For Patients</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-secondary-500 rounded-full p-1 mr-3 mt-1.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>Reduced feelings of isolation during hospital stays</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary-500 rounded-full p-1 mr-3 mt-1.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>Decreased anxiety through companionship and conversation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary-500 rounded-full p-1 mr-3 mt-1.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>Practical assistance with non-medical needs</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary-500 rounded-full p-1 mr-3 mt-1.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>Moments of joy and normalcy in clinical settings</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">For Hospitals</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-secondary-500 rounded-full p-1 mr-3 mt-1.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>Enhanced patient satisfaction and experience scores</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary-500 rounded-full p-1 mr-3 mt-1.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>Support for healthcare staff, allowing them to focus on clinical duties</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary-500 rounded-full p-1 mr-3 mt-1.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>Improved communication between patients and healthcare providers</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary-500 rounded-full p-1 mr-3 mt-1.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>Contribution to a positive hospital culture and environment</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl">
                <h3 className="text-2xl font-bold mb-6">For Volunteers</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-secondary-500 rounded-full p-1 mr-3 mt-1.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>Meaningful service opportunities that make a tangible difference</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary-500 rounded-full p-1 mr-3 mt-1.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>Personal growth and the development of empathy and communication skills</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary-500 rounded-full p-1 mr-3 mt-1.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>Connection to a community of like-minded, compassionate individuals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary-500 rounded-full p-1 mr-3 mt-1.5">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span>Valuable experience for those interested in healthcare careers</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Mission;