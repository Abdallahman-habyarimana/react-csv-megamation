import { Box, Button, FormControl, FormLabel, Input, Select, VStack } from '@chakra-ui/react'
import natures from '../services/data'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Demande } from '../services/demandeService'

const schema = z.object({
    title: z.string().min(6, { message: 'veuillez decrivez la demande'})
})

type WorkRequestForm = z.infer<typeof schema>

const AddNewWork = () => {
    const { 
        register, 
        handleSubmit, formState: {errors}} = 
        useForm<WorkRequestForm>({ resolver: zodResolver(schema)})

    const onSubmit = (data:Demande) => {
        console.log(data);
        
    };

    return(
        <form onSubmit={handleSubmit(onSubmit)}>
            <VStack spacing={4} px={20}>
                <FormControl>
                    <FormLabel>Titre</FormLabel>
                    <Input {...register('title')}  id='title' />
                </FormControl>
                <FormControl>
                    <FormLabel>Priorite</FormLabel>
                    <Select>
                        <option>Normale</option>
                        <option>Urgent</option>
                    </Select>
                </FormControl>  
                <FormControl>
                    <FormLabel>Nature de la demande</FormLabel>
                    <Select>
                        {
                            natures.map(nature => (
                            <option key={nature.value} value={nature.value}>{nature.value.charAt(0).toUpperCase() + nature.value.slice(1)}</option>
                            ))
                        }
                    </Select>
                </FormControl>
                <Button type='submit' alignSelf='left'>Complete la demande</Button>
            </VStack>
        </form>
    )
}

export default AddNewWork