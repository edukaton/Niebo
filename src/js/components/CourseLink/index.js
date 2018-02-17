import Preact from 'preact'
import { Link } from 'react-router-dom'

const CourseLink = ({id, name, onClick}) => (
  <Link to={`/course/${id}`} onClick={onClick}>
    <div>{name}</div>
  </Link>
);

export default CourseLink;
