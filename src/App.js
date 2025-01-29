import "./App.css";
import Header from "./components/Header";
import { Route, Routes } from "react-router";
import HomePage from "./components/HomePage";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="inline w-full h-full">
        <Header />

        <main className="flex flex-col w-full md:w-1/2 h-auto ml-auto mr-auto mb-16 p-16 items-center">
        <Routes>
            <Route exact path="/" element={<HomePage/>} />
        </Routes>
        </main>

        <Footer />
    </div>
  );
}

export default App;
