import { createContext } from "react";
import { UiContextStructure } from "../../../types/UiContextStructure";

const UiContext = createContext({} as UiContextStructure);

export default UiContext;
