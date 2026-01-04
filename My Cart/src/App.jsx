import { useEffect, useMemo, useState } from "react";
import Catalog from "./views/Catalog";
import Basket from "./views/Basket";
import Toolbar from "./views/Toolbar";
import { useBasket } from "./state/useBasket";

export default function App() {
  const [inventory, setInventory] = useState([]);
  const [query, setQuery] = useState("");
  const [group, setGroup] = useState("");
  const [order, setOrder] = useState("");

  const basket = useBasket();

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(r => r.json())
      .then(list => {
        setInventory(list.map(p => ({ ...p, stock: Math.floor(Math.random() * 7) + 1 })));
      });
  }, []);

  const visible = useMemo(() => {
    let data = [...inventory];
    if (query) data = data.filter(p => p.title.toLowerCase().includes(query.toLowerCase()));
    if (group) data = data.filter(p => p.category === group);
    if (order === "asc") data.sort((a, b) => a.price - b.price);
    if (order === "desc") data.sort((a, b) => b.price - a.price);
    return data;
  }, [inventory, query, group, order]);

  return (
    <div className="app-shell">
      <aside><Basket basket={basket} /></aside>
      <main>
        <header className="brand">My Cart</header>
        <Toolbar items={inventory} query={query} setQuery={setQuery} group={group} setGroup={setGroup} order={order} setOrder={setOrder} />
        <Catalog list={visible} add={basket.add} />
      </main>
    </div>
  );
}