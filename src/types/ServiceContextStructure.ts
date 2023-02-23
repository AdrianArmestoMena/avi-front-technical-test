import { ServiceAction } from "../store/actions/projectsActions/types/actionsProjects";
import Service from "./Service";

export type ServiceSrtucture = {
  service: Service;
};

export interface ServiceContextStructure extends ServiceSrtucture {
  dispatch: React.Dispatch<ServiceAction>;
}
