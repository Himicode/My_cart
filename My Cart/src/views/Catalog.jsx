import ItemCard from "./ItemCard";
import { memo } from "react";

function Catalog({ list, add }) {
  if (!list.length) return <div className="hint">Nothing found</div>;
  return <section className="catalog">{list.map(p => <ItemCard key={p.id} data={p} add={add} />)}</section>;
}

export default memo(Catalog);