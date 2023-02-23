import { createContext } from "react";
import { ServiceContextStructure } from "../../../types/ServiceContextStructure";

const ServiceContext = createContext({} as ServiceContextStructure);

export default ServiceContext;
