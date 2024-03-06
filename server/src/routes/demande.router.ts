
import express from 'express'
import {  httpAddNewRequest, httpGetAllRequestedWorks, httpGetRequestedWork } from './demande.controller';

const demandeRouter = express.Router();

demandeRouter.get('/demandes', httpGetAllRequestedWorks);
demandeRouter.post('/demandes', httpAddNewRequest);
demandeRouter.get('/demandes/:id', httpGetRequestedWork);

export default demandeRouter