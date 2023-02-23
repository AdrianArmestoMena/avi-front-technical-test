import Service from "../../../types/Service";
import { LoadServiceAction } from "./types/actionsService";

export const loadServiceActionCreator = (
  service: Service
): LoadServiceAction => ({
  type: "loadService",
  payload: service,
});
