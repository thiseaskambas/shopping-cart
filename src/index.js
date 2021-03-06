import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { store } from "./store/store";
import "./index.css";
import App from "./App";
import Shop from "./pages/shop";
import NotFound from "./pages/notfound/";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/shopping-cart" element={<App />} />
        <Route path="/shopping-cart/shop" element={<Shop />} />
        <Route path="/shopping-cart/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </Provider>
);
