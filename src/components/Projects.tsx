import React, { useState } from 'react';
import { ExternalLink, Github, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AirlineAnalyticsImg from '@/assets/Airline-Analytics.png';
import FlightoperationImg from '@/assets/Flight-Operation.png';
import cloudImg from '@/assets/cloud.png';
import healthcareImg from '@/assets/Health-Claims.png';
import healthriskImg from '@/assets/Health-Risk.png'; 
import cloudAnalyticsImg from '@/assets/Cloud-Analytics.png';

const Projects = () => {
  const [currentProject, setCurrentProject] = useState(0);


  const projects = [
    {
      title: 'Enterprise SOC Threat Detection Platform Implementation',
      description:
        'Built centralized SIEM log ingestion pipelines using Splunk and Microsoft Sentinel to aggregate authentication, server, and firewall logs. Created correlation rules to detect abnormal login behavior and lateral movement patterns. Enhanced alert investigation by integrating threat intelligence indicators (IOCs) using VirusTotal and OTX.',
      techStack: [
        'Splunk', 'Microsoft Sentinel', 'VirusTotal', 'OTX', 'SIEM',
        'Correlation Rules', 'Threat Intel', 'Log Ingestion'
      ],
      image: AirlineAnalyticsImg,
      category: 'SOC Operations'
    },
    {
      title: 'Identity and Access Security Monitoring',
      description:
        'Configured Azure Active Directory RBAC roles and MFA policies across enterprise applications. Streamlined authentication monitoring by forwarding Azure AD sign-in logs into the SIEM, enabling continuous tracking of suspicious login attempts and anomaly detection.',
      techStack: [
        'Azure AD', 'RBAC', 'MFA', 'Conditional Access', 'SIEM',
        'Authentication Monitoring', 'Anomaly Detection'
      ],
      image: healthcareImg,
      category: 'IAM Security'
    },
    {
      title: 'Cloud Security Monitoring Platform',
      description:
        'Integrated AWS CloudTrail and IAM activity with Azure Activity Logs into the SIEM to centralize cloud activity monitoring. Developed detection rules for anomalous API calls and privilege escalation events, identifying over-privileged accounts.',
      techStack: [
        'AWS CloudTrail', 'AWS IAM', 'Azure Activity Logs', 'SIEM',
        'API Monitoring', 'Privilege Escalation', 'Cloud Security'
      ],
      image: cloudAnalyticsImg,
      category: 'Cloud Security'
    }
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const goToProject = (index: number) => {
    setCurrentProject(index);
  };

  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Explore my portfolio of security operations, identity management, and cloud security monitoring projects
          </p>
        </div>

        {/* Main Project Display */}
        <div className="relative mb-12">
          <div className="glass-card rounded-3xl overflow-hidden hover-glow">
            <div className="grid lg:grid-cols-2 gap-8">
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={projects[currentProject].image}
                  alt={projects[currentProject].title}
                  className="w-full h-80 lg:h-full object-cover transition-transform duration-500 hover:scale-110"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent lg:hidden"></div>
              </div>

              {/* Project Details */}
              <div className="p-8 flex flex-col justify-center">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-accent/20 text-accent rounded-full text-sm font-medium">
                    {projects[currentProject].category}
                  </span>
                </div>

                <h3 className="text-3xl font-bold mb-4 text-foreground">
                  {projects[currentProject].title}
                </h3>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {projects[currentProject].description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[currentProject].techStack.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Arrows */}
          <Button
            onClick={prevProject}
            size="icon"
            className="absolute left-4 top-1/2 transform -translate-y-1/2 glass-card hover-glow"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            onClick={nextProject}
            size="icon"
            className="absolute right-4 top-1/2 transform -translate-y-1/2 glass-card hover-glow"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>
        </div>

        {/* Project Thumbnails */}
        <div className="flex justify-center gap-4 overflow-x-auto pb-4">
          {projects.map((project, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              className={`flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden transition-all duration-300 ${
                index === currentProject
                  ? 'ring-2 ring-primary scale-110'
                  : 'opacity-60 hover:opacity-100'
              }`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
            </button>
          ))}
        </div>

        {/* Project Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {projects.map((_, index) => (
            <button
              key={index}
              onClick={() => goToProject(index)}
              title={`Go to project ${index + 1}`}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === currentProject ? 'bg-primary w-8' : 'bg-muted'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
