import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, ExternalLink } from 'lucide-react';
import profilePhoto from '@/assets/profile-photo.jpg';
import heroBackground from '@/assets/hero-background.jpg';

const Hero = () => {
  const [currentText, setCurrentText] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(true);



  const scrollToProjects = () => {
    const element = document.querySelector('#projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with Parallax Effect */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-20"
        style={{
          backgroundImage: `url(${heroBackground})`,
          transform: 'translateZ(0)', // Prepare for parallax
        }}
      />

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero" />

      <div className="container mx-auto px-6 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Introduction */}
          <div className="text-center lg:text-left animate-slide-in-left">
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="block text-foreground">Hi, I'm</span>
              <span className="block gradient-text">Bhagya Lakshmi T</span>
            </h1>

            <p className="text-lg text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0 leading-relaxed">
              Cybersecurity Analyst with 3+ years of hands-on experience in security operations, threat detection, and incident response across enterprise environments supporting 1,500+ endpoints.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                onClick={scrollToProjects}
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 hover:scale-105"
                size="lg"
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Projects
              </Button>
              <a href="/resume/resume.pdf" download="Bhagya_Lakshmi_T_Resume.pdf">
                <Button
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-105"
                  size="lg"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download Resume
                </Button>
              </a>
            </div>
          </div>

          {/* Right Side - Profile Photo */}
          <div className="flex justify-center animate-slide-in-right">
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-primary p-1 animate-pulse-teal">
                <div className="w-full h-full rounded-full overflow-hidden bg-card">
                  <img
                    src={profilePhoto}
                    alt="Bhagya Lakshmi T - Cybersecurity Analyst"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                    loading="lazy"
                  />
                </div>
              </div>

              {/* Floating Elements */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-accent rounded-full flex items-center justify-center animate-pulse-violet">
                <span className="text-accent-foreground font-bold">⚡</span>
              </div>
              <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-success rounded-full flex items-center justify-center animate-pulse-teal">
                <span className="text-success-foreground font-bold">🔧</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;