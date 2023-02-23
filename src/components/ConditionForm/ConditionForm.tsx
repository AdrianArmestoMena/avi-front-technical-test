import { useContext } from "react";
import ServiceContext from "../../store/contexts/ServiceContext/ServiceContext";
import { mechanicConditions, bodyWorkConditions } from "../../utils/conditions";
import ConditionFormStyled from "./ConditionForm.Style";

const ConditionForm = (): JSX.Element => {
  const {
    service: { type, condition },
  } = useContext(ServiceContext);

  return type ? (
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
  ) : (
    <p>Cargando</p>
  );
};

export default ConditionForm;
