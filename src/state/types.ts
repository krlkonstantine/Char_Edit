//TYPES
export type CharacterType ={
    name: string
    gender: "male" | 'female'
    charParams: {
        basicParams:BasicCharParams
        secondaryParams: SecondaryCharParams
        skills: Skills

    }
}
type BasicCharParams = {
    power: number
    dexterity: number
    inteligence: number
    charisma: number
}
type SecondaryCharParams = {
    vitalForce: number
    dodging: number
    vigor: number
}


type Skills = {
    strike: SkillLevel
    stealth: SkillLevel
    archery: SkillLevel
    trainability: SkillLevel
    survival: SkillLevel
    healing: SkillLevel
    harassment: SkillLevel
    discernment: SkillLevel
    appearance: SkillLevel
    manipulation : SkillLevel
}

type SkillLevel = {
     0: 'untrained'
     1: 'newbie'
     2: 'trainee '
     3: 'adept'
     4: 'expert'
     5: 'master'
}