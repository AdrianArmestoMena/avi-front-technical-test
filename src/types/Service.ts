export type Condition =
  | "En espera"
  | "Diagnosis"
  | "Espera recambio"
  | "Inicio Reparacion"
  | "Pruebas"
  | "Limpieza"
  | "Acabado"
  | "Peritado"
  | "Recambio Solicitado"
  | "Desmontaje"
  | "Reparacion Carroceria"
  | "Reparacion Pintura"
  | "Montaje"
  | "Limpieza"
  | "Acabado";

interface Service {
  condition: Condition;
  type: "mecanica" | "carroceria";
  date: string;
  licenePlate: string;
  model: string;
  phone: string;
  name: string;
  lastNames: string;
  brand: string;
}

interface ResponseService {
  service_condition: Condition;
  service_type: "mecanica" | "carroceria";
  estimated_completion_date: string;
  licene_plate: string;
  brand: string;
  model: string;
  contact_phone: string;
  first_name: string;
  last_names: string;
}

export interface Response {
  serviceData: ResponseService[];
}

export default Service;
