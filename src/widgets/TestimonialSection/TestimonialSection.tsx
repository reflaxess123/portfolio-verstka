import { TestimonialCard } from '../../shared/components/TestimonialCard';
import './TestimonialSection.scss';

export const TestimonialSection = () => {
  const testimonials = [
    {
      text: 'I recently had to jump on 10+ different calls across eight different countries to find the right owner.',
      title: 'Evren Shah',
      subtitle: 'Designer',
      avatar: './avatar1.png',
      black: false,
    },
    {
      text: 'I recently had to jump on 10+ different calls across eight different countries to find the right owner.',
      title: 'Flora sheen',
      subtitle: 'Developer',
      avatar: './avatar2.png',
      black: true,
    },
    {
      text: 'I recently had to jump on 10+ different calls across eight different countries to find the right owner.',
      title: 'Evren Shah',
      subtitle: 'Designer',
      avatar: './avatar1.png',
      black: false,
    },
  ];
  return (
    <div className="container">
      <article className="testimonial-section">
        <header className="testimonial-section__header">
          <p className="testimonial-section__header-title1 display-text">My</p>
          <p className="testimonial-section__header-title2 display-text">Testimonials</p>
        </header>
        <section className="testimonial-section__cards">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.title} {...testimonial} />
          ))}
        </section>
      </article>
    </div>
  );
};
