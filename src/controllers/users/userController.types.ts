export type TPersonaltrainer = {
    name: string,
    image: string,
    email: string,
    ducument: string,
    passwd: string,
    accessLevel: "master" | "admin" | "user",
    birthDate: string,
    gender: "M" | "F",
    active: boolean,
};

export type TAthletic = {
    name: string,
    image: string,
    email: string,
    gender: "M" | "F",
    ducument: string,
    birthDate: string,
    trainerId: string,
    notes: string,
    objective: string,
    startWeight: number,
    startHeight: number,
    active: boolean,
};

