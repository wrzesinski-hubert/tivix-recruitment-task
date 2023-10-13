import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ChoosingPage from "./pages/ChoosingPage/ChoosingPage";
import TitlePage from "./pages/TitlePage/TitlePage";
import ShippingPage from "./pages/ShippingPage/ShippingPage";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TitlePage />} />
          <Route path="choosing" element={<ChoosingPage />} />
          <Route path="shipping" element={<ShippingPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
