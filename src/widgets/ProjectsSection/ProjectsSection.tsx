import { ProjectCard } from '../../shared/components/ProjectCard';
import './ProjectsSection.scss';

export const ProjectsSection = () => {
  const projects = [
    {
      title: 'Crypto Screener Application',
      number: '01',
      description:
        "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
      image: './proj1.png',
      right: false,
    },
    {
      title: 'Euphoria - Ecommerce (Apparels) Website Template',
      number: '02',
      description:
        "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
      image: './proj2.png',
      right: true,
    },
    {
      title: 'Blog Website Template',
      number: '03',
      description:
        "I'm Evren Shah Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to specimen book.",
      image: './proj3.png',
      right: false,
    },
  ] as const;
  return (
    <section className="projects-section-wrapper-bg">
      <div className="container">
        <article className="projects-section">
          <header className="projects-section__header">
            <p className="projects-section__header-title1 display-text">My</p>
            <p className="projects-section__header-title2 display-text">Projects</p>
          </header>
          <section className="projects-section__cards">
            {projects.map((project) => (
              <ProjectCard key={project.title} {...project} />
            ))}
          </section>
        </article>
      </div>
    </section>
  );
};
