import Preact from 'preact'
import './index.sass'

const Button = ({ onClick, children, disabled }) => (
  <div className="btn-container">
    <button onClick={onClick} disabled={disabled}>{ children }</button>
  </div>
);


export default Button;
