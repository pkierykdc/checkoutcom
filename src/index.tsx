import React from "react";
import ReactDOM from "react-dom";
import {
  QueryClient,
  QueryClientProvider
} from "react-query";
import { Normalize } from "styled-normalize";
import "./index.css";
import App from "./App/App";
import data from "./data.json";
import reportWebVitals from "./reportWebVitals";
import { QueryKeys } from "./services/queryKeys";

export const queryClient = new QueryClient();

// INFO: initialize app with data if no data found in local storage
if (!localStorage.getItem(QueryKeys.REVIEWS)) {
  localStorage.setItem(QueryKeys.REVIEWS, JSON.stringify(data.comments));
}

ReactDOM.render(
  <React.StrictMode>
    <Normalize />
    <QueryClientProvider client={queryClient}>  
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("root") || document.createElement("div") // for testing purposes
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
