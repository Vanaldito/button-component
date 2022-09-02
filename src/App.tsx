import Button from "./components/button";

import "./App.css";

export default function App() {
  return (
    <main>
      <div className="buttons">
        <Button onClick={() => alert("Click")}>Click</Button>
      </div>
    </main>
  );
}
