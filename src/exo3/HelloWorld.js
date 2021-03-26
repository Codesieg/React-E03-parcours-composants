// on importe React
import React from 'react';

// un composant est une fonction
// on peut récupérer en paramètres de notre fonction les
// informations permettant de le "configurer"
// le paramètre reçu est un objet. 
// en règle générale on va voir ici la décompostion
// de cet objet pour en extraire seulement les propriétés
// nécessaire au composant
const HelloWorld = ({ lang, method }) => (
  <div id="hello-world">
    <h1>Ce HTML a été généré par { lang }</h1>
    <h2>Et affiché avec { method }</h2>
  </div>
);

// on veut rendre disponible notre composant
// au reste de monde, on doit donc l'exporter.
// Ici, on utilise un export par défaut, c'est bien 
// l'élément principal de notre module (c'est le seul, facile...)
export default HelloWorld;
