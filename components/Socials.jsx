'use client';

import {
  RiYoutubeFill,
  RiLinkedinFill,
  RiGithubFill,
  RiInstagramFill,
  RiMailAddFill
} from 'react-icons/ri';

import Link from 'next/link';

const icons = [
  {
    path: 'mailto:badoryousif.by@gmail.com',
    name: <RiMailAddFill />,
  },
  {
    path: 'https://www.linkedin.com/in/badreldin-fadul-821bb512b/',
    name: <RiLinkedinFill />,
  },
  {
    path: 'https://github.com/BadurFadul',
    name: <RiGithubFill />,
  },
];

const Socials = ({ containerStyles, iconsStyles }) => {
  return (
    <div className={`${containerStyles}`}>
      {icons.map((icon, index) => {
        return (
          <a href={icon.path} target="_blank" rel="noopener noreferrer" key={index}>
            <div className={`${iconsStyles}`}>{icon.name}</div>
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
