import create from "./http-service";

export interface Demande {
    _id?: string;
    title: string;
    status?: string;
    duree?: string;
    submittedDate?: string;
    issueTo?: string;
    submittedBy?: string;
    building?: string;
    room?: number;
    equipment?: string;
    workDescription?: string;
    comments?: string;
}

export default create('/demandes')