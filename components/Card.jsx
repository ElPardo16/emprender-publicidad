import Button from "./Button";

export default function Card() {
  return (
    <div className="card">
      <h2>Ploter 100cm</h2>
      <div className="card_con">
        <p>$100.000</p>
        <Button type="cart" size={20}/>
      </div>
    </div>
  )
}