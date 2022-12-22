import { Route, Routes } from "react-router-dom";
import { ErrorPage } from "./error-page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<div>Home</div>}></Route>
      <Route path="/about" element={<div>about</div>}></Route>
      <Route path="/books" element={<div>books</div>}></Route>
      <Route path="*" element={<ErrorPage />}></Route>
    </Routes>
  );
}

export default App;
