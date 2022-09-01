import Button from "./components/button";

import "./App.css";

export default function App() {
  return (
    <main>
      <div className="buttons">
        <Button disableShadow={false} variant="default">
          EnableShadow
        </Button>
        <Button disableShadow={true} variant="default">
          DisableShadow
        </Button>
      </div>
    </main>
  );
}
