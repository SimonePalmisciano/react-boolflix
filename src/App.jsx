import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route index element={<HomePage />} />
          <Route path="*" Component={NotFound} />

        </Routes>
      </BrowserRouter>
    </>
  )
}
export default App;
