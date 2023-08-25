import axios, { AxiosPromise } from "axios"
import { AddressData } from "../interfaces/addressData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080';

const fetchData = async (): AxiosPromise<AddressData> => {
  const response = axios.get(API_URL + '/address');
  return response;
}

export function useAddressData() {
  const query = useQuery({
    queryFn: fetchData,
    queryKey: ['address-data'],
    retry: 2
  })

  return {
    ...query,
    data: query.data?.data
  }
}