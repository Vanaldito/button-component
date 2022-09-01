import Button from "./components/button";

import "./App.css";

export default function App() {
  return (
    <main>
      <div className="buttons">
        <Button variant="default">Default</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="text">Text</Button>
      </div>
    </main>
  );
}
