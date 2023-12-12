//TYPES
import {v1} from "uuid";

export type CharacterType = {
    name: string
    //gender: "male" | 'female'
    charParams: {
        basicParams: BasicCharParams
        secondaryParams: SecondaryCharParams
        skills:CharSkills
    }
}

export const basicCharParams: CharPropertyType[] = [
    {title: 'power', level: 0, id: v1()},
    {title: 'dexterity', level: 0, id: v1()},
    {title: 'inteligence', level: 0, id: v1()},
    {title: 'charisma', level: 0, id: v1()},
]
export const secondaryCharParams: CharPropertyType[] = [
    {title: 'vitalForce', level: basicCharParams[0].level + 3, id: v1()},
    {title: 'dodging', level: basicCharParams[1].level + 10, id: v1()},
    {title: 'vigor', level: basicCharParams[2].level + basicCharParams[3].level, id: v1()},
]
type BasicCharParams = {
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
    strike: SkillLevel
    stealth: SkillLevel
    archery: SkillLevel
    trainability: SkillLevel
    survival: SkillLevel
    healing: SkillLevel
    harassment: SkillLevel
    discernment: SkillLevel
    appearance: SkillLevel
    manipulation: SkillLevel
}

export type CharPropertyType = {
    title: string
    level: number
    id: string
}

export type SkillType = Omit<CharPropertyType, 'level'> & {
    level: SkillLevel
}


type SkillLevel = 0 | 1 | 2 | 3 | 4 | 5

const skillLevelTitles = {
    0: 'untrained',
    1: 'newbie',
    2: 'trainee ',
    3: 'adept',
    4: 'expert',
    5: 'master'
}