# Pocket CV

:warning: Ce projet est utilisé comme CMS local et n'est pas compatible avec la collaboration au niveau de la base de données (SQLite).

Version en ligne : [Pocket CV](https://kevinganthy.github.io/pocketcv/)

## Utilisation locale

> Penser à créer le fichier `.env` à partir du fichier `.env.example`

Au choix :

* Avec **devcontainer**, démarrage automatique
* Avec **docker**, commande `docker compose up -d`

### Accès

* `localhost` : Front end
* `pb.localhost` : Pockebase

### Pockebase

* **EMAIL :** <kevin.ganthy@gmail.com>
* **PASSWORD :** motdepasse

## Going to production

Penser à faire un dump de la base de données avant de push.

````
docker compose exec pocketbase sqlite3 /pb/pb_data/data.db .dump > ./pocketbase/init.sql
````

Le pipeline Github Action est configuré pour déployer automatiquement la version SSG du front-end. Pour cela, il fait les étapes suivantes :

* Pocketbase
  * Création d'une image Docker avec les données versionnées
  * Uplaod de l'image sur le Docker Hub
* Build
  * Utilisation de l'image Docker comme service
  * Génération du site statique
  * Création d'un artefact
* Deploy
  * Utilisation de l'artefact pour déployer le site statique sur Github Pages

Le résultat est visible sur <https://kevinganthy.github.io/pocketcv/>.
