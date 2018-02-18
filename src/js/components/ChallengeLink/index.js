import Preact from 'preact'
import { Link } from 'react-router-dom'
import './index.sass'

const ChallengeLink = ({
  courseId, id, name, onClick
}) => (
  <Link className="challenge-link" to={`/course/${courseId}/challenge/${id}`}>
    <div className="challenge-link--cover" onClick={onClick}>{name}</div>
  </Link>
)

export default ChallengeLink
