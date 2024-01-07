'use client';
import Link from 'next/link';
import { Button } from './ui/button';

// import swiper react components
import { Swiper, SwiperSlide } from 'swiper/react';

// import swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// import required modules
import { Pagination } from 'swiper/modules';

// components
import ProjectCard from '@/components/ProjectCard';

const projectData = [
  {
    image: '/work/3.png',
    category: 'react js',
    name: 'Music streaming app',
    description:
      'This project is built using React for the frontend, Redux for state management, and TailwindCSS for styling',
    link: 'https://b-musii.netlify.app/',
    github: 'https://github.com/BadurFadul/music-streaming-app',
  },
  {
    image: '/work/4.png',
    category: 'fullstack',
    name: 'E-comerce website',
    description:
      'A Fullstack E-comerce website that combines a frontend built with React and Redux and a backend built with ASP.NET Core 7 ',
    link: 'https://b-comerce.netlify.app/',
    github: 'https://github.com/BadurFadul/Fullstack?tab=readme-ov-file',
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

const Work = () => {
  return (
    <section className='relative mb-12 xl:mb-48'>
      <div className='container mx-auto'>
        {/* text */}
        <div className='max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start'>
          <h2 className='section-title mb-4'>Latest Projects</h2>
          <p className='subtitle mb-8'>
            Here are some of the projects I have done.
          </p>
          <Link href='/projects'>
            <Button>All projects</Button>
          </Link>
        </div>
        {/* slider */}
        <div className='xl:max-w-[1000px] xl:absolute right-0 top-0'>
          <Swiper
            className='h-[480px]'
            slidesPerView={1}
            breakpoints={{
              640: {
                slidesPerView: 2,
              },
            }}
            spaceBetween={30}
            modules={[Pagination]}
            pagination={{ clickable: true }}
          >
            {/* show only the first 4 projects for the slides */}
            {projectData.slice(0, 4).map((project, index) => {
              return (
                <SwiperSlide  key={index}>
                  <ProjectCard project={project} />
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Work;
