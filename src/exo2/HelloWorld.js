// on importe React
import React from 'react';

// on importe notre fichier css
// celui ci permet la mise en forme de notre composant
import './hello-world.css';

// On définit notre composant
// Un composant est une fonction qui retourne
// une partie de l'interface utilisateur.
const HelloWorld = () => (
  <div id="hello-world">
    <h1>Ce HTML a été généré par React</h1>
    <h2>Et affiché avec ReactDOM</h2>
  </div>
);

// on veut rendre disponible notre composant
// au reste de monde, on doit donc l'exporter.
// Ici, on utilise un export par défaut, c'est bien 
// l'élément principal de notre module (c'est le seul, facile...)
export default HelloWorld;
