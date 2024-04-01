import { Route, Routes } from "react-router-dom";
import Nav from "./component/Nav";
import HomePage from "./pages/HomePage";
import News from "./pages/News";
import Footer from "./sections/Footer";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
  return (
    <main className="min-h-screen">
    <Nav />
    <Routes>
      <Route path="/" element={<HomePage/>}></Route>
      <Route path="/news" element={<News/>}></Route>
      <Route path="*" element={<PageNotFound />}></Route>
    </Routes>
    <Footer />
    </main>
  )
}