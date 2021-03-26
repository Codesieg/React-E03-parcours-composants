/*
 * Exo 2 : React !
 *
 * C'est parti avec React :D !!!
 *
 * 1) Installer les packages react et react-dom
 *
 * 2) Créer un composant HelloWorld, en créant une fonction HelloWorld()
 *    qui renvoie le JSX suivant :
 *
 *      <div id="hello-world">
 *        <h1>Ce HTML a été généré par React</h1>
 *        <h2>Et affiché avec ReactDOM</h2>
 *      </div>
 *
 * 3) Importer la fonction render du module 'react-dom'
 *
 * 4) Exécuter la fonction render() pour afficher
 *    <HelloWorld /> dans la div #root
 * 
 * 5) Rajouter un fichier .css pour venir centrer
 *    le texte de #hello-world
 */

/*
 * Npm import
 */
// on importe la fonction render 
// depuis la bibliothèque react-dom
import { render } from 'react-dom';

/*
 * Local import
 */
// on importe notre composant HelloWorld
// défini dans le module HelloWorld
import HelloWorld from './HelloWorld';

import test from './test';

/*
 * Code
 */

// on peut ainsi se servir de la fonction render (importée précédemment)
// pour faire en sorte que notre composant soit rendu dans le navigateur
render(
  HelloWorld(), // composant à rendre
  document.getElementById('root'), // élément du DOM dans lequel rendre le composant
);

/*
 * Tests
 */
test();
