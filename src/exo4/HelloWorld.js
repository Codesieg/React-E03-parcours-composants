// on importe React
import React from 'react';

// on peut récupérer dans la propriété children
// les enfants du composant
const HelloWorld = ({ lang, method, children }) => (
  <div id="hello-world">
    <h1>Ce HTML a été généré par { lang }</h1>
    <h2>Et affiché avec { method }</h2>
    { children }
  </div>
);

// on veut rendre disponible notre composant
// au reste de monde, on doit donc l'exporter.
// Ici, on utilise un export par défaut, c'est bien 
// l'élément principal de notre module (c'est le seul, facile...)
export default HelloWorld;
