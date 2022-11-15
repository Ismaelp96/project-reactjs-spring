import IconUser from "../../assets/img/icon-user.svg";
import "./styles.css";

function NotificationButton() {
  return (
    <>
      <div className="dsmeta-red-btn-container">
        <button className="dsmeta-red-btn">
          <img src={IconUser} alt="botão para notificar" />
        </button>
      </div>
    </>
  );
}
export default NotificationButton;
