import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OrderForm from "./pages/OrderForm";
import OrderConfirmation from "./pages/OrderConfirmation";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  const [orderResponse, setOrderResponse] = useState(null);

  return (
    <div className="min-h-screen flex flex-col">
      {}
      {}
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/pizza"
            element={<OrderForm setOrderResponse={setOrderResponse} />}
          />
          <Route
            path="/success"
            element={<OrderConfirmation orderData={orderResponse} />}
          />
        </Routes>
      </main>
      {}
      <Footer />
    </div>
  );
}

export default App;
