import Button from "./components/button";

import "./App.css";

export default function App() {
  return (
    <main>
      <div className="buttons">
        <Button
          startIcon="local_grocery_store"
          disabled={false}
          disableShadow={false}
          variant="outline"
        >
          StartIcon
        </Button>
        <Button
          endIcon="local_grocery_store"
          disabled={true}
          disableShadow={true}
          variant="outline"
        >
          EndIcon
        </Button>
      </div>
    </main>
  );
}
