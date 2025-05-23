import AppleIcon from '../../shared/assets/svg/apple.svg?react';
import GoogleIcon from '../../shared/assets/svg/google.svg?react';
import YoutubeIcon from '../../shared/assets/svg/youtube.svg?react';
import { JobCard } from '../../shared/components/JobCard';
import './ExperienceSection.scss';

export const ExperienceSection = () => {
  const jobs = [
    {
      title: 'Lead Software Engineer at Google',
      time: 'Nov 2019 - Present',
      svg: <GoogleIcon />,
      flat: false,
      description:
        "As a Senior Software Engineer at Google, I played a pivotal role in developing innovative solutions for Google's core search algorithms. Collaborating with a dynamic team of engineers, I contributed to the enhancement of search accuracy and efficiency, optimizing user experiences for millions of users worldwide",
    },
    {
      title: 'Software Engineer at Youtube',
      time: 'Jan 2017 - Oct 2019',
      svg: <YoutubeIcon />,
      flat: true,
      description:
        "At Youtube, I served as a  Software Engineer, focusing on the design and implementation of backend systems for the social media giant's dynamic platform. Working on projects that involved large-scale data processing and user engagement features, I leveraged my expertise to ensure seamless functionality and scalability.",
    },
    {
      title: 'Junior Software Engineer at Apple',
      time: 'Jan 2016 - Dec 2017',
      svg: <AppleIcon />,
      flat: false,
      description:
        'During my tenure at Apple, I held the role of Software Architect, where I played a key role in shaping the architecture of mission-critical software projects. Responsible for designing scalable and efficient systems, I provided technical leadership to a cross-functional team.',
    },
  ];

  return (
    <section className="experience-section-wrapper-bg">
      <div className="container">
        <article className="experience-section">
          <header className="experience-section__titles">
            <p className="experience-section__titles-title1 display-text">My</p>
            <p className="experience-section__titles-title2 display-text">Experience</p>
          </header>
          <section className="experience-section__blocks">
            {jobs.map((job) => (
              <JobCard
                key={job.title}
                svg={job.svg}
                title={job.title}
                time={job.time}
                description={job.description}
                flat={job.flat}
              />
            ))}
          </section>
        </article>
      </div>
    </section>
  );
};
