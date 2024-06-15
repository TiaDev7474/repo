export const step_link = [
    {
        rank:1,
        label:"Informations personnels",
        href:"/step2"
    },
    {
        rank:2,
        label:"Piece de verification",
        href:"/step3"
    },
    {
        rank:3,
        label:"Informations sur l'État Civil",
        href:"/step4"
    },
    {
        rank:4,
        label:"Informations Parentales",
        href:"/step5"
    }
]


export  interface IStepLink  {
    rank:number
    label:string
    href:string
}
