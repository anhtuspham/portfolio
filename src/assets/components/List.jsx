import { Children } from "react";

function List({ title, children }) {
  return (
    <div className="mb-2">
      <h2 className="uppercase mb-1">{title}</h2>
      <ul>
        {Children.map(children, (child) => (
          <li className="text-slate-500 ml-8 list-[circle]">{child}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
