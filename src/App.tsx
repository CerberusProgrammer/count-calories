import Form from "./components/Form";
import Header from "./components/Header";

export default function App() {
  return (
    <>
      <Header></Header>

      <div>
        <section className="bg-lime-500 py-20 px-5">
          <div className="max-w-4xl mx-auto">
            <Form></Form>
          </div>
        </section>
      </div>
    </>
  );
}
