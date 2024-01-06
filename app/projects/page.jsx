'use client';
import React, { useState } from 'react';
import { Tabs, TabsList, TabsContent, TabsTrigger } from '@/components/ui/tabs';
import ProjectCard from '@/components/ProjectCard';

const projectData = [
    {
      image: '/work/3.png',
      category: 'react js',
      name: 'Music streaming app',
      description:
        'This project is built using React for the frontend, Redux for state management, and TailwindCSS for styling',
      link: 'https://github.com/BadurFadul/music-streaming-app',
      github: 'https://b-musii.netlify.app/',
    },
    {
      image: '/work/4.png',
      category: 'fullstack',
      name: 'E-comerce website',
      description:
        'A Fullstack E-comerce website that combines a frontend built with React and Redux and a backend built with ASP.NET Core 7 ',
      link: 'https://github.com/BadurFadul/Fullstack?tab=readme-ov-file',
      github: 'https://b-comerce.netlify.app/',
    },
    {
      image: '/work/2.png',
      category: 'typescript',
      name: 'Breweries app',
      description:
        'Fetch, display, and search for brewery companies from the given API endpoint, using React and TypeScript and material ui',
      link: 'https://breweriess-app.netlify.app/',
      github: 'https://github.com/BadurFadul/Breweries-App',
    },
    {
      image: '/work/1.png',
      category: 'C#',
      name: 'A media player',
      description:
        'a media player console app that show advanced topics in C# programming, including solid, clean architecture, Factory pattern, ...',
      link: '/',
      github: 'https://github.com/BadurFadul/Media-Player',
    },
    {
      image: '/work/5.png',
      category: 'C#',
      name: 'Library Management System',
      description:
        'a console app that for managing books in a library. it show  principles of Object-Oriented Programming: Encapsulation, Abstraction, Inheritance, and Polymorphism. ',
      link: '',
      github: 'https://github.com/BadurFadul/Library',
    },
    {
      image: '/work/6.png',
      category: 'fullstack',
      name: 'Scheduling-System',
      description:
        'web-based exam scheduling system that streamlines the exam management process.built with React for the front-end, Node.js and Express for the back-end, and a PostgreSQL.',
      link: '',
      github: 'https://github.com/BadurFadul/Scheduling-System',
    }
  ];

// remove category duplicates
const uniqueCategories = [
  'all projects',
  ...new Set(projectData.map((item) => item.category)),
];

const Projects = () => {
  const [categories, setCategories] = useState(uniqueCategories);
  const [category, setCategory] = useState('all projects');

  const filteredProjects = projectData.filter((project) => {
    // if category is 'all projects' return all projects, else filter by category
    return category === 'all projects'
      ? project
      : project.category === category;
  });

  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          My Projects
        </h2>
        {/* tabs */}
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className='w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:border dark:border-none'>
            {categories.map((category, index) => {
              return (
                <TabsTrigger
                  onClick={() => setCategory(category)}
                  value={category}
                  key={index}
                  className='capitalize w-[162px] md:w-auto'
                >
                  {category}
                </TabsTrigger>
              );
            })}
          </TabsList>
          {/* tabs content */}
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProjects.map((project, index) => {
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project} />
                </TabsContent>
              );
            })}
          </div>
        </Tabs>
      </div>
    </section>
  );
};

export default Projects;
