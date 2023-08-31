import Carte from "../modeles/Carte";
import Categorie from "../modeles/Categorie";

const cartes: Carte[] = [
    { categorie: Categorie.defi, cycle: "Partage", description: "Porte le chapeau de quelqu'un d'autre jusqu'à ton prochain tour" },
    { categorie: Categorie.defi, cycle: "Partage", description: "Emprunte un accessoire de quelqu'un d'autre jusqu'à ton prochain tour" },
    { categorie: Categorie.defi, cycle: "Partage", description: "Mets les bas de quelqu'un d'autre jusqu'à ton prochain tour" },
    { categorie: Categorie.defi, cycle: "Loup-Garou", description: "Montre ta supériorité et ton statut d'alpha en restant debout jusqu'à ton prochain tour" },
    { categorie: Categorie.defi, cycle: "Loup-Garou", description: "Tu te prépares à kidnapper ton crush. Fais 5 push-ups" },
    { categorie: Categorie.defi, cycle: "Loup-Garou", description: "Va te cacher dans la grotte (sous la table) jusqu'à ton prochain tour", titre: "Le chasseur est sorti" },
    { categorie: Categorie.defi, cycle: "Loup-Garou", description: "Le chaperon rouge prend du temps à s'en venir. Va faire la chaise pendant 20 secondes." },
    { categorie: Categorie.defi, cycle: "Social", description: "Nomme correctement tous les joueurs à la table" },
    { categorie: Categorie.defi, cycle: "Social", description: "Va chercher un/une non-joueur/euse et viens nous le/la présenter en quelques phrases" },
    { categorie: Categorie.defi, cycle: "Social", description: "Va changer la chanson qui joue et mets celle de ton choix. Tu dois la chanter (assez fort pour que les gens à la table t'entendent)" },
    { categorie: Categorie.defi, cycle: "Social", description: "Amène un rouleau de Rockets à Charles-André" },
    { categorie: Categorie.defi, cycle: "Social", description: "Amène un bonbon à Léa" },
    { categorie: Categorie.defi, cycle: "Social", description: "Laisse un commentaire aux hôtes à propos de l'événement" },
    { categorie: Categorie.defi, cycle: "Où est Charlie", description: "Va chercher un non-joueur qui a un chat chez lui" },
    { categorie: Categorie.defi, cycle: "Où est Charlie", description: "Va chercher un non-joueur qui a une imprimante 3D chez lui" },
    { categorie: Categorie.defi, cycle: "Où est Charlie", description: "Va chercher un non-joueur qui est encore aux études" },
    { categorie: Categorie.defi, cycle: "Où est Charlie", description: "Va chercher un non-joueur qui est venu en autobus" },
    { categorie: Categorie.defi, cycle: "Où est Charlie", description: "Va chercher un non-joueur qui est venu en voiture" },
    { categorie: Categorie.defi, cycle: "Langage", description: "Parle avec un accent français jusqu'à ton prochain tour" },
    { categorie: Categorie.defi, cycle: "Langage", description: "Parle en anglais jusqu'à ton prochain tour" },
    { categorie: Categorie.defi, cycle: "Langage", description: "Ne dis plus un mot jusqu'à ton prochain tour" },
    { categorie: Categorie.defi, cycle: "Langage", description: "Communique seulement en utilisant plusieurs cris d'animaux jusqu'à ton prochain tour" },
    { categorie: Categorie.defi, cycle: "Mimes", description: "Une citrouille avec une chandelle à l'intérieur" },
    { categorie: Categorie.defi, cycle: "Mimes", description: "Lancer du papier de toilette sur une maison" },
    { categorie: Categorie.defi, cycle: "Mimes", description: "Buffy contre les vampires" },
    { categorie: Categorie.defi, cycle: "Mimes", description: "Le film l'Exorciste" },
    { categorie: Categorie.defi, cycle: "Mimes", description: "Le film Twilight" },
    { categorie: Categorie.defi, cycle: "Mimes", description: "Nick Quasi-Sans-Tête" },
    { categorie: Categorie.chaos, cycle: "Réorganisation", description: "Réorganisez les pions selon la grandeur croissante des joueurs" },
    { categorie: Categorie.chaos, cycle: "Réorganisation", description: "Réorganisez les pions selon la grandeur décroissante des joueurs" },
    { categorie: Categorie.chaos, cycle: "Réorganisation", description: "Réorganisez les pions en ordre alphabétique du prénom des joueurs." },
    { categorie: Categorie.chaos, cycle: "Réorganisation", description: "Réorganisez les pions en ordre désalphabétique du prénom des joueurs." },
    { categorie: Categorie.chaos, cycle: "Réorganisation", description: "Réorganisez les pions selon l'âge croissant des joueurs" },
    { categorie: Categorie.chaos, cycle: "Réorganisation", description: "Réorganisez les pions selon l'âge décroissant des joueurs" },
    { categorie: Categorie.chaos, cycle: "Réorganisation", description: "Vous êtes optimistes! Réorganisez les pions pour que les joueurs avec les récipients les plus pleins soient en avant." },
    { categorie: Categorie.chaos, cycle: "Réorganisation", description: "Vous êtes pessimistes! Réorganisez les pions pour que les joueurs avec les récipients les plus vides soient avant." },
    { categorie: Categorie.chaos, cycle: "Réorganisation", description: "Tous les joueurs se décalent d'une place vers la droite" },
    { categorie: Categorie.chaos, cycle: "Mario Party", description: "Jusqu'à ton prochain tour, les lancers dés font reculer les pions" },
    { categorie: Categorie.chaos, cycle: "Mario Party", description: "Jusqu'à ton prochain tour, les dés déplacent de la moitié du nombre de cases supposé, arrondi en haut" },
    { categorie: Categorie.chaos, cycle: "Solidarité", description: "Avance tous les joueurs en arrière de toi d'une case" },
    { categorie: Categorie.chaos, cycle: "Solidarité", description: "Avance le dernier joueur d'une case" },
    { categorie: Categorie.chaos, cycle: "Solidarité", description: "Avance tous les joueurs sauf le premier d'une case" },
    { categorie: Categorie.chaos, cycle: "Solidarité", description: "Recule le premier joueur d'une case" },
    { categorie: Categorie.chaos, cycle: "Solidarité", description: "Recule d'une case tous les joueurs en avant de toi" },
    { categorie: Categorie.chaos, cycle: "Solidarité", description: "Tous les joueurs font la prochaine conséquence" },
    { categorie: Categorie.chaos, cycle: "Garde cette carte", description: "Garde cette carte, et tu pourras l'utiliser quand tu veux pour faire piger une nouvelle conséquence (peut s'utiliser sur n'importe qui)", titre: "Non merci!" },
    { categorie: Categorie.chaos, cycle: "Garde cette carte", description: "Garde cette carte, et tu pourras l'utiliser quand tu veux pour réussir gratuitement une conséquence qui t'es assignée", titre: "Oui merci!" },
    { categorie: Categorie.chaos, cycle: "Garde cette carte", description: "Garde cette carte, et tu pourras l'utiliser pour doubler la taille d'une conséquence de n'importe quel joueur. La récompense est aussi doublée", titre: "Portions doubles" },
    { categorie: Categorie.aide, cycle: "Manque d'inspiration", description: "Avance d'une case" },
    { categorie: Categorie.aide, cycle: "Manque d'inspiration", description: "Échange de place avec le premier joueur" },
    { categorie: Categorie.aide, cycle: "Manque d'inspiration", description: "Échange de place avec le joueur de ton choix" },
    { categorie: Categorie.aide, cycle: "Manque d'inspiration", description: "Rejoue!" },
    { categorie: Categorie.verite, cycle: "Peur", description: "Quel film t'a le plus traumatisé quand tu étais enfant\u202f?" },
    { categorie: Categorie.verite, cycle: "Peur", description: "Quel animal te fait le plus peur\u202f?" },
    { categorie: Categorie.verite, cycle: "Peur", description: "Quelle est une de tes phobies les plus irrationnelles\u202f?" },
    { categorie: Categorie.verite, cycle: "Peur", description: "Quel monstre tes parents utilisaient-ils pour te faire peur\u202f?" },
    { categorie: Categorie.verite, cycle: "Halloween", description: "Quel genre de sac utilisais-tu quand tu passais l'Halloween\u202f?" },
    { categorie: Categorie.verite, cycle: "Halloween", description: "Quel bonbon espérais-tu obtenir quand tu passais l'Halloween\u202f?" },
    { categorie: Categorie.verite, cycle: "Halloween", description: "Quel bonbon ne mangeais-tu jamais quand tu passais l'Halloween\u202f?" },
    { categorie: Categorie.verite, cycle: "Halloween", description: "Qu'est-ce que la maison de riches donnait quand tu passais l'Halloween\u202f?" },
    { categorie: Categorie.verite, cycle: "Halloween", description: "Tu as passé l'Halloween jusqu'à quel âge\u202f?" },
    { categorie: Categorie.verite, cycle: "Mal", description: "Si tous les êtres humains de la planète étaient des copies toi, il faudrait combien de temps avant que quelqu'un tue quelqu'un d'autre\u202f? (La réponse ne peut pas être jamais)" },
    { categorie: Categorie.verite, cycle: "Mal", description: "Si un jour tu vas en prison, ce sera pour quelle raison\u202f?" },
    { categorie: Categorie.verite, cycle: "Mal", description: "Si tu devais tuer quelqu'un, quelle arme utiliserais-tu\u202f?" },
    { categorie: Categorie.verite, cycle: "Mal", description: "Qui est ton tueur préféré\u202f?" },
    { categorie: Categorie.verite, cycle: "Mal", description: "Selon toi, quelle est la pire malédiction que quelqu'un pourrait avoir\u202f?" },
    { categorie: Categorie.verite, cycle: "Mal", description: "Préférerais-tu mourir, ou devenir un vampire\u202f?" },
    { categorie: Categorie.verite, cycle: "Mal", description: "Préférerais-tu mourir, ou devenir un loup-garou\u202f?" },
    { categorie: Categorie.verite, cycle: "Mal", description: "Préférerais-tu mourir, ou devenir un zombie\u202f?" },
    { categorie: Categorie.verite, cycle: "Mal", description: "Dans quel cercle de l'enfer es-tu le plus probable d'aller\u202f? (Les cercles sont: limbes, luxure, gourmandise, avarice, colère, hérésie, fraude, trahison)" },
    { categorie: Categorie.verite, cycle: "Mal", description: "Quelle est ton incantation préférée\u202f?" },
    { categorie: Categorie.verite, cycle: "Marie/tue/fourre", description: "Un loup-garou, un vampire, un zombie" },
    { categorie: Categorie.verite, cycle: "Marie/tue/fourre", description: "Jigsaw (la marionette), Chucky, un Mogwai/gremlin" },
    { categorie: Categorie.verite, cycle: "Marie/tue/fourre", description: "Leatherface (The Texas Chainsaw Massacre), Jason Voorhees (Friday the 13th), Michael Myer (Halloween)" },
    { categorie: Categorie.verite, cycle: "Marie/tue/fourre", description: "Godzilla, Mothra, King Kong" },
    { categorie: Categorie.verite, cycle: "Marie/tue/fourre", description: "Patrick Bateman (American Psycho), Sweeney Todd, Hannibal Lecter" },
    { categorie: Categorie.verite, cycle: "Mises en situation", description: "Tu reçois un bébé zombie, que tu ne peux pas donner. Que fais-tu\u202f?" },
    { categorie: Categorie.verite, cycle: "Mises en situation", description: "Un tueur en série est dans ta maison/appartement. Où vas-tu te réfugier\u202f?" },
    { categorie: Categorie.verite, cycle: "Mises en situation", description: "Une succube apparaît devant toi et désire ton «\u00a0«\u00a0essence\u00a0»\u00a0». Lui donnes-tu\u202f?" },
    { categorie: Categorie.verite, cycle: "Mises en situation", description: "Lors d'un rituel occulte, qui manifesterais-tu, et que lui demanderais-tu\u202f?" },
    { categorie: Categorie.verite, cycle: "Mises en situation", description: "Si tu étais un fantôme, qu'hanterais-tu\u202f?" },
    { categorie: Categorie.verite, cycle: "Mises en situation", description: "Si tu étais dans un film d'horreur, quel rôle occuperais-tu\u202f?" },
    { categorie: Categorie.verite, cycle: "Informations", description: "Raconte-nous ta journée d'hier" },
    { categorie: Categorie.verite, cycle: "Informations", description: "Comment connais-tu les hôtes de l'événement\u202f?" },
    { categorie: Categorie.verite, cycle: "Informations", description: "Quelle est la dernière chose que tu as commencé à apprendre\u202f?" },
    { categorie: Categorie.verite, cycle: "Informations", description: "Quel est le dernier film que tu as vu?" },
];

export default cartes;