import Preact from 'preact'

const MainContainer = ({
  threadComplete
}) => (
  <div className="container">
    <div className="headers-container" id="headersContainer">
      <h4>{!threadComplete ? 'Usuń fragment komentarza obrażający odbiorcę.' : 'Gratulacje!'}</h4>
    </div>
  </div>
)

export default MainContainer
