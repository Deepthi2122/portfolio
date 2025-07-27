import { Download, GraduationCap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const Resume = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Computer Science Engineering",
      institution: "Amrita Vishwa Vidyapeetham",
      period: "2023 - 2027",
      description: "Pursuing comprehensive education in computer science fundamentals, algorithms, and software engineering practices."
    }
  ];

  const downloadResume = () => {
    // Replace this with actual file download logic
    alert("Resume download functionality would be implemented here");
  };

  return (
    <section id="resume" className="py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Resume</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-8" />
          <Button 
            variant="gradient" 
            size="lg"
            onClick={downloadResume}
            className="group"
          >
            <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
            Download Resume PDF
          </Button>
        </div>

        {/* Education Section Only */}
        <div className="animate-fade-in-left">
          <div className="flex items-center gap-3 mb-8">
            <div className="p-3 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-lg">
              <GraduationCap className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-2xl font-semibold">Education</h3>
          </div>
          
          {education.map((edu, index) => (
            <Card key={index} className="p-6 card-hover mb-6">
              <h4 className="font-semibold text-lg text-foreground mb-2">
                {edu.degree}
              </h4>
              <p className="text-primary font-medium mb-1">{edu.institution}</p>
              <p className="text-sm text-muted-foreground mb-3">{edu.period}</p>
              <p className="text-muted-foreground">{edu.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Resume;
