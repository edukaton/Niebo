import Preact from 'preact'
import './index.sass'

const LandingPageWrapper = ({
  children
}) => (
  <div className="landing">
    <h1>Prawda To Wyzwanie</h1>
    <h2>Wybierz jeden z naszych kursów:</h2>
    <div className="landing--courses-container">
      {children}
    </div>
  </div>
)

export default LandingPageWrapper