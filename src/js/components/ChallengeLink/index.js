import Preact from 'preact'
import { Link } from 'react-router-dom'

const ChallengeLink = ({
  courseId, id, name, onClick
}) => (
  <Link to={`/course/${courseId}/challenge/${id}`}>
    <div onClick={onClick}>{name}</div>
  </Link>
)

export default ChallengeLink
