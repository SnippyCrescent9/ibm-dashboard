import {useState} from "react";

function App() {
  useEffect(() => {
    fetch("http://localhost:5000/")
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);

  return <div>IBM Dashboard</div>;
}

export default App;