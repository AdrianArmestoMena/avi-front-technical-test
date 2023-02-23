import axios, { AxiosResponse } from "axios";
import { useCallback, useContext } from "react";
import { loadServiceActionCreator } from "../store/actions/serviceActions/serviceActionCreators";
import ServiceContext from "../store/contexts/ServiceContext/ServiceContext";
import Service, { Response } from "../types/Service";

const apiUrl = process.env.REACT_APP_API_URL;

const useApi = () => {
  const { dispatch } = useContext(ServiceContext);

  const loadService = useCallback(
    async (id: string) => {
      try {
        const {
          data: { serviceData },
        }: AxiosResponse<Response> = await axios.get(`${apiUrl}service/${id}`);

        const [service] = await serviceData;
        const {
          service_condition,
          estimated_completion_date,
          last_names,
          licene_plate,
          model,
          first_name,
          contact_phone,
          service_type,
          brand,
        } = await service;

        const newService: Service = {
          condition: service_condition,
          date: estimated_completion_date,
          lastNames: last_names,
          licenePlate: licene_plate,
          model: model,
          name: first_name,
          phone: contact_phone,
          type: service_type,
          brand,
        };
        console.log(await serviceData);
        dispatch(loadServiceActionCreator(await newService));
      } catch {
        console.log(apiUrl);
      }
    },
    [dispatch]
  );

  return { loadService };
};

export default useApi;
