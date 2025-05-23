import ReadMoreIcon from '../../../shared/assets/svg/Read-More.svg?react';
import './ProjectCard.scss';

type ProjectCardProps = {
  title: string;
  number: string;
  description: string;
  image: string;
  right: boolean;
};

export const ProjectCard = ({ title, number, description, image, right }: ProjectCardProps) => {
  return (
    <article className={`project-card ${right ? 'project-card-right' : ''}`}>
      <img src={image} alt={title} className="project-card__image" />
      <section className="project-card__content">
        <p className="project-card__content-number display-text">{number}</p>
        <p className="project-card__content-title h2">{title}</p>
        <p className="project-card__content-description">{description}</p>
        <button
          type="button"
          className="project-card__content-read-more-btn"
          aria-label={`Читать больше о проекте ${title}`}
        >
          <ReadMoreIcon className="project-card__content-read-more" />
        </button>
      </section>
    </article>
  );
};
