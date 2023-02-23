import Service from "../../../../types/Service";
import { ActionTypesSong } from "./actionsTypesService";

export interface ServiceAction {
  type: ActionTypesSong;
  payload?: unknown;
}

export interface LoadServiceAction extends ServiceAction {
  payload: Service;
}
