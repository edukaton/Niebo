import Preact from 'preact'
import { Link } from 'react-router-dom'
import './index.sass'

const CourseLink = ({ id, name, onClick }) => (
  <Link className="course-link"to={`/course/${id}`}>
    <div className="course-link--cover" onClick={onClick}>{name}</div>
  </Link>
)

export default CourseLink
