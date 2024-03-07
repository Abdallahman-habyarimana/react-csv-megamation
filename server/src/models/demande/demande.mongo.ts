import mongoose from 'mongoose'

export interface DemandeDto {
    _id: string;
    title: string;
    status: string;
    duree: string;
    submittedDate: string;
    issueTo: string;
    submittedBy: string;
    building: string;
    room: number;
    equipment: string;
    workDescription: string;
    comments: string;
}

const demandeSchema = new mongoose.Schema<DemandeDto>({
    title: {type: String, required: true},
    status: {type: String},
    submittedDate: {type: String},
    duree: {type: String},
    issueTo: {type: String},
    submittedBy: {type: String},
    building: {type: String},
    room: {type: Number},
    equipment: {type: String},
    workDescription: {type: String},
    comments: {type: String},
})

const DemandeModel = mongoose.model('Demande', demandeSchema)

export default DemandeModel
