export default function BasketRow({ row, basket }) {
  return (
    <div className="line">
      <span>{row.title}</span>
      <input type="number" min="1" max={row.stock} value={row.qty} onChange={e => basket.change(row.id, +e.target.value)} />
      <button onClick={() => basket.drop(row.id)}>✕</button>
    </div>
  );
}