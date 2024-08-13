export interface DbzDetallePlanetas {
    id:          number;
    name:        string;
    isDestroyed: boolean;
    description: string;
    image:       string;
    deletedAt:   null;
    characters:  Character[];
}

export interface Character {
    id:          number;
    name:        string;
    ki:          string;
    maxKi:       string;
    race:        string;
    gender:      string;
    description: string;
    image:       string;
    affiliation: string;
    deletedAt:   null;
}
