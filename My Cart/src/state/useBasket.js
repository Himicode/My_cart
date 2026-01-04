import { useEffect, useState } from "react";

export function useBasket() {
  const [rows, setRows] = useState(() => JSON.parse(localStorage.getItem("basket")) || []);

  useEffect(() => { localStorage.setItem("basket", JSON.stringify(rows)); }, [rows]);

  const add = item => {
    setRows(prev => {
      const found = prev.find(r => r.id === item.id);
      if (found) {
        if (found.qty < item.stock) return prev.map(r => r.id === item.id ? { ...r, qty: r.qty + 1 } : r);
        return prev;
      }
      return [...prev, { ...item, qty: 1 }];
    });
  };

  const drop = id => setRows(prev => prev.filter(r => r.id !== id));
  const change = (id, q) => setRows(prev => prev.map(r => r.id === id ? { ...r, qty: q } : r));

  const count = rows.reduce((s, r) => s + r.qty, 0);
  const cost = rows.reduce((s, r) => s + r.qty * r.price, 0);

  return { rows, add, drop, change, count, cost };
}