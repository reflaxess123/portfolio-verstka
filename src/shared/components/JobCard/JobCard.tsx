import './JobCard.scss';

interface JobCardProps {
  title: string;
  time: string;
  description: string;
  svg: React.ReactNode;
  flat?: boolean;
}

export const JobCard = ({ title, time, description, svg, flat }: JobCardProps) => {
  return (
    <div className={`job-card${flat ? ' job-card-flat' : ''}`}>
      <div className="job-card__header">
        <div className="job-card__header-title">
          <div className="job-card__header-title-svg">{svg}</div>
          <div className="job-card__header-title-text">{title}</div>
        </div>
        <div className="job-card__header-time">{time}</div>
      </div>
      <div className={`job-card__description p2`}>{description}</div>
    </div>
  );
};
