import DevImg from './DevImg';
import Image from 'next/image';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import {
  User2,
  MailIcon,
  HomeIcon,
  PhoneCall,
  GraduationCap,
  Calendar,
  Briefcase,
} from 'lucide-react';

const infoData = [
  {
    icon: <User2 size={20} />,
    text: 'Badreldin Fadul',
  },
  {
    icon: <PhoneCall size={20} />,
    text: '+358 40 221 4327',
  },
  {
    icon: <MailIcon size={20} />,
    text: 'Badoryousif.by@email.com',
  },
  {
    icon: <Calendar size={20} />,
    text: 'Born on 1 May, 1998',
  },
  {
    icon: <GraduationCap size={20} />,
    text: 'Masters Degree Program in Information Technology: Computer Engineering, (2023-2024)',
  },
  {
    icon: <HomeIcon size={20} />,
    text: 'Vaasa, Finland',
  },
];

const qualificationData = [
  {
    title: 'education',
    data: [
      {
        university: 'Novia University of Applied Sciences',
        qualification: 'bachelor of engineering',
        years: '2019 - 2023',
      },
      {
        university: 'Åbo Akademi',
        qualification: 'Masters Degree Program in Information Technology',
        years: '2023 - 2024',
      },
    ],
  },
  {
    title: 'experience',
    data: [
      {
        company: 'Multitronic',
        role: 'technician',
        years: 'Jan 2023 - Mar 2023',
      },
      {
        company: 'Edupower Oy Ab',
        role: 'Back End Developer',
        years: 'May 2023 - July 2023',
      },
      {
        company: 'Integrify',
        role: 'Full-stack Developer Trainee',
        years: 'Apr 2023 - Sep 2023 ',
      },
      {
        company: 'Junction (Helsinki) hackerthon',
        role: 'contestant',
        years: 'Sept 2023',
      },
    ],
  },
];

const skillData = [
  {
    title: 'skills',
    data: [
      {
        name: 'HTML, CSS',
      },
      {
        name: 'Front-end Development, Javascript, TypeScript',
      },
      {
        name: 'react, vue, Material-UI, Redux, Tailwind',
      },
      {
        name: 'Back-end Development, C# (.Net), C++, Python',
      },
      {
        name: 'DATABASES, MongoDB, PostgreSQL',
      },
      {
        name: 'Testing, Jest, Unit Testing',
      },
      {
        name: 'DEVOPS, Azure CI/CD',
      },
      {
        name: 'CLOUD, Azure',
      },
      
    ],
  },
];

const About = () => {
  const getData = (arr, title) => {
    return arr.find((item) => item.title === title);
  };

  return (
    <section className='xl:h-[920px] pb-12 xl:py-24'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
          About me
        </h2>
        <div className='flex flex-col xl:flex-row'>
          {/* image */}
          <div className='hidden xl:flex flex-1 relative'>
            <DevImg
              containerStyles='bg-about_shape_light dark:bg-about_shape_dark w-[555px] h-[585px] bg-no-repeat relative'
              imgSrc='/hero/developer.png'
              imgWidth={450} 
              imgHeight={400} 
            />
          </div>
          {/* tabs */}
          <div className='flex-1'>
            <Tabs defaultValue='personal'>
              <TabsList className='w-full grid xl:grid-cols-3 xl:max-w-[520px] xl:border dark:border-none'>
                <TabsTrigger className='w-[162px] xl:w-auto' value='personal'>
                  Personal Info
                </TabsTrigger>
                <TabsTrigger
                  className='w-[162px] xl:w-auto'
                  value='qualifications'
                >
                  Qualifications
                </TabsTrigger>
                <TabsTrigger className='w-[162px] xl:w-auto' value='skills'>
                  Skills
                </TabsTrigger>
              </TabsList>
              {/* tabs content */}
              <div className='text-lg mt-12 xl:mt-8'>
                {/* personal */}
                <TabsContent value='personal'>
                  <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-4'>
                      Been coding since 2019
                    </h3>
                    <p className='subtitle max-w-xl mx-auto xl:mx-0'>
                    I have immersed myself in the world of coding, developing a strong skill 
                    set and a deep passion for 
                    problem-solving
                    </p>
                    {/* icons */}
                    <div className='grid xl:grid-cols-2 gap-4 mb-12'>
                      {infoData.map((item, index) => {
                        return (
                          <div
                            className='flex items-center gap-x-4 mx-auto xl:mx-0'
                            key={index}
                          >
                            <div className='text-primary'>{item.icon}</div>
                            <div>{item.text}</div>
                          </div>
                        );
                      })}
                    </div>
                    {/* languages */}
                    <div className='flex flex-col gap-y-2'>
                      <div className='text-primary'>Language Skill</div>
                      <div className='border-b border-border'></div>
                      <div>Arabic, Swedish, English, Finnish</div>
                    </div>
                  </div>
                </TabsContent>
                {/* qualifications */}
                <TabsContent value='qualifications'>
                  <div>
                    <h3 className='h3 mb-8 text-center xl:text-left'>
                      My Awesome Journey
                    </h3>
                    {/* experience & education wrapper */}
                    <div className='grid md:grid-cols-2 gap-y-8'>
                      {/* experience */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <Briefcase />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, 'experience').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'experience').data.map(
                            (item, index) => {
                              const { company, role, years } = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {company}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {role}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                      {/* education */}
                      <div className='flex flex-col gap-y-6'>
                        <div className='flex gap-x-4 items-center text-[22px] text-primary'>
                          <GraduationCap size={28} />
                          <h4 className='capitalize font-medium'>
                            {getData(qualificationData, 'education').title}
                          </h4>
                        </div>
                        {/* list */}
                        <div className='flex flex-col gap-y-8'>
                          {getData(qualificationData, 'education').data.map(
                            (item, index) => {
                              const { university, qualification, years } = item;
                              return (
                                <div className='flex gap-x-8 group' key={index}>
                                  <div className='h-[84px] w-[1px] bg-border relative ml-2'>
                                    <div className='w-[11px] h-[11px] rounded-full bg-primary absolute -left-[5px] group-hover:translate-y-[84px] transition-all duration-500'></div>
                                  </div>
                                  <div>
                                    <div className='font-semibold text-xl leading-none mb-2'>
                                      {university}
                                    </div>
                                    <div className='text-lg leading-none text-muted-foreground mb-4'>
                                      {qualification}
                                    </div>
                                    <div className='text-base font-medium'>
                                      {years}
                                    </div>
                                  </div>
                                </div>
                              );
                            }
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                {/* skills */}
                <TabsContent value='skills'>
                <div className='text-center xl:text-left'>
                    <h3 className='h3 mb-8'>What I Use Everyday</h3>
                    {/* skills */}
                    <div className='mb-16'>
                    <h4 className='text-xl font-semibold mb-2'>Skills</h4>
                    <div className='border-b border-border mb-4'></div>
                    {/* skill list */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
                        {getData(skillData, 'skills').data.map((item, index) => {
                        const { name } = item;
                        return (
                            <div className='flex items-center' key={index}>
                            <span className='text-primary mr-2'>
                            </span>
                            <div>{name}</div>
                            </div>
                        );
                        })}
                    </div>
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
