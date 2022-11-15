import Header from "./components/Header";
import CardVendas from "./components/CardVendas";

function App() {
  return (
    <>
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
