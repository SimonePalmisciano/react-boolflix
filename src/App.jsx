import { BrowserRouter, Route, Routes } from "react-router";
import MainLayout from "./layouts/MainLayout";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";
import { MovieProvider } from "./contexts/MovieContext"

function App() {
  return (
    <>
      <BrowserRouter>
        <MovieProvider>
          <Routes>

            <Route Component={MainLayout}>
              <Route index element={<HomePage />} />
            </Route>
            <Route path="*" Component={NotFound} />

          </Routes>
        </MovieProvider>
      </BrowserRouter>
    </>
  )
}
export default App;
