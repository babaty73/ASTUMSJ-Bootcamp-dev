import { useState } from "react";

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
    <div className="App">
      <h1>Color Palette Picker</h1>
      <div className="color-options">
        {colors.map((color) => (
          <button
            key={color}
            className={`color-button ${selectedColor === color ? "selected" : ""}`}
            style={{ backgroundColor: color.toLowerCase() }}
            onClick={() => setSelectedColor(color)}
          >
            {color}
          </button>
        ))}
      </div>
      <div className="selected-color">
        {selectedColor && (
          <p>
            Selected Color: <span style={{ color: selectedColor.toLowerCase() }}>{selectedColor}</span>
          </p>
        )}
      </div>
    </div>
  );
}

export default App;