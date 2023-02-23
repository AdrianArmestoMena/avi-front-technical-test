import { useContext, useEffect } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import ServiceContext from "../../store/contexts/ServiceContext/ServiceContext";
import ServiceCardStyled from "./ServiceCard.Style";

const ServiceCard = (): JSX.Element => {
  const { id } = useParams();
  const { loadService } = useApi();

  const {
    service: {
      licenePlate,
      name,
      phone,
      lastNames,
      brand,
      model,
      date,
      condition,
    },
  } = useContext(ServiceContext);

  useEffect(() => {
    loadService(id as string);
  }, [id, loadService]);

  return (
    <>
      <ServiceCardStyled className="service-card">
        <table className="service-card__mobile-table">
          <caption>Datos de la Reparación</caption>
          <tr>
            <th>Estado Actual</th>
            <td className="service-card_actual-condition">{condition}</td>
          </tr>
          <tr>
            <th>Matrícula</th>
            <td>{licenePlate}</td>
          </tr>
          <tr>
            <th>Fecha de entrega</th>
            <td>{date ? date.split("T")[0] : ""}</td>
          </tr>
          <tr>
            <th>Vehículo</th>
            <td>
              {brand} {model}
            </td>
          </tr>
          <tr>
            <th>Propietario</th>
            <td>
              {name} {lastNames}
            </td>
          </tr>
          <tr>
            <th>Teléfono de contacto</th>
            <td>{phone}</td>
          </tr>
        </table>
        <table className="service-card__desktop-table">
          <caption>Datos de la Reparación</caption>
          <tr>
            <th>Estado Actual</th>
            <th>Matrícula</th>
            <th>Fecha de entrega</th>
            <th>Vehículo</th>
            <th>Propietario</th>
            <th>Teléfono de contacto</th>
          </tr>
          <tr>
            <td className="service-card_actual-condition">{condition}</td>
            <td>{licenePlate}</td>
            <td>{date ? date.split("T")[0] : ""}</td>
            <td>
              {brand} {model}
            </td>
            <td>
              {name} {lastNames}
            </td>
            <td>{phone}</td>
          </tr>
        </table>
      </ServiceCardStyled>
    </>
  );
};

export default ServiceCard;
