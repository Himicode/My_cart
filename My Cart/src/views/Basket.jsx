import BasketRow from "./BasketRow";

export default function Basket({ basket }) {
  if (!basket.rows.length) return <div className="basket empty">Basket is empty</div>;
  return (
    <div className="basket">
      <h3>Your Basket</h3>
      {basket.rows.map(r => <BasketRow key={r.id} row={r} basket={basket} />)}
      <div className="total">
        <p>Items: {basket.count}</p>
        <p>Amount: ${basket.cost.toFixed(2)}</p>
      </div>
    </div>
  );
}