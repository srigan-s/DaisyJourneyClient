import React, { useEffect } from 'react';
import SectionHeading from '../components/SectionHeading';
import { Heart, Shield, Users, Smile, Star, Clock } from 'lucide-react';
import FloatingMedicalElements from '../components/FloatingMedicalElements';

const Mission: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <FloatingMedicalElements />
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-primary-50 via-primary-100 to-secondary-50 animate-gradient">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 animate-float">
              Our Mission & Values
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-secondary-400 to-secondary-600 mx-auto mb-6 animate-pulse-slow"></div>
            <p className="text-xl md:text-2xl text-gray-600 leading-relaxed animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              At Daisy's Journey, we're dedicated to enhancing patient care through 
              compassionate volunteer service and meaningful human connections.
            </p>
          </div>
        </div>
      </section>

      {/* Combined Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
              <div className="animate-slide-in-left">
                <img
                  src="images/mission1.jpg"
                  alt="Hospital volunteer helping patient"
                  className="w-full h-auto rounded-2xl shadow-2xl hover-lift"
                />
              </div>
              
              <div className="animate-slide-in-right">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Our Mission
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-secondary-400 to-secondary-600 mb-6 animate-pulse-slow"></div>
                
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Daisy's Journey is committed to improving the hospital experience for patients 
                    through compassionate volunteer services. We believe that empathetic human 
                    connection is an essential component of the healing process.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 animate-slide-in-left">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  Our Vision
                </h2>
                <div className="w-16 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mb-6 animate-pulse-slow"></div>
                
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    We envision a healthcare system where compassionate volunteer support is 
                    recognized as an integral part of patient care, leading to improved patient 
                    outcomes and experiences.
                  </p>
                </div>
              </div>
              
              <div className="order-1 md:order-2 animate-slide-in-right">
                <img
                  src="https://images.pexels.com/photos/3938022/pexels-photo-3938022.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750"
                  alt="Hospital volunteer team meeting"
                  className="w-full h-auto rounded-2xl shadow-2xl hover-lift"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
                Our Core Values
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-secondary-400 to-secondary-600 mx-auto mb-6 animate-pulse-slow"></div>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do at Daisy's Journey
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover-lift animate-scale-in" style={{animationDelay: '0.1s'}}>
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mb-4 animate-bounce-slow">
                  <Heart className="text-primary-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Compassion</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  We approach every interaction with empathy, kindness, and a genuine desire to improve the 
                  wellbeing of patients and their families.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover-lift animate-scale-in" style={{animationDelay: '0.2s'}}>
                <div className="w-14 h-14 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center mb-4 animate-bounce-slow" style={{animationDelay: '0.5s'}}>
                  <Shield className="text-secondary-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Integrity</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  We maintain the highest standards of honesty, accountability, and professional conduct in 
                  all our volunteer activities and organizational operations.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover-lift animate-scale-in" style={{animationDelay: '0.3s'}}>
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mb-4 animate-bounce-slow" style={{animationDelay: '1s'}}>
                  <Users className="text-primary-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Inclusivity</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  We welcome volunteers and serve patients from all backgrounds, creating an environment 
                  of respect, dignity, and equality for all.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover-lift animate-scale-in" style={{animationDelay: '0.4s'}}>
                <div className="w-14 h-14 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center mb-4 animate-bounce-slow" style={{animationDelay: '1.5s'}}>
                  <Smile className="text-secondary-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Positivity</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  We bring optimism and hope to every patient interaction, creating moments of joy and 
                  comfort even in challenging circumstances.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover-lift animate-scale-in" style={{animationDelay: '0.5s'}}>
                <div className="w-14 h-14 bg-gradient-to-br from-primary-100 to-primary-200 rounded-2xl flex items-center justify-center mb-4 animate-bounce-slow" style={{animationDelay: '2s'}}>
                  <Star className="text-primary-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Excellence</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  We strive for the highest standards in volunteer training, program delivery, and organizational 
                  management to provide exceptional service.
                </p>
              </div>
              
              <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover-lift animate-scale-in" style={{animationDelay: '0.6s'}}>
                <div className="w-14 h-14 bg-gradient-to-br from-secondary-100 to-secondary-200 rounded-2xl flex items-center justify-center mb-4 animate-bounce-slow" style={{animationDelay: '2.5s'}}>
                  <Clock className="text-secondary-600" size={28} />
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">Dedication</h3>
                <p className="text-gray-600 leading-relaxed text-sm">
                  We recognize the value of consistent, reliable volunteer service and are committed to 
                  maintaining a dependable presence for those who need us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white animate-gradient">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12 animate-fade-in-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our Impact
              </h2>
              <div className="w-20 h-1 bg-gradient-to-r from-secondary-400 to-secondary-600 mx-auto mb-6 animate-pulse-slow"></div>
              <p className="text-lg text-primary-100 max-w-3xl mx-auto">
                How Daisy's Journey makes a difference in healthcare
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover-lift animate-scale-in" style={{animationDelay: '0.1s'}}>
                <h3 className="text-xl font-bold mb-4">For Patients</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-secondary-500 rounded-full p-1 mr-3 mt-1.5 animate-pulse-slow">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className="text-sm">Reduced feelings of isolation during hospital stays</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary-500 rounded-full p-1 mr-3 mt-1.5 animate-pulse-slow">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className="text-sm">Decreased anxiety through companionship</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary-500 rounded-full p-1 mr-3 mt-1.5 animate-pulse-slow">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className="text-sm">Practical assistance with non-medical needs</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover-lift animate-scale-in" style={{animationDelay: '0.2s'}}>
                <h3 className="text-xl font-bold mb-4">For Hospitals</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-secondary-500 rounded-full p-1 mr-3 mt-1.5 animate-pulse-slow">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className="text-sm">Enhanced patient satisfaction scores</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary-500 rounded-full p-1 mr-3 mt-1.5 animate-pulse-slow">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className="text-sm">Support for healthcare staff</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary-500 rounded-full p-1 mr-3 mt-1.5 animate-pulse-slow">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className="text-sm">Improved patient-provider communication</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-2xl hover-lift animate-scale-in" style={{animationDelay: '0.3s'}}>
                <h3 className="text-xl font-bold mb-4">For Volunteers</h3>
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="bg-secondary-500 rounded-full p-1 mr-3 mt-1.5 animate-pulse-slow">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className="text-sm">Meaningful service opportunities</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary-500 rounded-full p-1 mr-3 mt-1.5 animate-pulse-slow">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className="text-sm">Personal growth and skill development</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-secondary-500 rounded-full p-1 mr-3 mt-1.5 animate-pulse-slow">
                      <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                      </svg>
                    </span>
                    <span className="text-sm">Community connection and networking</span>
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