import IconUser from "../../assets/img/icon-user.svg";
import "./styles.css";
import axios from "axios";
import { BASE_URL } from "../../utils/request";

type Props = {
  saleId: number;
};

function handleClick(id: number) {
  axios(`${BASE_URL}/sales/${id}/notification`).then((response) => {
    console.log("SUCESSO");
  });
}
function NotificationButton({ saleId }: Props) {
  return (
    <>
      <div className="dsmeta-red-btn-container">
        <button className="dsmeta-red-btn" onClick={() => handleClick(saleId)}>
          <img src={IconUser} alt="botão para notificar" />
        </button>
      </div>
    </>
  );
}
export default NotificationButton;
