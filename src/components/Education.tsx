import React from 'react';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const Education = () => {
  const educationData = [
    {
      degree: 'Master of Science in Cyber Security Operations Systems',
      institution: 'Webster University',
      location: 'USA',
      year: 'Aug 2023 - May 2025',
      description:
        'Advanced graduate program focused on cybersecurity operations, threat intelligence, incident response, and security architecture.',
      achievements: [
        'Specialization in Cyber Security Operations Systems',
        'Hands-on projects in threat detection and incident response',
        'In-depth study of security frameworks and risk management'
      ],
      logo: '🎓'
    }
  ];

  return (
    <section id="education" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Education & <span className="gradient-text">Academic Background</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto mb-4"></div>
          {/* subtitle aligned to resume focus */}
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Academic foundation supporting expertise in cybersecurity operations, threat intelligence, and security architecture.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-12">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className={`glass-card p-8 rounded-3xl hover-glow animate-slide-in-${index % 2 === 0 ? 'left' : 'right'}`}
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="grid lg:grid-cols-4 gap-8 items-center">
                {/* Institution Logo/Icon */}
                <div className="lg:col-span-1 flex justify-center">
                  <div className="relative">
                    <div className="w-24 h-24 bg-gradient-primary rounded-full flex items-center justify-center text-4xl animate-pulse-teal">
                      {edu.logo}
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-accent rounded-full flex items-center justify-center">
                      <GraduationCap className="w-4 h-4 text-accent-foreground" />
                    </div>
                  </div>
                </div>

                {/* Education Details */}
                <div className="lg:col-span-3">
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-foreground mb-2">
                      {edu.degree}
                    </h3>
                    <h4 className="text-xl text-primary font-semibold mb-3">
                      {edu.institution}
                    </h4>

                    <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{edu.year}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {edu.description}
                  </p>

                  {/* Achievements */}
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 mb-3">
                      <Award className="w-4 h-4 text-accent" />
                      <span className="text-foreground font-semibold">Key Achievements</span>
                    </div>
                    <ul className="space-y-2">
                      {edu.achievements.map((achievement, achIndex) => (
                        <li key={achIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Academic Information */}
        <div className="mt-16 text-center">
          <div className="glass-card p-8 rounded-2xl max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4 text-foreground">
              Academic <span className="gradient-text">Excellence</span>
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-6">
              A blend of cybersecurity theory, hands-on SOC operations, and threat analysis—supporting 
              resilient security postures and organizational protection.
            </p>

            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-primary to-accent rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <GraduationCap className="w-8 h-8 text-background" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">SOC Expertise</h4>
                <p className="text-sm text-muted-foreground">
                  Security operations and incident response
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-accent to-success rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <Award className="w-8 h-8 text-background" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">Threat Intelligence</h4>
                <p className="text-sm text-muted-foreground">
                  MITRE ATT&CK and behavioral analysis
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-success to-primary rounded-2xl flex items-center justify-center mx-auto mb-3">
                  <MapPin className="w-8 h-8 text-background" />
                </div>
                <h4 className="font-semibold text-foreground mb-2">IAM & Governance</h4>
                <p className="text-sm text-muted-foreground">
                  Azure AD, RBAC, and NIST standards
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
