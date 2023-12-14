//TYPES

export type CharacterType = {
    name: string
    gender: "male" | 'female'
    charParams: {
        points: number
        basicParams: BasicCharParams
        secondaryParams: SecondaryCharParams
        skills: CharSkills
    }
    loadedCharacterData: any
}

export type BasicCharParams = {
    power: number
    dexterity: number
    intelligence: number
    charisma: number
}
type SecondaryCharParams = {
    vitalForce: number
    dodging: number
    vigor: number
}

type CharSkills = {
    [key: string]: number;
    strike: number;
    stealth: number;
    archery: number;
    trainability: number;
    survival: number;
    healing: number;
    harassment: number;
    discernment: number;
    appearance: number;
    manipulation: number;
}


export const skillLevelTitles = {
    0: 'untrained',
    1: 'newbie',
    2: 'trainee ',
    3: 'adept',
    4: 'expert',
    5: 'master'
}