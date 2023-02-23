import { ServiceAction } from "../store/actions/serviceActions/types/actionsService";
import Service from "./Service";

export type ServiceSrtucture = {
  service: Service;
};

export interface ServiceContextStructure extends ServiceSrtucture {
  dispatch: React.Dispatch<ServiceAction>;
}
