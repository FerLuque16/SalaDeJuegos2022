
export interface Baraja {
    success:   boolean;
    deck_id:   string;
    remaining: number;
    shuffled:  boolean;
}


export interface Mano {
    success:   boolean;
    deck_id:   string;
    cards:     Card[];
    remaining: number;
}

export interface Card {
    code:   string;
    image:  string;
    images: Images;
    value:  string;
    suit:   string;
}

export interface Images {
    svg: string;
    png: string;
}
