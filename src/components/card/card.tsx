import "./card.css"

interface CardProps {
  number: number,
  status: number,
  cep: string,
  street: string,
  district: string,
  city: string,
  state: string
}

export function Card({ number, cep, street, district, city, state }: CardProps) {
  return (
    <div className="card">
      <div>{street}</div>
      <div>{number}</div>
      <div>{cep}</div>
      <div>{district}</div>
      <div>{city}</div>
      <div>{state}</div>
    </div>
  )
}

