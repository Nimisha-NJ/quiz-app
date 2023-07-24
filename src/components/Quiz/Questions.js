import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function Questions({ title, info }) {
  const [details, setDetails] = useState(false);

  return (
    <article className="question">
      <header>
        <h4>{title}</h4>

        <button className="btn" onClick={() => setDetails(!details)}>
          {details ? <AiOutlineMinus /> : <AiOutlinePlus />}
        </button>
      </header>
      {details && <p>{info}</p>}
    </article>
  );
}

export default Questions;
