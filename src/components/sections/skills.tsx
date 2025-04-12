'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';

const Skills = () => {
  const skills = [
    { name: 'C++', icon: '/c++.png' },
    { name: 'JavaScript', icon: '/javascript.png' },
    { name: 'Python', icon: '/python.png' },
    { name: 'HTML', icon: '/html.png' },
    { name: 'CSS', icon: '/css.png' },
    { name: 'Tailwind CSS', icon: '/tailwindcss.png' },
    { name: 'Node.js', icon: '/nodejs.png' },
    { name: 'Docker', icon: '/docker.png' },
    { name: 'MongoDB', icon: '/mongodb.png' },
    { name: 'PostgreSQL', icon: '/postgresql.png' },
    { name: 'Postman', icon: '/postman.png' },
    { name: 'Next.js', icon: '/nextjs.png' },
    { name: 'Firebase', icon: '/firebase.png' },
    { name: 'ReactJs', icon: '/react.png' },
    
  ];

  return (
    <section id="skills" className="container py-24">
      <h2 className="text-3xl font-bold mb-8 text-center">Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill, index) => (
          <Badge key={index}>
            <img
              src={skill.icon}
              alt={skill.name}
              className="mr-2 h-4 w-4"
            />
            {skill.name}
          </Badge>
        ))}
      </div>
    </section>
  );
};

export default Skills;
