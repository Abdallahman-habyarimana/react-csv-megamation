
import express from 'express'
import { getAllRequestedWorks } from './demande.controller';

const demandeRouter = express.Router();

demandeRouter.get('/demandes', getAllRequestedWorks)

export default demandeRouter