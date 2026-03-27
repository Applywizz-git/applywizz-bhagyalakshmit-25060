import React, { useEffect, useState } from 'react';
import { Shield, TrendingUp, Database, Cog } from 'lucide-react';

const About = () => {
  const [countersStarted, setCountersStarted] = useState(false);
  const [projectCount, setProjectCount] = useState(0);
  const [yearCount, setYearCount] = useState(0);
  const [satisfactionCount, setSatisfactionCount] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !countersStarted) {
          setCountersStarted(true);
          animateCounters();
        }
      },
      { threshold: 0.3 }
    );

    const aboutElement = document.getElementById('about');
    if (aboutElement) observer.observe(aboutElement);

    return () => observer.disconnect();
  }, [countersStarted]);

  const animateCounters = () => {
    // Projects counter
    let projects = 0;
    const projectInterval = setInterval(() => {
      projects++;
      setProjectCount(projects);
      if (projects >= 10) clearInterval(projectInterval);
    }, 100);

    // Years counter
    let years = 0;
    const yearsInterval = setInterval(() => {
      years += 0.1;
      setYearCount(Math.round(years * 10) / 10);
      if (years >= 3) clearInterval(yearsInterval);
    }, 50);

    // Satisfaction counter
    let satisfaction = 0;
    const satisfactionInterval = setInterval(() => {
      satisfaction += 2;
      setSatisfactionCount(satisfaction);
      if (satisfaction >= 100) clearInterval(satisfactionInterval);
    }, 30);
  };

  const highlights = [
    {
      icon: Shield,
      title: 'Security Operations (SOC)',
      description: 'Incident response, threat detection, and threat hunting'
    },
    {
      icon: TrendingUp,
      title: 'Vulnerability Management',
      description: 'Nessus, Qualys, and CVSS prioritization'
    },
    {
      icon: Database,
      title: 'SIEM/SOAR Monitoring',
      description: 'Splunk, Microsoft Sentinel, and automated workflows'
    },
    {
      icon: Cog,
      title: 'Identity & Access Management',
      description: 'Active Directory, Azure AD, RBAC, and MFA'
    }
  ];

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* About Content */}
          <div className="animate-slide-in-left">
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Cybersecurity Analyst with 3+ years of hands-on experience in security operations, 
              threat detection, and incident response across enterprise environments supporting 
              1,500+ endpoints. Experienced in deploying and optimizing SIEM platforms 
              (Splunk Enterprise Security, Microsoft Sentinel) for log correlation, threat hunting, 
              and incident investigation aligned with MITRE ATT&CK.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Strong background in vulnerability management, identity and access security, and cloud 
              monitoring across AWS and Azure. Skilled in EDR (CrowdStrike Falcon), SIEM-driven 
              detection engineering, and integrating threat intelligence to improve SOC visibility, 
              response efficiency, and overall security posture.
            </p>
          </div>

          {/* Animated Counters */}
          <div className="animate-slide-in-right">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
              <div className="text-center glass-card p-6 rounded-2xl hover-glow">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {projectCount}+
                </div>
                <div className="text-muted-foreground">Projects</div>
              </div>
              <div className="text-center glass-card p-6 rounded-2xl hover-glow">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {yearCount}+
                </div>
                <div className="text-muted-foreground">Years Experience</div>
              </div>
              <div className="text-center glass-card p-6 rounded-2xl hover-glow">
                <div className="text-4xl font-bold gradient-text mb-2">
                  {satisfactionCount}%
                </div>
                <div className="text-muted-foreground">Client Satisfaction</div>
              </div>
            </div>
          </div>
        </div>

        {/* Highlights Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="glass-card p-6 rounded-2xl text-center hover-glow group transition-all duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="w-8 h-8 text-background" />
              </div>
              <h3 className="text-lg font-semibold mb-3 text-foreground">
                {highlight.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;