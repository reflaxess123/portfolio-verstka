import './TestimonialCard.scss';

type TestimonialCardProps = {
  text: string;
  title: string;
  subtitle: string;
  avatar: string;
  black: boolean;
};

export const TestimonialCard = ({ text, title, subtitle, avatar, black }: TestimonialCardProps) => {
  return (
    <article className={`testimonial-card ${black ? 'testimonial-card-black' : ''}`}>
      <div className="testimonial-card__avatar-container">
        <img src={avatar} alt={title} className="testimonial-card__avatar" />
        <div className="testimonial-card__quote-icon">
          <span className="testimonial-card__quote-icon-text">”</span>
        </div>
      </div>
      <p className="testimonial-card__text button-text-2">{text}</p>
      <p className="testimonial-card__title h5">{title}</p>
      <p className="testimonial-card__subtitle h6">{subtitle}</p>
    </article>
  );
};
