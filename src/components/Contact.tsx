import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Send, Mail, Phone, MapPin, CheckCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Show success toast with animation
    toast({
      title: "Message Sent Successfully! 🎉",
      description: "Thank you for reaching out. I'll get back to you soon!",
      className: "bg-success/10 border-success text-success-foreground"
    });

    // Trigger confetti effect (visual feedback)
    triggerConfetti();

    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const triggerConfetti = () => {
    // Simple confetti animation using CSS
    const confetti = document.createElement('div');
    confetti.innerHTML = '🎉'.repeat(20);
    confetti.className = 'fixed inset-0 flex items-center justify-center text-6xl animate-bounce pointer-events-none z-50';
    document.body.appendChild(confetti);
    setTimeout(() => document.body.removeChild(confetti), 2000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: 'Email',
      value: 'Bhagyat897@gmail.com',
      link: 'mailto:Bhagyat897@gmail.com'
    },
    {
      icon: Phone,
      label: 'Phone',
      value: '+1 (618) 802-4229',
      link: 'tel:+16188024229'
    },
    {
      icon: MapPin,
      label: 'Location',
      value: 'Saint louis, MO',
      link: '#'
    }
  ];

  const socialLinks = [
    {
      icon: Mail,
      label: 'Email',
      link: 'mailto:Bhagyat897@gmail.com',
      color: 'hover:text-accent'
    }
  ];

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Ready to discuss security operations, threat detection, or identity and access management opportunities? 
            Let's connect and explore how I can contribute to your team's success.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-8 text-foreground">
              Let's Start a <span className="gradient-text">Conversation</span>
            </h3>
            
            <p className="text-muted-foreground mb-8 leading-relaxed">
              I'm always interested in discussing new opportunities in cybersecurity, 
              threat hunting, and identity security solutions. Whether you're looking for 
               a security analyst or want to collaborate on innovative security platforms, 
              I'd love to hear from you.
            </p>

            {/* Contact Info Cards */}
            <div className="space-y-6 mb-8">
              {contactInfo.map((info, index) => (
                <div
                  key={index}
                  className="glass-card p-4 rounded-xl hover-glow flex items-center gap-4"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                    <info.icon className="w-5 h-5 text-background" />
                  </div>
                  <div>
                    <div className="text-muted-foreground text-sm">{info.label}</div>
                    <a
                      href={info.link}
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      {info.value}
                    </a>
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 glass-card rounded-xl flex items-center justify-center hover-glow text-muted-foreground transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Contact Form */}
          <div className="animate-slide-in-right">
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-3xl hover-glow">
              <div className="space-y-6">
                {/* Name Input */}
                <div className="relative">
                  <Input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your Name"
                    required
                    className="peer bg-background/50 border-border focus:border-primary transition-all duration-300 h-14 text-lg"
                  />
                  <label className="absolute left-4 -top-2 bg-card px-2 text-muted-foreground text-sm transition-all duration-200 peer-focus:text-primary">
                    Full Name
                  </label>
                </div>

                {/* Email Input */}
                <div className="relative">
                  <Input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    required
                    className="peer bg-background/50 border-border focus:border-primary transition-all duration-300 h-14 text-lg"
                  />
                  <label className="absolute left-4 -top-2 bg-card px-2 text-muted-foreground text-sm transition-all duration-200 peer-focus:text-primary">
                    Email Address
                  </label>
                </div>

                {/* Message Textarea */}
                <div className="relative">
                  <Textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell me about your project, opportunity, or how we can collaborate..."
                    required
                    rows={6}
                    className="peer bg-background/50 border-border focus:border-primary transition-all duration-300 text-lg resize-none"
                  />
                  <label className="absolute left-4 -top-2 bg-card px-2 text-muted-foreground text-sm transition-all duration-200 peer-focus:text-primary">
                    Message
                  </label>
                </div>

                {/* Submit Button */}
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-gradient-primary hover:shadow-glow transition-all duration-300 h-14 text-lg font-semibold"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 border-2 border-background/20 border-t-background rounded-full animate-spin"></div>
                      Sending Message...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <Send className="w-5 h-5" />
                      Send Message
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;