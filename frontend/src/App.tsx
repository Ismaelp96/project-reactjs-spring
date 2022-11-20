import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Header from "./components/Header";
import CardVendas from "./components/CardVendas";

function App() {
  return (
    <>
      <ToastContainer />
      <Header />
      <main>
        <section id="sales">
          <CardVendas />
        </section>
      </main>
    </>
  );
}

export default App;
