// exporter une fonction, une constante, un objet permet de le rendre
// disponible à l'extérieur (en dehors de ce fichier)

// on peut exporter au maximum un élément par défaut dans une module
// si on a besoin d'exporter plusieurs éléments, deux options :
// - l'élément principale par défaut et les autres en export nommé
// - tous les éléments en exports nommés.

// ici, on exporte les fonctions coucou et hello grâce à un export nommé
export const coucou = () => 'coucou';
export const salut = () => 'salut';

// ici, on exporte une fonction par défaut
export default () => 'hello';

// équivalent à :
// mais ici, le nom de la fonction importe peu
// en effet, lors d'un export par défaut, on perd le nom de l'élément exporté
/*
const  hello = () => 'hello';
export default hello;
*/
