import { useEffect, useState } from 'react';
import demandeService, { Demande } from '../services/demandeService';
import { CanceledError } from 'axios';

  
const useWorkOrder = () => {
    const [demandes, setDemandes] = useState<Demande[]>([])
    const [error, setError] =  useState("")
    const [isLoading, setIsLoading] = useState(false)
    

    useEffect(() => {
        const {request, cancel } = demandeService.getAll<Demande>();
        setIsLoading(true)
        request.then((res) => {
            setDemandes(res.data)
            setIsLoading(false)
          }).catch(err => {
              if(err instanceof CanceledError ) return;
            setError(err.message)
            setIsLoading(false)
          }) 
          
          return () => cancel();
            
    }, [])

    console.log(demandes);
    
    return { isLoading, demandes, setDemandes, error, setError}
}

      
export default useWorkOrder