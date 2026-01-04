export default function Toolbar({ items, query, setQuery, group, setGroup, order, setOrder }) {
  const groups = [...new Set(items.map(i => i.category))];
  return (
    <div className="toolbar">
      <input value={query} onChange={e => setQuery(e.target.value)} placeholder="Search" />
      <select value={group} onChange={e => setGroup(e.target.value)}><option value="">Category</option>{groups.map(g => <option key={g}>{g}</option>)}</select>
      <select value={order} onChange={e => setOrder(e.target.value)}><option value="">Sort</option><option value="asc">Low → High</option><option value="desc">High → Low</option></select>
      <button onClick={() => { setQuery(""); setGroup(""); setOrder(""); }}>Reset</button>
    </div>
  );
}