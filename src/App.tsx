import { useReducer } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import { activityReducer, initialState } from "./reducers/activityReducer";
import Activities from "./components/Activities";

export default function App() {
  const [state, dispatch] = useReducer(activityReducer, initialState);

  return (
    <>
      <Header></Header>

      <section className="bg-lime-500 py-20 px-5">
        <div className="max-w-4xl mx-auto">
          <Form dispatch={dispatch}></Form>
        </div>
      </section>

      <section className="p-10 mx-auto max-w-4xl">
        <Activities activities={state.activities}></Activities>
      </section>
    </>
  );
}
