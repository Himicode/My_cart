export default function ItemCard({ data, add }) {
  const empty = data.stock === 0;
  return (
    <div className="tile">
      <img src={data.image} />
      <h4>{data.title}</h4>
      <span className="tag">${data.price}</span>
      <small>{data.category}</small>
      <div className={empty ? "zero" : "ok"}>{empty ? "Out of Stock" : `Available: ${data.stock}`}</div>
      <button disabled={empty} onClick={() => add(data)}>Add</button>
    </div>
  );
}