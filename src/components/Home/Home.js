import React, { useState } from "react";
import Questions from "../Quiz/Questions";
import quizData from "../../StaticData/Data";

function Home() {
  const [question, setQuestion] = useState(quizData);
  return (
    <main>
      <div className="container">
        <h3>
          Techieeee <br /> Quiz App
        </h3>
        <section>
          {question.map((value) => {
            return <Questions key={value.id} {...value} />;
          })}
        </section>
      </div>
    </main>
  );
}

export default Home;
