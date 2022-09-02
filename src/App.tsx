import Button from "./components/button";

import "./App.css";

export default function App() {
  return (
    <main>
      <div className="buttons">
        <Button variant="outline" size="sm">
          Small
        </Button>
        <Button variant="outline">Medium</Button>
        <Button variant="outline" size="lg">
          Large
        </Button>
      </div>
    </main>
  );
}
