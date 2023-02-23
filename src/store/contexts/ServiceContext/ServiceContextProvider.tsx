import { useReducer } from "react";
import Service from "../../../types/Service";
import { ServiceSrtucture } from "../../../types/ServiceContextStructure";
import serviceReducer from "../../reducers/serviceReducer/serviceReducer";
import ProjectsContext from "./ServiceContext";

interface ServiceContextProviderProps {
  children: JSX.Element | JSX.Element[];
  initialProjectState?: ServiceSrtucture;
}

const ServiceContextProvider = ({
  children,
  initialProjectState = { service: {} as Service },
}: ServiceContextProviderProps): JSX.Element => {
  const [projectsState, dispatch] = useReducer(
    serviceReducer,
    initialProjectState
  );

  return (
    <ProjectsContext.Provider value={{ ...projectsState, dispatch }}>
      {children}
    </ProjectsContext.Provider>
  );
};

export default ServiceContextProvider;
