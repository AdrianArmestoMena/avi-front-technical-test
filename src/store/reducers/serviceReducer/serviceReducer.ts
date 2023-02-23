import {
  LoadServiceAction,
  ServiceAction,
} from "../../actions/serviceActions/types/actionsService";
import { ServiceSrtucture } from "../../../types/ServiceContextStructure";

const serviceReducer = (
  previewService: ServiceSrtucture,
  action: ServiceAction
) => {
  let newServiceState: ServiceSrtucture;

  if ((action.type = "loadService")) {
    newServiceState = {
      ...previewService,
      service: (action as LoadServiceAction).payload,
    };
  } else {
    newServiceState = { ...previewService };
  }

  return newServiceState;
};

export default serviceReducer;
