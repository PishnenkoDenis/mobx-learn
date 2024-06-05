import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { configure, spy } from "mobx";

//configure - ф-ия для переопределения конф-ии mobx
//reactionScheduler - переопределение планировщика реакций для задержки реакции
//пока все синхронные изменения не вып-ся(батчинг изменений, затем вып-ие реакции)
// setTimeout(() => {
//   configure({
//     reactionScheduler: (f) => {
//       console.log("reaction");
//       setTimeout(f);
//     },
//   });
// });

//spy() - исп-ся для дебагинга mobx стора
//event - объект события mobx. Имеет св-ва name, type и пр.
spy((event) => {
  if (event.type === "action") console.log(event);
});

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
