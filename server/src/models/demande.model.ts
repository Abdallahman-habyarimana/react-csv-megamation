
import DemandeModel, { DemandeDto } from "./demande.mongo"

async function getAllRequestedWorks() {
    return await DemandeModel.find({})
}

async function getRequestedWork(id: string) {
    return await DemandeModel.findById({ _id: id})
}

async function addNewRequest(demande: DemandeDto) {
    const newDemande = new DemandeModel({
        title: demande.title,
        building: 'DUTCH',
        status: 'I',
        submittedBy: 'Vincent',
    })

    await newDemande.save()

    return newDemande
    
}


export {
    getAllRequestedWorks,
    getRequestedWork,
    addNewRequest
}

