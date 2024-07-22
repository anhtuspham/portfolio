import { Children } from "react";

function List({ title, children }) {
  return (
    <div className="mb-2">
      <h2 className="capitalize font-bold mb-1">{title}</h2>
      <ul>
        {Children.map(children, (child) => (
          <li className="text-slate-600 ml-8 list-[circle]">{child}</li>
        ))}
      </ul>
    </div>
  );
}

export default List;
