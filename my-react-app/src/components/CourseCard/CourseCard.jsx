import './CourseCard.css';

function CourseCard({ title, instructor, schedule, weeks, enrolled, onEnroll }) {
  return (
    <div className="course-card">
      <h3 className="course-title">{title}</h3>

      <div className="course-details">
        <div className="instructor">
          <span className="instructor-label">Pr.</span>
          <span className="instructor-name">{instructor}</span>
        </div>

        <div className="schedule">
          <span className="schedule-days">{schedule.days}</span>
          <span className="schedule-time">{schedule.time}</span>
        </div>

        <div className="duration">
          <span className="duration-label">{weeks} Weeks</span>
        </div>
      </div>

      <button
        className={`enroll-btn ${enrolled ? 'pending' : ''}`}
        onClick={onEnroll}
        disabled={enrolled}
      >
        {enrolled ? 'Pending' : 'Enroll Now'}
      </button>
    </div>
  );
}

export default CourseCard;