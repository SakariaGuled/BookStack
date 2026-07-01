import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import BookDetailPage from "./pages/Bookdetailpage";

function App() {
  return (
    <BrowserRouter>
      <div className="relative min-h-screen">
        <div className="blob-1" />
        <div className="blob-2" />
        <div className="blob-3" />

        <div className="relative z-10">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route
              path="/Bookdetailpage/:title/:id"
              element={<BookDetailPage />}
            />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
