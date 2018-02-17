import Preact from 'preact'
import './index.sass'

const Button = ({ onClick, children }) => (
  <div className="flex justify-end">
    <button onClick={onClick}>{ children }</button>
  </div>
);


export default Button;
