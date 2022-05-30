import React, { useEffect, useState } from "react";
import Order from "../../Order/Order";
import Tool from "../Tool/Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch("https://cryptic-island-49666.herokuapp.com/tool")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return (
    <div id="tools" className="container">
      <div className="row">
        <h1 className="text-center text-3xl font-bold uppercase">Tools</h1>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 ">
          {tools.map((tool) => (
            <Tool key={tool._id} tool={tool} setProducts={setProducts}></Tool>
          ))}
        </div>
        {products && (
          <Order products={products} setProducts={setProducts}></Order>
        )}
      </div>
    </div>
  );
};

export default Tools;
