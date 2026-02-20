=======================================
EFREI Paris - Site du Département Informatique
=======================================

Auteurs :
---------
- Hugo Panawala  (HTML et structure)
- Karine Queiros (CSS et mise en forme)
- Vladlen Paduraru (JavaScript et interactivité)

Contexte :
----------
Site web statique réalisé dans le cadre du cours XTI205.
Il présente le département informatique de l'EFREI Paris avec ses formations,
son équipe enseignante, un agenda de permanences et une page de contact.

Structure du projet :
---------------------
/
|-- index.html                 # Page d'accueil
|-- cours-formations.html      # Liste des formations et cours
|-- equipe-enseignante.html    # Présentation de l'équipe pédagogique
|-- agenda-permanences.html    # Agenda des permanences avec formulaire de recherche
|-- contact-apropos.html       # Page de contact et mentions "À propos"
|-- css/
|   |-- style.css              # Styles principaux (desktop)
|   |-- mobile.css             # Règles responsives (mobile/tablette)
|-- js/
|   |-- script.js              # Fonctions JavaScript (validation, recherche)
|-- images/                    # Dossier contenant les images du site
    |-- logo_efrei_assas_white.png
    |-- groupeetudiants-1623x1080.png
    |-- lab.png
    |-- parters.png

Fonctionnalités :
-----------------
- Navigation commune sur toutes les pages (header/footer)
- Design responsive adapté aux mobiles, tablettes et desktop
- Tableaux stylisés pour les formations et permanences
- Formulaire de recherche de permanence avec JavaScript
- Formulaire de contact avec validation des champs et message de confirmation
- Mise en page "colonnes avec images" sur l'accueil

Technologies utilisées :
------------------------
- HTML5
- CSS3 (avec media queries)
- JavaScript (validation, affichage dynamique)

Comment visualiser le site :
-----------------------------
1. Téléchargez l'ensemble des fichiers et dossiers.
2. Ouvrez le fichier `index.html` dans un navigateur web.
3. Aucun serveur n'est nécessaire (site statique).

Remarques :
-----------
- Les actions des formulaires pointent vers `#` (pas de traitement back-end).
- Les images sont présentes dans le dossier `images/` (à conserver).
- Le fichier `mobile.css` est chargé en complément de `style.css`.

Contact :
---------
Page dédiée : `contact-apropos.html`