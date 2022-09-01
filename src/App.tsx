import Button from "./components/button";

import "./App.css";

export default function App() {
  return (
    <main>
      <div className="buttons">
        <Button startIcon="local_grocery_store">StartIcon</Button>
        <Button endIcon="local_grocery_store">EndIcon</Button>
      </div>
    </main>
  );
}
