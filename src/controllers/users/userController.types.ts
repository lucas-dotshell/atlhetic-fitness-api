export type TAbstractPersonaltrainer = {
    name: string,
    picture: string,
    accessLevel: "personal" | "admin" | "athletic",
    birthDate: string,
    gender: "M" | "F" | "Other",
    active: boolean,
};

export type TAbstractAthletic = {
    name: string,
    picture: string,
    accessLevel: "personal" | "admin" | "athletic",
    gender: "M" | "F" | "Other",
    birthDate: string,
    trainerId: string,
    notes: string,
    startWeight: number,
    startHeight: number,
    active: boolean,
};

export type TConcrectUser = {

}