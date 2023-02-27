import Service from "../../../../types/Service";
import { ActionTypesService } from "./actionsTypesService";

export interface ServiceAction {
  type: ActionTypesService;
  payload?: unknown;
}

export interface LoadServiceAction extends ServiceAction {
  payload: Service;
}
