import { HomeSectionData } from '../types/home-section-data'

export const HOME_SECTIONS_DATA: HomeSectionData[] = [
    {
        title: 'Qui sommes-nous ?',
        description: [
            'Le MinimOw Bar est un « Neko Café » ou « Bar à chats » au cœur de Toulouse où vous pouvez profiter d’une pause gourmande en compagnie des félins.',
            'Le lieu est spécialement aménagé pour votre bien-être et celui de nos chats.',
            "Les chats du salon, dont certains seront bientôt proposés à l’adoption, proviennent essentiellement de l'association l'École des chats libres de Toulouse.",
            "Le Minim'Ow Bar est situé dans le quartier des Minimes."
        ]
    },
    {
        title: "Réservation",
        description: [
            'Au MinimOw Bar la réservation est possible pour le déjeuner entre 12h00 et 19h00 (dernier créneau 18h30).',
            "En dehors de ces heures, il n'est pas possible de réserver et l'entrée se fait en fonction des places disponibles.",
            "Vous pouvez effectuer votre réservation en ligne à l'aide du formulaire en cliquant sur le bouton."
        ],
        href: '/reservations',
        cta: 'Voir nos réservations'
    },
    {
        title: 'F.A.Q',
        description: 'Vous avez des questions ? Allez visiter notre section F.A.Q qui répondra sûrement à vos besoins !',
        href: '/faq',
        cta: 'Voir la F.A.Q'
    }
];
