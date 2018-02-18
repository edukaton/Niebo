import Preact from 'preact'
import './index.sass'

const CourseWrapper = ({
  children
}) => (
  <div className="course-wrapper">
    <h1>Kurs podstawowy</h1>
    <h2>Wybierz wyzwanie dla siebie:</h2>
    <div className="course-wrapper--challenges-container">
      {children}
    </div>
  </div>
)

export default CourseWrapper
