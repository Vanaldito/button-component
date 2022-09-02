import Button from "./components/button";

import "./App.css";

export default function App() {
  return (
    <main>
      <div className="buttons">
        <Button disabled>Default</Button>
        <Button disabled color="primary">
          Primary
        </Button>
        <Button disabled color="secondary">
          Secondary
        </Button>
        <Button disabled color="danger">
          Danger
        </Button>
      </div>
    </main>
  );
}
