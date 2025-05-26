import { useState } from "react";

function Bouton() {
  const [message, setMessage] = useState("");

  const handleClick = () => {
    setMessage("Bouton cliqué !");
  };

  return (
    <div>
      <button onClick={handleClick}>Clique-moi</button>
      {message && <p>{message}</p>}
    </div>
  );
}

export default Bouton;
