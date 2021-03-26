/*
 * Exo 1 : Import/Export
 *
 * OK, on a commencé à découvrir des nouveautés ES6...
 * Il est temps de s'y mettre vraiment, et de maîtriser les modules !
 *
 * 1) Créer un fichier src/exo1/hello.js
 *
 * 2) Dans ce fichier, définir 3 fonctions (coucou, salut et hello),
 *    qui renvoient une chaine de caractère (respectivement 'coucou',
 *   'salut' et 'hello')
 *
 * 3) Exporter ces 3 fonctions, en faisant deux export nommés
 *    et un export par défaut
 *
 * 4) Importer ces 3 fonctions dans ce module (src/exo1/index.js)
 */

/*
 * Import
 */

// pour importer la fonction exportée grâce à un export par défaut
// on utilise la syntaxe suivante :
// import hello from './hello';

// il est possible de choisir le nom d'un élément exporter par défaut
// la ligne suivante marcherait tout aussi bien :
// import monHello from './hello';

// pour importer des éléments exportés de manière nommée, on utilise 
// la syntaxe suivante
// import {salut, coucou} from './hello';

// on a la possibilité de renommer les choses
// cf ligne suivante
// import {salut as monSalut} from './hello';

// on peut mélanger imports nommés et par défauts
// en une seule instruction
import hello, { salut, coucou } from './hello';

// on peut également importer tous les éléments exportés de manière
// nommée dans un objet avec la syntaxe suivante
// import hello, * as others from './hello';

import test from './test';

/*
 * Tests
 */
test(coucou, salut, hello);
