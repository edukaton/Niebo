import Preact from 'preact'
import { Link } from 'react-router-dom'

const CourseLink = ({ id, name, onClick }) => (
  <Link to={`/course/${id}`}>
    <div onClick={onClick}>{name}</div>
  </Link>
)

export default CourseLink
