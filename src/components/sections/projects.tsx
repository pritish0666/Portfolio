
import React from 'react';
import { siteConfig } from '@/config/site';

const Projects = () => {
  return (
    <section id="projects" className="container py-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Projects</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {siteConfig.projects.map((project) => (
          <div key={project.name} className="border rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">{project.name}</h3>
            <ul className="list-disc list-inside">
              {project.description.map((point, index) => (
                <li key={index}>{point}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
