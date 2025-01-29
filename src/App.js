import "./App.css";
import Header from "./components/Header";
import { Routes } from "react-router";

function App() {
  return (
    <div className="flex w-full h-full">
      <Header />

      <main>
        <Routes>
        </Routes>
      </main>

    </div>
  );
}

export default App;
