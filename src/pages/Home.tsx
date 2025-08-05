import React, { useEffect } from 'react';
import { ChevronRight, Users, Heart, Calendar, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import TestimonialCard from '../components/TestimonialCard';
import FloatingMedicalElements from '../components/FloatingMedicalElements';

const Home: React.FC = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
      <FloatingMedicalElements />
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-black/30 z-10"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center bg-fixed scale-110 animate-pulse-slow"
        ></div>
        <img 
          src="/images/daisyhome.jpg" 
          alt="Daisy's Journey Hero" 
          className="absolute inset-0 w-full h-full object-cover object-center scale-110 animate-pulse-slow"
        />
        
        <div className="container mx-auto px-4 md:px-6 relative z-20 text-center">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-tight animate-float">
              Daisy's Journey
            </h1>
            <p className="text-xl md:text-2xl text-white mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              Empowering compassionate volunteers to make a meaningful difference in healthcare environments
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up" style={{animationDelay: '0.6s'}}>
              <a
  href="https://docs.google.com/forms/d/e/1FAIpQLScSIQU9pljmbx4tyZF0r7wJIypH-ga476heeD_TJeIxj1H_LA/viewform?usp=sf_link"
  target="_blank"
  rel="noopener noreferrer"
>
  <Button
    size="lg"
    className="text-lg px-8 py-4 group hover-lift bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800"
  >
    Join Our Mission
    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
  </Button>
</a>

              <Button
  size="lg"
  variant="outline"
  className="text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-primary-600 hover-lift"
  onClick={() => window.scrollBy({ top: 200, behavior: 'smooth' })}
>
  Learn More
</Button>

            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                About Daisy's Journey
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary-400 to-secondary-600 mx-auto mb-8 animate-pulse-slow"></div>
              <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Founded in 2023, Daisy's Journey is a dedicated hospital volunteer program that brings comfort, 
                care, and compassion to patients at Baycrest Hospital. Our mission is to enhance the patient 
                experience through meaningful human connections and support.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="animate-slide-in-left">
                <img
                  src="/images/newHome.jpg"
                  alt="Hospital volunteer helping patient"
                  className="w-full h-auto rounded-2xl shadow-2xl hover-lift"
                />
              </div>
              
              <div className="space-y-8 animate-slide-in-right">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Vision</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We envision a healthcare environment where every patient feels supported, 
                    valued, and cared for through compassionate volunteer service.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">Our Impact</h3>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    Through our dedicated volunteers, we've provided thousands of hours of 
                    support, bringing smiles and comfort to patients during their healing journey.
                  </p>
                </div>
                
                <Link to="/mission">
                  <Button className="group hover-lift bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800">
                    Learn More About Our Mission
                    <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 animate-gradient">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Our Impact in Numbers
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary-400 to-secondary-600 mx-auto animate-pulse-slow"></div>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center text-white animate-scale-in hover-lift" style={{animationDelay: '0.1s'}}>
                <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slow">
                  <Users className="text-white" size={32} />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2">50+</h3>
                <p className="text-xl text-primary-100">Active Volunteers</p>
              </div>
              
              <div className="text-center text-white animate-scale-in hover-lift" style={{animationDelay: '0.2s'}}>
                <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slow" style={{animationDelay: '0.5s'}}>
                  <Heart className="text-white" size={32} />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2">500+</h3>
                <p className="text-xl text-primary-100">Patients Served</p>
              </div>
              
              <div className="text-center text-white animate-scale-in hover-lift" style={{animationDelay: '0.3s'}}>
                <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slow" style={{animationDelay: '1s'}}>
                  <Calendar className="text-white" size={32} />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2">5000+</h3>
                <p className="text-xl text-primary-100">Volunteer Hours</p>
              </div>
              
              <div className="text-center text-white animate-scale-in hover-lift" style={{animationDelay: '0.4s'}}>
                <div className="bg-white/10 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 animate-bounce-slow" style={{animationDelay: '1.5s'}}>
                  <Award className="text-white" size={32} />
                </div>
                <h3 className="text-4xl md:text-5xl font-bold mb-2">10+</h3>
                <p className="text-xl text-primary-100">Guest Speakers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-fade-in-up">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Volunteer Stories
              </h2>
              <div className="w-24 h-1 bg-gradient-to-r from-secondary-400 to-secondary-600 mx-auto mb-8 animate-pulse-slow"></div>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Hear from our dedicated volunteers about their experiences with Daisy's Journey
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in-up" style={{animationDelay: '0.3s'}}>
              <TestimonialCard 
                quote="Volunteering with Daisy's Journey has been the most rewarding experience of my life. Being able to provide comfort to patients during difficult times has given me a new perspective on what truly matters."
                name="Srigan Siva"
                role="Volunteer, 2 years"
                image="/images/loosrigan.jpg"
              />
              
              <TestimonialCard 
                quote="As a student, being a member of the Daisy Journey program has opened my eyes to the expansive world of medicine. Understanding different patient's needs, I'm inspired to pursue medicine."
                name="Sabrina Parsa"
                role="Volunteer, 2 years"
                image="/images/sabrina.jpg"
              />
              
              <TestimonialCard 
                quote="The training and support provided by Daisy's Journey is exceptional. I've grown not only as a volunteer but also as a person through this program."
                name="Maegan Eisler"
                role="Volunteer, 1 year"
                image="/images/maegan.jpg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-24 bg-gradient-to-br from-secondary-400 via-secondary-500 to-secondary-600 text-white relative overflow-hidden animate-gradient">
        <div className="absolute inset-0 bg-gradient-to-br from-secondary-400 to-secondary-600 opacity-90"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="max-w-4xl mx-auto text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl md:text-2xl mb-12 leading-relaxed">
              Join our community of volunteers and help bring comfort and care to those who need it most.
            </p>
                        <a
  href="https://docs.google.com/forms/d/e/1FAIpQLScSIQU9pljmbx4tyZF0r7wJIypH-ga476heeD_TJeIxj1H_LA/viewform?usp=sf_link"
  target="_blank"
  rel="noopener noreferrer"
> 
            <Button size="lg" className="text-lg px-8 py-4 bg-white text-secondary-600 hover:bg-gray-100 group hover-lift">
              Become a Volunteer Today
              <ChevronRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
                        </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;