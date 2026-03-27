import React, { useState, useEffect } from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Footer = () => {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [currentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      link: 'mailto:Bhagyat897@gmail.com',
      color: 'hover:text-accent hover:scale-110'
    }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="relative py-16 bg-gradient-to-t from-card/50 to-background">
      <div className="container mx-auto px-6">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-primary rounded-xl flex items-center justify-center animate-pulse-teal">
                <span className="text-background font-bold text-xl">B</span>
              </div>
              <span className="text-xl font-bold gradient-text">BHAGYA LAKSHMI T</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Cybersecurity Analyst specializing in security operations, threat detection, 
              and incident response. Committed to building resilient security postures that 
              protect enterprise assets through proactive monitoring and automation.
            </p>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Built with</span>
              <Heart className="w-4 h-4 text-red-500 animate-pulse" />
              <span>using React & Tailwind CSS</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-muted-foreground hover:text-primary transition-colors duration-200 text-sm"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Social */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-4">
              Connect With Me
            </h3>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div>
                <span className="font-medium">Email:</span>
                <br />
                  <a 
                    href="mailto:Bhagyat897@gmail.com" 
                    className="hover:text-primary transition-colors"
                  >
                    Bhagyat897@gmail.com
                  </a>
              </div>
              <div>
                <span className="font-medium">Phone:</span>
                <br />
                  <a 
                    href="tel:+16188024229" 
                    className="hover:text-primary transition-colors"
                  >
                    +1 (618) 802-4229
                  </a>
              </div>
              <div>
                <span className="font-medium">Location:</span>
                <br />
                <span>Saint louis, MO</span>
              </div>
            </div>
            
            {/* Social Icons */}
            <div className="flex gap-4 pt-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-10 h-10 glass-card rounded-lg flex items-center justify-center text-muted-foreground transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="w-full h-px bg-gradient-primary mb-8"></div>

        {/* Copyright Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-muted-foreground text-sm text-center md:text-left">
            <span className="animate-fade-in-up">
              © {currentYear} Bhagya Lakshmi T • Cybersecurity Analyst
            </span>
          </div>
          
          <div className="text-muted-foreground text-sm text-center md:text-right">
            <span>Securing Enterprise Infrastructure with Modern SOC Operations</span>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <Button
          onClick={scrollToTop}
          size="icon"
          className={`fixed bottom-8 right-8 glass-card hover-glow transition-all duration-300 z-40 animate-fade-in-up ${
            showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </Button>
      )}

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-card to-transparent pointer-events-none"></div>
    </footer>
  );
};

export default Footer;