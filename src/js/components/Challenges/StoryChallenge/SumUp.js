import Preact from 'preact'
import './sum-up.sass'

const SumUp = () => (
  <div className="story-challenge--sum-up">
    <div className="story-challenge--stats">
    76% użytkowników zmieniło zdanie. Dlaczego ?
    </div>
    <div>
    Mamy tendencję do wydawania opinii na podstawie <strong>pierwszych wrażeń</strong> i <strong>niekompletnych informacji.</strong>{' '}Na tym bazują fake newsy.
    Te same informacje z większym kontekstem mogą zmienić postać rzeczy.
      <p>
    Bardzo dużo zależy od pełnego kontekstu, dlatego warto zadawać pytania,
    pogłębiać wiedzę na dany temat czy szukać alternatywnego źródła informacji.
      </p>
    </div>
  </div>
)

export default SumUp