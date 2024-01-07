import { GanttChartSquare, Blocks, Gem } from 'lucide-react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

const servicesData = [
  {
    icon: <GanttChartSquare size={60} strokeWidth={0.8} />,
    title: 'software developer',
    description:
      'Craft intricate and efficient software solutions by transforming ideas into functional applications. Collaborate across teams, write clean code',
  },
  {
    icon: <Blocks size={60} strokeWidth={0.8} />,
    title: 'Fullstack developer',
    description:
      'Navigate both frontend and backend realms, building engaging interfaces and robust server logic. Blend technical skills to orchestrate seamless interactions',
  },
  {
    icon: <Gem size={60} strokeWidth={0.8} />,
    title: 'Backend developer',
    description:
      'Architect and optimize server-side components, databases, and APIs. Ensure smooth functionality, data integrity, and robust security measures for seamless application operation.',
  },
];

const Services = () => {
  return (
    <section className='mb-12 xl:mb-36'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-12 xl:mb-24 text-center mx-auto'>
          What i do
        </h2>
        {/* grid items */}
        <div className='grid xl:grid-cols-3 justify-center gap-y-12 xl:gap-y-24 xl:gap-x-8'>
          {servicesData.map((item, index) => {
            return (
              <Card
                className='w-full max-w-[480px] h-[380px] flex flex-col pt-16 pb-10 justify-center items-center relative'
                key={index}
              >
                <CardHeader className='text-primary absolute -top-[20px]'>
                  <div className='w-[90px] h-[75px] bg-white dark:bg-background flex justify-center items-center'>
                    {item.icon}
                  </div>
                </CardHeader>
                <CardContent className='text-center'>
                  <CardTitle className='mb-3'>{item.title}</CardTitle>
                  <CardDescription className='text-lg'>
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
