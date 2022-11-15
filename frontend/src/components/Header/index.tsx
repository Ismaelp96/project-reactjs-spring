import HeaderDadosImg from "../../assets/img/image-header.png";
import "./styles.css";

function Header() {
  return (
    <>
      <header>
        <div className="container">
          <div className="Logo-header">
            <img
              src={HeaderDadosImg}
              alt="Imagem referenciando banco de dados"
              title="Imagem referenciando banco de dados"
            />
          </div>
          <h1>DSMeta</h1>
          <h3>Desenvolvido por @devsuperior.ig</h3>
        </div>
      </header>
    </>
  );
}

export default Header;
