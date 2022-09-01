import Button from "./components/button";

import "./App.css";

export default function App() {
  return (
    <main>
      <div className="buttons">
        <Button disabled={false} disableShadow={false} variant="outline">
          Enabled
        </Button>
        <Button disabled={true} disableShadow={true} variant="outline">
          Disabled
        </Button>
      </div>
    </main>
  );
}
