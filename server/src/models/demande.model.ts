class Demande {
    constructor(public id: number, public description: string, public isCompleted: boolean) {}
}

const demandes: Demande[] = [
    {
        id: 1, 
        description: 'plumbing dans le toilete de fille' ,
        isCompleted: false
    },
]


export default demandes

