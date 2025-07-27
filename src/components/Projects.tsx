import { Code } from 'lucide-react';
import { Card } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "Firefighting Robot",
      description:
        "A hardware-based robot built using Tinkercad to autonomously detect and extinguish fire using IR sensors and fans.",
      technologies: ["Tinkercad", "Embedded C", "IR Sensors", "DC Motors"],
      image: "bg-gradient-to-br from-orange-500 to-red-500",
    },
    {
      title: "AI-Powered Interactive Quiz System",
      description:
        "A Python-based quiz system using data structures like trees, heaps, and stacks to manage questions, evaluate answers, and adapt difficulty.",
      technologies: ["Python", "Heaps", "Stacks", "Trees"],
      image: "bg-gradient-to-br from-blue-400 to-indigo-600",
    }
  ];

  return (
    <section id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A few selected projects that highlight my passion for development,
            problem-solving, and practical implementation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`overflow-hidden card-hover group animate-scale-in delay-${index * 100}`}
            >
              <div className={`h-48 ${project.image} relative`}>
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                <div className="absolute top-4 right-4">
                  <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                    <Code className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>

                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-muted text-muted-foreground rounded text-xs font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
