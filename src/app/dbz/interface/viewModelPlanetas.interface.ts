

export interface viewModeldbzPlanetas {
    id:          number;
    name:        string;
    isDestroyed: boolean;
    description: string;
    image:       string;
    deletedAt:   null;
    personajes:  personajes[];
}

export interface personajes {
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