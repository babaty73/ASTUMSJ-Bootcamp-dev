import { useState } from "react";
import ColorButton from "./components/ColorButton";
import ColorPreview from "./components/ColorPreview";
import Card from "./components/Card";
import "./index.css";

function App() {
  const colors = [
    "Red",
    "Blue",
    "Green",
    "Yellow",
    "Purple",
    "Orange",
    "Pink",
    "Black",
  ];

  const [selectedColor, setSelectedColor] = useState("");

  return (
    <div className="app">
      <Card>
        <h1>🎨 Color Palette Picker</h1>

        <div className="button-container">
          {colors.map((color) => (
            <ColorButton
              key={color}
              color={color}
              isSelected={selectedColor === color}
              onClick={() => setSelectedColor(color)}
            />
          ))}
        </div>

        {selectedColor ? (
          <ColorPreview color={selectedColor} />
        ) : (
          <p className="placeholder">No color selected yet.</p>
        )}

        <button
          className="reset-btn"
          onClick={() => setSelectedColor("")}
        >
          Reset
        </button>
      </Card>
    </div>
  );
}

export default App;