import { useState } from 'react';
import './App.css'
function App() {
  const [text, setText] = useState('');

  const handleInputChange = (event) => {
    setText(event.target.value);
  };

  return (
    <div>
      <h1>Character Counter</h1>
      <textarea
        value={text}
        onChange={handleInputChange}
        placeholder="Type something..."
        rows="5"
        cols="30"
      />
      <p>Character Count: {text.length}</p>
    </div>
  );
}

export default App;




