# BoutiqueDeDroit-AJS

### Installation

1- Cloner le projet sur votre local

2- Exécuter la commande suivante pour installer toutes les dépendances: **npm install**

3- Exécuter la commande suivante pour déployer : **npm start**

4- Visiter *localhost:3000*

5- Voila :thumbsup:

### Minification du bundle.js

On peut minifier le fichier bundle.js si l'environnement est la production. Pour cela, il faut:

1- Setter l'environnement en PROD à partir de la CLI: 

**export NODE_ENV=PROD** (si CLI Linux) 

ou

**SET \\"NODE_ENV=PROD\\"** (si CLI Windows)

2- Exécuter la commande: webpack (vérifier que le fichier bundle.js est minifié)

3- Exécuter la commande node server.js pour démarrer le serveur
