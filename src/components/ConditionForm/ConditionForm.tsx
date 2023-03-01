import { useContext } from "react";
import { useParams } from "react-router-dom";
import useApi from "../../hooks/useApi";
import ServiceContext from "../../store/contexts/ServiceContext/ServiceContext";
import { mechanicConditions, bodyWorkConditions } from "../../utils/conditions";
import ConditionFormStyled from "./ConditionForm.Style";

const ConditionForm = (): JSX.Element => {
  const {
    service: { type, condition },
  } = useContext(ServiceContext);

  const { id } = useParams();
  const { updateConditionService } = useApi();

  return (
    <>
      <ConditionFormStyled>
        <ul className="conditions">
          {(type === "mecanica" ? mechanicConditions : bodyWorkConditions).map(
            (conditionItem) => (
              <li className="conditions__list-item" key={conditionItem}>
                <div className="conditions__item">
                  <div
                    className={`conditions__condition ${
                      condition === conditionItem &&
                      "conditions__condition--actual"
                    }`}
                  >
                    <span
                      className={`conditions__name ${
                        condition === conditionItem &&
                        "conditions__name--actual"
                      }`}
                    >
                      {conditionItem}
                    </span>
                    <img
                      src={`../icons/${conditionItem
                        .replace(/\s+/g, "")
                        .toLocaleLowerCase()}.png`}
                      alt={conditionItem}
                      width={64}
                      height={64}
                    />
                  </div>
                </div>
                <button
                  onClick={() => {
                    updateConditionService(`${id}`, conditionItem);
                  }}
                  className={`conditions__select ${
                    condition === conditionItem && "conditions__select--actual"
                  }`}
                  disabled={condition === conditionItem}
                >
                  Actualizar
                </button>
              </li>
            )
          )}
        </ul>
      </ConditionFormStyled>
    </>
  );
};

export default ConditionForm;
