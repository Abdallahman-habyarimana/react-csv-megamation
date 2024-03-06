import { useEffect, useState } from 'react'
import apiClient from '../services/api-client';
import { AxiosRequestConfig } from 'axios';

interface FetchResponse<T> {
    data: T[];
}
  
const useData = <T>(endpoint: string, requestConfig: AxiosRequestConfig, deps?: any[]) => {
    const [data, setData] = useState<T[]>([])
    const [isLoading, setIsLoading] = useState(false)
    
    useEffect(() => {
        const controller = new AbortController()
        setIsLoading(true)
        apiClient.get<FetchResponse<T>, any>(endpoint, {
            signal: controller.signal, ...requestConfig
        }).then((res) => {
            console.log(res.data);
            setData(res.data)
            setIsLoading(false)
        })
        return () => controller.abort()
      }, deps ? [...deps] : [])

      console.log(data)
      return { data, isLoading}
}

export default useData