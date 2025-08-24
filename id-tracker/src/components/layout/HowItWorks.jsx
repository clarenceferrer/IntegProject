import React from "react";
import "./HowItWorks.css";
import { Calendar, Mail, ArrowUpRight, CheckSquare } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: <Calendar size={32} />,
      title: "Book",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur ultricies velit ut augue aliquam pulvinar.",
    },
    {
      icon: <Mail size={32} />,
      title: "Get Email",
      description:
        "Etiam molestie dolor eu pharetra tempus. Fusce maximus dui eu lectus luctus, in sodales ex pellentesque.",
    },
    {
      icon: <ArrowUpRight size={32} />,
      title: "Visit ITSO",
      description:
        "Cras ultricies metus a erat consectetur, et molestie justo placerat. Suspendisse at laoreet magna.",
    },
    {
      icon: <CheckSquare size={32} />,
      title: "Claim",
      description:
        "Suspendisse at laoreet magna. Vivamus ligula augue, posuere ac magna eu, facilisis hendrerit nibh.",
    },
  ];

  return (
    <section className="howitworks">
      <h2 className="howitworks-title">How It Works</h2>

      
      <div className="timeline">
        <div className="timeline-line"></div>
        <div className="timeline-dot left"></div>
        <div className="timeline-dot right"></div>
      </div>

      
      <div className="steps">
        {steps.map((step, index) => (
          <div key={index} className="step-card">
            <div className="step-icon">{step.icon}</div>
            <h3 className="step-title">{step.title}</h3>
            <p className="step-desc">{step.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
