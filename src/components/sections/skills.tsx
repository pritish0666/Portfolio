'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Icons } from '@/components/icons';

const Skills = () => {
  const skills = [
    { name: 'C++', icon: 'c++' },
    { name: 'JavaScript', icon: 'javascript' },
    { name: 'Python', icon: 'python' },
    { name: 'HTML', icon: 'html' },
    { name: 'CSS', icon: 'css' },
    { name: 'Tailwind CSS', icon: 'tailwindcss' },
    { name: 'Node.js', icon: 'nodejs' },
    { name: 'Docker', icon: 'docker' },
    { name: 'MongoDB', icon: 'mongodb' },
    { name: 'PostgreSQL', icon: 'postgress' },
    { name: 'Postman', icon: 'postman' },
    { name: 'Next.js', icon: 'nextjs' },
    { name: 'Firebase', icon: 'firebase' },
    { name: 'ReactJs', icon: 'reactjs' },
    { name: 'Git', icon: 'git' },
    { name: 'GitHub', icon: 'github' },
    { name: 'Visual Studio Code', icon: 'code' },
    { name: 'Authorization', icon: 'shield' },
    { name: 'JWT', icon: 'key' },
    { name: 'OAuth', icon: 'globe' },
    { name: 'Web API', icon: 'api' },
  ];

  return (
    <section id="skills" className="container py-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <Badge key={index} className="px-4 py-2 text-lg rounded-full">
            {skill.icon && typeof Icons[skill.icon as keyof typeof Icons] === 'function' ? (
              React.createElement(Icons[skill.icon as keyof typeof Icons], {
                className: "mr-2 h-5 w-5",
              })
            ) : null}
            {skill.name}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default Skills;
