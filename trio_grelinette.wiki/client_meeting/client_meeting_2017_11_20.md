*Martin Petit - Rapport de l'entrevue du 20 novembre 2017*

# Le trio de la grelinette
## Processus métier actuel
* Un mail est envoyé deux fois par semaines (juste avant les deux jours de récoltes respectifs) à environ 400 personnes faisant partie de la mailing list. Ce mail contient le lien vers un "Google form" permettant au client de commander ses légumes, ainis que le lien vers une "Google Sheet" en lecture seule qu'il peut consulter une fois la commande réalisée afin de s'assurer que sa commande est passée. Le client peut commander jusqu'à 10h le jour de la récolte (mercredi et vendredi). 
* Sur le champ, les récoltes sont faites entre 9h et 12h le mercredi et le vendredi en fonction des commandes qui se trouve sur la "Google Sheet" partagée.
* Le mercredi les commandes sont livrées à un point de dépot sur Louvain-La-Neuve (le magasin Oxfam) ou le client peut aller chercher sa commande et récupérer un ticket qui lui indique combien il doit payer par virement. Le vendredi la commande est à aller chercher "sur le champ" à beaurieux. Le paiement se fait alors en cash ou, sur demande du client, par virement par après.
* Il est aussi possible de ne pas faire de commande et d'aller acheter des légumes le vendredi en fonction des stocks restants. 
* Il est possible de venir aider bénévolement le trio sur le champ pour réaliser certains travaux.

### Clients
* entre 400 et 500 personnes sur la newsLetter
* 40 à 50 clients par semaines (ces chiffres sont des estimations)
    * 10 commandes le mercredi
    * 20 commandes le vendredi
    * 10 personnes sans commandes
* le profil type du client est une personne au dessus de 25 ans, faisant partie de la classe moyenne (j'attends des infos plus précises vu que des formulaires ont été remplis par les clients sur l'année passée)
* ponctuellement en relation avec des GAC (Groupes d'Achats Commun) et des magasins pour des plus grosses commandes.
* on constate une forte relation de confiance envers le client (le client vient chercher sa commande sans trop de controle d'identité, le paiement se fait après, ...).


## Problèmes/besoins/envies

* La production de légumes est dépendante de facteurs externes parfois capricieux (le temps atmosphérique) et la production est "instable" dans le sens où elle est dépendante des saisons (on ne fait pas pousser tout, n'importe quand). Ceci rend l'offre et la demande relativement instable. De plus, il est nécessaire de faire 2 jours de ventes par semaine pour pouvoir écouler, pour écouler la production qui risque de trop maturer et pour vendre des produits frais. <br>
Ces deux contraintes obligent à avoir une gestion de stock hyper dynamique et souple, ce qui est pour l'instant gérer en changeant 2 fois par semaine les produits disponibles dans le "Google form" envoyé.

* au niveau du mailing, la liste des newsletter est géré avec une simple liste de contact dans Gmail. Ceci empêche d'envoyer certaines choses à toutes cette listes en même temps (le formulaire est envoyé sous forme de liens), car cela passerait pour du spam. La gestion de qui veut rester dans cette liste et qui veut en partir est très fastidieuse car cela ce fait au cas par cas par demande active du client. <br>
A terme, ils aimeraient pouvoir gérer facilement un mail "automatisé" et régulier qui rappelerait aux gens de commander chaque semaine et un moyen facil et efficace pour envoyer des mails plus élaborés et plus ponctuels à leurs clients.

* la plupart des outils qu'ils utilisent doivent être utilisable facilement et efficacement sur mobile notamment du au fait qu'ils sont souvent sur le champ ou en itinérance.

* au niveau paiement, c'est assez lourd pour l'instant pour le trio d'aller vérifier en permanence tous les virements pour être sur que tout le monde a payer. Le problème est aussi que le prix du panier n'est déterminé qu'à la récolte à cause de certains légumes dont le prix dépend du poids (ex: potiron).

* Le seul point d'ancrage en ligne du trio se trouve pour l'instant sur Facebook, cela ne colle pas à leur philosophie, ils aimeraient devenir indépendant de grosses structures comme Google et Facebook.

* La gestion des bénévoles voulant venir aider au champ se fait aussi sur base d'une mailing list et ils voudraient simplifier et clarifier le processus pour qu'il soit plus facile de voir sur quoi il est possible de venir aider et comment les contacter.

* Le trio a aussi comme philosophie d'éduquer/sensibiliser autour de leur projet, pour ça il aimerait proposer et partager du contenu en lien avec leur activités.
    * actus du projet
    * articles sur l'agriculture
    * recettes
    * ...

## Idées évoquées
* enregistrer le client sur le site de manière à : 
    * le fidéliser
    * avoir son @ mail et gérer ça plus facilement qu'à travers gmail
    * faciliter la commande en 2-3 clics pour les clients réguliers
    * utiliser un système de *soldes* qui serait débiter automatiquement et à remplir régulièrement
    * **attention** ne pas perdre de vue les clients ponctuels.
* imaginer proposer des fourchettes de prix pour les légumes ce vendant au poids afin de pouvoir donner le prix du panier au moment de la commande.
## Traduction en besoin fonctionelle
* Un hébergement web
    * un outil de commande (lien avec une DB)
    * du contenu statique
* Un outil "mobile first" pour gérer les stocks (lien avec une DB)
* Un moyen de gérer les mails/newsletter efficacement et dans le respect du client.

## Attentes / exigences client
* La production va probablement être mise entre parenthèse du à l'hiver. La saison reprendrait vers mars et l'idéal serait d'avoir un produit de commande fonctionnel d'ici la. 
* Besoin d'évolutivité, le produit n'est pas obligé d'intégrer tout dès le départ mais il doit être possible de grandir et de greffer des choses dans le futur.

## Attentes personelles
* J'aimerais travailler sur l'accessibilité et l'éco-conception web sur lesquels nous avons été sensibiliser cette année. Deux notions que le client à accueilli avec enthousiasme car rejoignant leur philosophie.
* J'aimerais aussi porter un oeil attentif au recommandation du [RGPD](http://eur-lex.europa.eu/legal-content/FR/TXT/?uri=CELEX%3A32016R0679), ce à quoi le client déjà légèrement informé à montrer un intérèt aussi.
* De par ma formation de graphisme, j'aimerais réaliser un design "from scratch", seulement je me rends bien compte du temps d'intégration que cela demande en plus.

## Questionnement
* Jusqu'où le travail doit être défini avec le client, au niveau des fonctionnalitées ? de la finition ? à quoi sommes-nous tenus ? 
* Combien de temps est-on censé investir dasn ce projet ? 
* A quel point dois-je influer sur le processus métier ? => faire de la "Business Analyses" ?
* Quels sont les prochain retour que je dois faire dans le cadre du tfe ? (Quid défense technique en janvier ? )

## Prochain retour client
* Proposition de prix quant aux différentes solutions d'hébergement
* Lui demander d'approuver le compte rendu fait ici par rapport à notre réunion (voir si j'aurais mal compris/oublier certaines choses).
* Définir clairement les fonctionnalités qui seront implémentées dans le cadre de ce tfe ainsi qu'une proposition de prioritisation des choses à faire. (sous forme de user-stories ? de use-case diagramm ? )

