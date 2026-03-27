import React from 'react';
import { Calendar, MapPin, TrendingUp, Shield, Database } from 'lucide-react';

const Experience = () => {
  const experiences = [
    {
      company: 'Deloitte',
      role: 'Cyber Security Analyst',
      period: 'Aug 2025 - Present',
      location: 'USA',
      highlights: [
        'Engineered centralized SIEM log ingestion pipelines by integrating Windows event logs, Active Directory authentication data, and firewall telemetry, strengthening enterprise-wide visibility across 1,500+ endpoints.',
        'Conducted in-depth incident investigations using SIEM queries mapped to MITRE ATT&CK techniques, identifying credential misuse and lateral movement patterns, reducing recurring security incidents by 30%.',
        'Performed proactive threat hunting across authentication, endpoint, and network telemetry using behavioral analysis, uncovering stealthy attack patterns and improving SOC detection maturity.',
        'Strengthened identity security posture by auditing privileged Active Directory accounts and enforcing RBAC alignment, reducing excessive access and lowering identity-related risk exposure by 25%.',
        'Led vulnerability management efforts by analyzing Nessus and Qualys scan outputs, prioritizing remediation using CVSS scoring, and driving fixes that reduced critical vulnerabilities by 35%.',
        'Secured application and deployment pipelines by reviewing CI/CD logs and identifying misconfigurations, enabling DevOps teams to remediate risks prior to production releases.',
        'Improved human-layer security by designing and executing phishing simulation campaigns and awareness programs, contributing to a 28% reduction in successful phishing attempts.',
        'Enhanced SOC efficiency by developing SIEM-based alert enrichment and SOAR-integrated workflows, improving automated response and reducing manual triage effort by 40%.'
      ],
      techStack: ['Splunk', 'Microsoft Sentinel', 'MITRE ATT&CK', 'Nessus', 'Qualys', 'Active Directory', 'SIEM', 'SOAR'],
      side: 'right'
    },
    {
      company: 'Infosys',
      role: 'IT Security Specialist',
      period: 'Jan 2020 - Mar 2023',
      location: 'Hyderabad, India',
      highlights: [
        'Monitored Palo Alto firewall and IDS alerts through centralized SIEM dashboards, working with network engineers to block malicious IP traffic and improve perimeter defense coverage across 800+ enterprise systems.',
        'Performed vulnerability assessments using Nessus on Windows and Linux servers, partnering with infrastructure teams to remediate critical findings, reducing high-risk vulnerabilities by 30% within quarterly cycles.',
        'Managed Active Directory user provisioning and RBAC access approvals, coordinating with application owners to validate permissions and reduce unauthorized privilege assignments by 25%.',
        'Investigated suspicious authentication activity using Windows security logs and domain controller events, collaborating with SOC teams to escalate incidents and decrease identity misuse cases by 20%.',
        'Reviewed firewall traffic logs and IDS alerts alongside network teams to identify recurring external threats, leading to improved access control rules and stronger network segmentation policies.',
        'Deployed and monitored endpoint protection solutions across enterprise systems, working with IT support teams to contain malware threats and reduce endpoint-related incidents by 25%.',
        'Maintained incident tracking and vulnerability remediation reports using internal ticketing systems, enabling security leadership to monitor response timelines and improving operational efficiency by 20%.',
        'Prepared security documentation and audit reports aligned with NIST standards, collaborating with compliance teams to support internal audits and strengthen regulatory readiness.'
      ],
      techStack: ['Palo Alto Firewall', 'IDS/IPS', 'Nessus', 'Active Directory', 'Windows Security Logs', 'NIST Standards', 'Endpoint Protection'],
      side: 'left'
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gradient-to-b from-background to-card/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Professional <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-primary opacity-30"></div>

          <div className="space-y-16">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  exp.side === 'left' ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-gradient-primary rounded-full border-4 border-background z-10 animate-pulse-teal"></div>

                {/* Content Card */}
                <div className={`w-full lg:w-5/12 ${exp.side === 'left' ? 'lg:pl-8' : 'lg:pr-8'}`}>
                  <div 
                    className={`glass-card p-8 rounded-2xl hover-glow animate-slide-in-${exp.side}`}
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    {/* Company & Role */}
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-foreground mb-2">
                        {exp.role}
                      </h3>
                      <h4 className="text-xl text-primary font-semibold mb-3">
                        {exp.company}
                      </h4>
                      
                      <div className="flex flex-col sm:flex-row sm:items-center gap-4 text-muted-foreground mb-4">
                        <div className="flex items-center gap-2">
                          <Calendar className="w-4 h-4" />
                          <span>{exp.period}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <MapPin className="w-4 h-4" />
                          <span>{exp.location}</span>
                        </div>
                      </div>
                    </div>

                    {/* Highlights */}
                    <ul className="space-y-3 mb-6">
                      {exp.highlights.map((highlight, hIndex) => (
                        <li key={hIndex} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-gradient-primary rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground leading-relaxed">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2">
                      {exp.techStack.map((tech, tIndex) => (
                        <span
                          key={tIndex}
                          className="px-3 py-1 bg-primary/10 text-primary rounded-lg text-sm font-medium border border-primary/20 hover:bg-primary/20 transition-colors duration-200"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for opposite side */}
                <div className="hidden lg:block w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;