//TYPES
export type CharacterType = {
    name: string
    //gender: "male" | 'female'
    charParams: {
        basicParams: CharPropertyType[]
        secondaryParams: CharPropertyType[]
        skills: SkillType[]

    }
}
// type BasicCharParams = {
//     power: number
//     dexterity: number
//     inteligence: number
//     charisma: number
// }
// type SecondaryCharParams = {
//     vitalForce: number
//     dodging: number
//     vigor: number
// }


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