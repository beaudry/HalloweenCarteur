import Carte from "../modeles/Carte";
import Categorie from "../modeles/Categorie";

const cartes: Carte[] = [
    { categorie: Categorie.chaos, cycle: "« Solidarité »", description: "Choisis deux joueurs. Ils pigent chacun un défi. Ceux qui échouent reculent de 2 cases.", titre: "Bouffons du roi" },
    { categorie: Categorie.chaos, cycle: "Bibi Party", description: "Jusqu'à ton prochain tour, les dés déplacent de la moitié du nombre de cases supposé, arrondi en haut.", titre: "Dé empoisonné" },
    { categorie: Categorie.defi, cycle: "Enquête", description: "Trouve quelqu'un qui a un chat chez lui.", titre: "Chat-rlatan" },
    { categorie: Categorie.defi, cycle: "Enquête", description: "Trouve quelqu'un qui a une imprimante 3D chez lui.", titre: "Bonne impression" },
    { categorie: Categorie.verite, cycle: "Halloween", description: "Qu'est-ce que la maison de riches donnait quand tu passais l'Halloween?", titre: "Butin" },
    { categorie: Categorie.verite, cycle: "Halloween", description: "Quel bonbon espérais-tu obtenir quand tu passais l'Halloween?", titre: "Désir" },

    { categorie: Categorie.qui, cycle: "Déplacements", description: "Avance d'une case.", titre: "Manque d'inspiration" },
    { categorie: Categorie.qui, cycle: "Déplacements", description: "Échange de place avec le joueur de ton choix.", titre: "Merci d'avoir gardé ma place" },
    { categorie: Categorie.qui, cycle: "Déplacements", description: "Échange de place avec le premier joueur.", titre: "Moi d'abord" },
    { categorie: Categorie.qui, cycle: "Déplacements", description: "Rejoue!", titre: "Encore!" },
    { categorie: Categorie.qui, cycle: "Déplacements", description: "Relance ton prochain dé jusqu'à ce que le résultat soit supérieur à 3.", titre: "Osselet chanceux" },
    { categorie: Categorie.qui, cycle: "Garde cette carte", description: "Utilise cette carte pour aller aux toilettes (les autres joueurs vont t'attendre).", titre: "Pause pipi" },
    { categorie: Categorie.qui, cycle: "Garde cette carte", description: "Utilise cette carte pour réussir gratuitement un défi qui t'es assigné.", titre: "Oui merci!" },
    { categorie: Categorie.qui, cycle: "Royauté", description: "Choisis un nom. Tous les joueurs doivent dorénavant t'appeler ainsi. Les contrevenants reculent d'une case.", titre: "Je s'appelle Groot" },
    { categorie: Categorie.qui, cycle: "Voleur", description: "Jusqu'à ton prochain tour, tu peux obliger quelqu'un à avancer ton pion plutôt que le sien.", titre: "Possession" },

    { categorie: Categorie.chaos, cycle: "Bibi Party", description: "Jusqu'à ton prochain tour, les lancers de dés font reculer les pions.", titre: "Brouillard" },
    { categorie: Categorie.chaos, cycle: "Garde cette carte", description: "Utilise cette carte pour doubler le défi de quelqu'un. La punition est aussi doublée.", titre: "Portions doubles" },
    { categorie: Categorie.chaos, cycle: "Garde cette carte", description: "Utilise cette carte pour faire piger un nouveau défi à quelqu'un.", titre: "Non merci!" },
    { categorie: Categorie.chaos, cycle: "Motus", description: "La prochaine personne qui dit le mot « peur » recule de trois cases.", titre: "Même pas peur!" },
    { categorie: Categorie.chaos, cycle: "Motus", description: "La prochaine personne qui dit le mot « toi » recule de trois cases.", titre: "I put a spell on you" },
    { categorie: Categorie.chaos, cycle: "Motus", description: "La prochaine personne qui rit recule de trois cases.", titre: "Mort de rire" },
    { categorie: Categorie.chaos, cycle: "Réorganisation", description: "Réorganisez les pions pour que les joueurs avec les récipients les plus pleins soient en avant.", titre: "Eau bénite" },
    { categorie: Categorie.chaos, cycle: "Réorganisation", description: "Réorganisez les pions pour que les joueurs avec les récipients les plus vides soient avant.", titre: "Bande d'ivrognes" },
    { categorie: Categorie.chaos, cycle: "Réorganisation", description: "Tous les joueurs se décalent d'une chaise vers la droite.", titre: "Monde parallèle" },
    { categorie: Categorie.chaos, cycle: "Solidarité", description: "Avance d'une case tous les joueurs en arrière de toi.", titre: "Parfum alléchant" },
    { categorie: Categorie.chaos, cycle: "Solidarité", description: "Avance de deux cases tous les joueurs sauf le premier.", titre: "Il fait une sieste" },
    { categorie: Categorie.chaos, cycle: "Solidarité", description: "Avance le dernier joueur de trois cases.", titre: "Il a vu un fantôme" },
    { categorie: Categorie.chaos, cycle: "Solidarité", description: "Déplace le premier joueur sur la case du dernier joueur.", titre: "C'est un trouillard!" },
    { categorie: Categorie.chaos, cycle: "Solidarité", description: "Le premier joueur passe son prochain tour.", titre: "Enterré vivant" },
    { categorie: Categorie.chaos, cycle: "Solidarité", description: "Tous les joueurs font le prochain défi.", titre: "Rituel d'initiation" },
    { categorie: Categorie.chaos, cycle: "Solidarité", description: "Tous les joueurs reculent de deux cases.", titre: "Retour dans le temps" },
    { categorie: Categorie.chaos, cycle: "Spécial", description: "Les pions bougent dorénavant de l'autre côté. Le départ et le but sont inversés.", titre: "Versa" },
    { categorie: Categorie.chaos, cycle: "Spécial", description: "Les pions bougent dorénavant de l'autre côté. Le départ et le but sont inversés.", titre: "Vice" },

    { categorie: Categorie.defi, cycle: "Enquête", description: "Trouve quelqu'un qui est encore aux études.", titre: "Martyr.e" },
    { categorie: Categorie.defi, cycle: "Enquête", description: "Trouve quelqu'un qui est venu en autobus.", titre: "Combustion" },
    { categorie: Categorie.defi, cycle: "Enquête", description: "Trouve quelqu'un qui est venu en voiture.", titre: "Pégaze" },
    { categorie: Categorie.defi, cycle: "Improvisation", description: "Explique au joueur à ta droite pourquoi tu as besoin de lui pour ton rituel.", titre: "L'Élu.e" },
    { categorie: Categorie.defi, cycle: "Improvisation", description: "Explique au monstre de Frankenstein (la personne à ta gauche) l'origine de sa main droite.", titre: "Histoire morcelée" },
    { categorie: Categorie.defi, cycle: "Improvisation", description: "Explique pourquoi les loup-garous sont des membres essentiels de notre société.", titre: "Citoyens à poils" },
    { categorie: Categorie.defi, cycle: "Improvisation", description: "Explique pourquoi les rats ont été faussement blâmés pour la peste bubonique.", titre: "Pandémie" },
    { categorie: Categorie.defi, cycle: "Improvisation", description: "On sait que le Diable est souvent représenté par une chèvre. Vend-nous le fromage qui en résulterait.", titre: "Dégoûtstation" },
    { categorie: Categorie.defi, cycle: "Improvisation", description: "Explique à la police pourquoi tu as un cadavre dans ton coffre de voiture.", titre: "Sang froid" },
    { categorie: Categorie.defi, cycle: "Langage", description: "Communique seulement en utilisant plusieurs cris d'animaux jusqu'à ton prochain tour.", titre: "À l'abattoir" },
    { categorie: Categorie.defi, cycle: "Langage", description: "Ne dis plus un mot jusqu'à ton prochain tour.", titre: "Silence, mon agneau" },
    { categorie: Categorie.defi, cycle: "Langage", description: "Parle avec un accent français jusqu'à ton prochain tour.", titre: "Alors du cou" },
    { categorie: Categorie.defi, cycle: "Langage", description: "Parle dans une autre langue jusqu'à ton prochain tour.", titre: "Langue de vipère" },
    { categorie: Categorie.defi, cycle: "Livraison", description: "Amène un bonbon à Léa.", titre: "Offrande" },
    { categorie: Categorie.defi, cycle: "Livraison", description: "Amène un rouleau de Rockets à Charles-André.", titre: "Vers d'autres cieux" },
    { categorie: Categorie.defi, cycle: "Loup-Garou", description: "Le chasseur est sorti. Va te cacher dans la grotte (sous la table) jusqu'à ton prochain tour.", titre: "Antre donc" },
    { categorie: Categorie.defi, cycle: "Loup-Garou", description: "Montre ta supériorité et ton statut d'alpha en restant debout jusqu'à ton prochain tour.", titre: "Chef.fe de la meute" },
    { categorie: Categorie.defi, cycle: "Loup-Garou", description: "Tu te prépares à kidnapper ton crush. Fais 5 push-ups.", titre: "Romance sous la lune" },
    { categorie: Categorie.defi, cycle: "Loup-Garou", description: "Va faire la chaise pendant 20 secondes.", titre: "Lunatique" },
    { categorie: Categorie.defi, cycle: "Mimes", description: "Buffy contre les vampires.", titre: "Mime l'énoncé" },
    { categorie: Categorie.defi, cycle: "Mimes", description: "Lancer du papier de toilette sur une maison.", titre: "Mime l'énoncé" },
    { categorie: Categorie.defi, cycle: "Mimes", description: "Le film l'Exorciste.", titre: "Mime l'énoncé" },
    { categorie: Categorie.defi, cycle: "Mimes", description: "Le film Twilight.", titre: "Mime l'énoncé" },
    { categorie: Categorie.defi, cycle: "Mimes", description: "Nick Quasi-Sans-Tête.", titre: "Mime l'énoncé" },
    { categorie: Categorie.defi, cycle: "Mimes", description: "Une citrouille avec une chandelle à l'intérieur.", titre: "Mime l'énoncé" },
    { categorie: Categorie.defi, cycle: "Partage", description: "Emprunte un accessoire de quelqu'un d'autre jusqu'à ton prochain tour.", titre: "Mascarade" },
    { categorie: Categorie.defi, cycle: "Partage", description: "Mets les bas de quelqu'un d'autre jusqu'à ton prochain tour.", titre: "Coup bas" },
    { categorie: Categorie.defi, cycle: "Partage", description: "Porte le chapeau de quelqu'un d'autre jusqu'à ton prochain tour.", titre: "Tu deviens chauve" },
    { categorie: Categorie.defi, cycle: "Social", description: "Nomme correctement tous les joueurs à la table.", titre: "Sans nom" },
    { categorie: Categorie.defi, cycle: "Social", description: "Trouve un.e non-joueur.euse et viens nous le.a présenter en quelques phrases.", titre: "Recrutement" },
    { categorie: Categorie.defi, cycle: "Social", description: "Va changer la chanson qui joue et mets celle de ton choix. Chante-la (la table doit t'entendre).", titre: "Perce-oreilles" },

    { categorie: Categorie.verite, cycle: "Halloween", description: "Quel bonbon ne mangeais-tu jamais quand tu passais l'Halloween?", titre: "Beurk" },
    { categorie: Categorie.verite, cycle: "Halloween", description: "Quel est ton film d'Halloween préféré?", titre: "Netflix & Kill" },
    { categorie: Categorie.verite, cycle: "Halloween", description: "Quel genre de sac utilisais-tu quand tu passais l'Halloween?", titre: "Puissant fond" },
    { categorie: Categorie.verite, cycle: "Halloween", description: "Tu as passé l'Halloween jusqu'à quel âge?", titre: "T'es ben grand toé" },
    { categorie: Categorie.verite, cycle: "Mal", description: "Pour quelle raison irais-tu en prison?", titre: "Esprit criminel" },
    { categorie: Categorie.verite, cycle: "Mal", description: "Quelle est ton incantation préférée?", titre: "Hééé macarena" },
    { categorie: Categorie.verite, cycle: "Mal", description: "Qui est ta sorcière préféréé?", titre: "Ensorcelé" },
    { categorie: Categorie.verite, cycle: "Mal", description: "Qui est ton tueur préféré?", titre: "Tueur en chéri" },
    { categorie: Categorie.verite, cycle: "Mal", description: "Selon toi, quelle est la pire malédiction que quelqu'un pourrait recevoir?", titre: "Ultime punition" },
    { categorie: Categorie.verite, cycle: "Mal", description: "Si on remplaçait tous les humains par des copies de toi, qu'est-ce qui va causer le premier meurtre?", titre: "Bombe à retardement" },
    { categorie: Categorie.verite, cycle: "Mal", description: "Si tu devais tuer quelqu'un, qu'utiliserais-tu comme arme?", titre: "Arme fatale" },
    { categorie: Categorie.verite, cycle: "Marie/tue/fourre", description: ["Godzilla", "Mothra", "King Kong"], titre: "Animaux" },
    { categorie: Categorie.verite, cycle: "Marie/tue/fourre", description: ["Jigsaw (la marionette)", "Chucky", "Un Mogwai/gremlin"], titre: "Jouets" },
    { categorie: Categorie.verite, cycle: "Marie/tue/fourre", description: ["Leatherface", "Jason Voorhees", "Michael Myer"], titre: "Masques" },
    { categorie: Categorie.verite, cycle: "Marie/tue/fourre", description: ["Patrick Bateman", "Sweeney Todd", "Hannibal Lecter"], titre: "Sigmas" },
    { categorie: Categorie.verite, cycle: "Marie/tue/fourre", description: ["Un loup-garou", "Un vampire", "Un zombie"], titre: "Nuit de n'os" },
    { categorie: Categorie.verite, cycle: "Mise en situation", description: "Qui invoquerais-tu lors d'un rituel occulte, et que lui demanderais-tu?", titre: "Séance privée" },
    { categorie: Categorie.verite, cycle: "Mise en situation", description: "Qu'est-ce qu'un inconnu pourrait te dire pour que tu rentres dans sa van?", titre: "Stranger danger" },
    { categorie: Categorie.verite, cycle: "Mise en situation", description: "Si tu étais dans un film d'horreur, quel rôle aurais-tu?", titre: "Projection" },
    { categorie: Categorie.verite, cycle: "Mise en situation", description: "Si tu étais un fantôme, qu'hanterais-tu?", titre: "Anche hantée" },
    { categorie: Categorie.verite, cycle: "Mise en situation", description: "Tu reçois un bébé zombie. Que fais-tu?", titre: "Pourrisson" },
    { categorie: Categorie.verite, cycle: "Mise en situation", description: "Un tueur en série entre chez toi. Où vas-tu te réfugier?", titre: "Here's Johnny!" },
    { categorie: Categorie.verite, cycle: "Mise en situation", description: "Une succube apparaît devant toi et désire ton « essence ». Lui donnes-tu?", titre: "Baiser mortel" },
    { categorie: Categorie.verite, cycle: "Peur", description: "Quel animal te fait le plus peur?", titre: "Raaaawr!" },
    { categorie: Categorie.verite, cycle: "Peur", description: "Quel film t'a le plus traumatisé quand tu étais enfant?", titre: "Téléfrisson" },
    { categorie: Categorie.verite, cycle: "Peur", description: "Quel monstre tes parents utilisaient-ils pour te faire peur?", titre: "Chair de poule" },
    { categorie: Categorie.verite, cycle: "Peur", description: "Quelle est une de tes phobies les plus irrationnelles?", titre: "Sang bon sens" },
    { categorie: Categorie.verite, cycle: "Spiritualité", description: "Dans quel cercle de l'enfer catholique serais-tu assigné?", titre: "Jugement dernier" },
    { categorie: Categorie.verite, cycle: "Spiritualité", description: "Selon ton karma, en quoi te réincarnerais-tu?", titre: "Introspectre" },
];

export default cartes;