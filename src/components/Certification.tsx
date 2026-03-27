import React, { useState } from 'react';
import { Award, ExternalLink, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Certification = () => {
  const [flippedCard, setFlippedCard] = useState<number | null>(null);

  // UPDATED to match your resume's certifications
  const certifications = [
    {
      title: 'IBM Cybersecurity Analyst Professional Certificate',
      issuer: 'Coursera',
      description:
        'Comprehensive training in security analyst fundamentals, network security, endpoint protection, and incident response.',
      skills: ['Security Analyst', 'Network Security', 'Incident Response'],
      credentialId: 'IBM-CYBER-PRO',
      verifyLink: '#'
    },
    {
      title: 'Google Cybersecurity Professional Certificate',
      issuer: 'Coursera',
      description:
        'Hands-on training in Python for security, Linux, SQL, and security management using industry-standard tools.',
      skills: ['Python', 'Linux', 'SQL', 'Security Mgmt'],
      credentialId: 'GOOGLE-CYBER-PRO',
      verifyLink: '#'
    },
    {
      title: 'CompTIA Security+ (SY0-701) Cert Prep',
      issuer: 'LinkedIn Learning',
      description:
        'In-depth preparation for the Security+ certification, covering threats, attacks, vulnerabilities, and security architecture.',
      skills: ['CompTIA Security+', 'Threats', 'Security Architecture'],
      credentialId: 'COMPTIA-SPLUS-PREP',
      verifyLink: '#'
    },
    {
      title: 'Learning Microsoft Sentinel',
      issuer: 'LinkedIn Learning',
      description:
        'Specialized training in Microsoft Sentinel for SIEM/SOAR operations, log management, and threat response.',
      skills: ['Microsoft Sentinel', 'SIEM', 'SOAR'],
      credentialId: 'MS-SENTINEL-LEARN',
      verifyLink: '#'
    },
    {
      title: 'Incident Response and Digital Forensics',
      issuer: 'Coursera',
      description:
        'Focus on digital forensics, data recovery, and structured incident response methodologies.',
      skills: ['Digital Forensics', 'Data Recovery', 'Incident Response'],
      credentialId: 'IR-DIGITAL-FORENSICS',
      verifyLink: '#'
    },
    {
      title: 'Cybersecurity Risk Management Framework',
      issuer: 'Coursera',
      description:
        'Study of NIST RMF and security controls to manage organizational risks and compliance.',
      skills: ['NIST RMF', 'Risk Management', 'Compliance'],
      credentialId: 'CYBER-RMF',
      verifyLink: '#'
    }
  ];

  const handleCardFlip = (index: number) => {
    setFlippedCard(flippedCard === index ? null : index);
  };

  return (
    <section id="certification" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Certifications & <span className="gradient-text">Credentials</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Professional certifications demonstrating expertise in cybersecurity, threat detection, 
            SIEM operations, and risk management.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="relative h-80 cursor-pointer"
              onClick={() => handleCardFlip(index)}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`absolute inset-0 w-full h-full transition-transform duration-700 transform-gpu ${flippedCard === index ? 'rotate-y-180' : ''}`}
                style={{ transformStyle: 'preserve-3d' }}
              >
                {/* Front of Card */}
                <div
                  className="absolute inset-0 glass-card p-6 rounded-2xl hover-glow flex flex-col justify-between"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div>
                    <div className="flex items-center mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center mr-4">
                        <Award className="w-6 h-6 text-background" />
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground">{cert.issuer}</div>
                      </div>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-4 leading-tight">
                      {cert.title}
                    </h3>

                    <div className="flex flex-wrap gap-2">
                      {cert.skills.slice(0, 2).map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-primary/10 text-primary rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                      {cert.skills.length > 2 && (
                        <span className="px-2 py-1 bg-muted/20 text-muted-foreground rounded text-xs">
                          +{cert.skills.length - 2} more
                        </span>
                      )}
                    </div>
                  </div>

                  <div className="text-center mt-4">
                    <div className="text-xs text-muted-foreground mb-2">Click to view details</div>
                    <div className="w-8 h-0.5 bg-gradient-primary mx-auto"></div>
                  </div>
                </div>

                {/* Back of Card */}
                <div
                  className="absolute inset-0 glass-card p-6 rounded-2xl hover-glow transform rotate-y-180 flex flex-col justify-between"
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div>
                    <h3 className="text-lg font-bold text-foreground mb-3">
                      {cert.title}
                    </h3>

                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                      {cert.description}
                    </p>

                    <div className="space-y-2 mb-4">
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">Credential ID:</span> {cert.credentialId}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        <span className="font-medium">Issuer:</span> {cert.issuer}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1 mb-4">
                      {cert.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-2 py-1 bg-accent/10 text-accent rounded text-xs font-medium"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certification;
