import axios, { AxiosError, AxiosResponse } from "axios";
import { useCallback, useContext } from "react";
import { loadServiceActionCreator } from "../store/actions/serviceActions/serviceActionCreators";
import {
  closeModalActionCreator,
  openConditionActionCreator,
  openDateActionCreator,
  openErrorActionCreator,
  openLoadingActionCreator,
} from "../store/actions/uiActions/uiActionCreators";
import ServiceContext from "../store/contexts/ServiceContext/ServiceContext";
import UiContext from "../store/contexts/uiContext/UiContext";
import Service, { Condition, Response } from "../types/Service";

const apiUrl = process.env.REACT_APP_API_URL;

const useApi = () => {
  const { dispatch, service } = useContext(ServiceContext);
  const { dispatch: uiDispatch } = useContext(UiContext);

  const loadService = useCallback(
    async (id: string) => {
      try {
        uiDispatch(openLoadingActionCreator());
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

        dispatch(loadServiceActionCreator(await newService));
        uiDispatch(closeModalActionCreator());
      } catch (error) {
        if ((error as AxiosError).message === "Network Error") {
          uiDispatch(
            openErrorActionCreator(
              "Estamos teniendo algunos problemas, intentalo más tarde."
            )
          );
        }
        if (error instanceof AxiosError) {
          const errorObject = JSON.parse(
            (error as AxiosError).request.response
          );

          uiDispatch(
            openErrorActionCreator(
              errorObject.error
                ? errorObject.error
                : "Estamos teniendo algunos problemas, intentalo más tarde."
            )
          );
          return;
        }
      }
    },
    [dispatch, uiDispatch]
  );

  const updateConditionService = useCallback(
    async (id: string, newConditions: Condition) => {
      try {
        uiDispatch(openLoadingActionCreator());
        const response: AxiosResponse<Response> = await axios.put(
          `${apiUrl}service/updateCondition/${id}`,
          { condition: newConditions },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 404) {
          throw new Error(response.data.error);
        }
        dispatch(
          loadServiceActionCreator({ ...service, condition: newConditions })
        );
        uiDispatch(openConditionActionCreator(newConditions));
      } catch (error: unknown) {
        uiDispatch(openErrorActionCreator((error as Error).message));
      }
    },
    [dispatch, service, uiDispatch]
  );

  const updateDateService = useCallback(
    async (id: string, date: string) => {
      try {
        uiDispatch(openLoadingActionCreator());
        const response: AxiosResponse<Response> = await axios.put(
          `${apiUrl}service/updateDate/${id}`,
          { date },
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        if (response.status === 404) {
          throw new Error();
        }
        await loadService(id);
        uiDispatch(openDateActionCreator(date));
      } catch (error) {
        if ((error as AxiosError).message === "Network Error") {
          uiDispatch(
            openErrorActionCreator(
              "Estamos teniendo algunos problemas, intentalo más tarde."
            )
          );
        }

        if (error instanceof AxiosError) {
          const errorObject = JSON.parse(
            (error as AxiosError).request.response
          );

          uiDispatch(
            openErrorActionCreator(
              errorObject.error
                ? errorObject.error
                : "Estamos teniendo algunos problemas, intentalo más tarde."
            )
          );
          return;
        }
      }
    },
    [loadService, uiDispatch]
  );
  return { loadService, updateConditionService, updateDateService };
};

export default useApi;
