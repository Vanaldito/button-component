import Button from "./components/button";

import "./App.css";

export default function App() {
  return (
    <main>
      <div className="buttons">
        <Button>Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="danger">Danger</Button>
      </div>
    </main>
  );
}
