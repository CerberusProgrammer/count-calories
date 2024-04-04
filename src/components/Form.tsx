import { ChangeEvent, useState } from "react";
import { categories } from "../data/categories";

export default function Form() {
  const [activity, setActivity] = useState({
    category: 1,
    name: "",
    calories: 0,
  });

  const handleChangeCategory = (event: ChangeEvent<HTMLSelectElement>) => {
    setActivity({
      ...activity,
      [event.target.id]: event.target.value,
    });
  };

  const handleChange = (
    event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    setActivity({
      ...activity,
      [event.target.id]: event.target.value,
    });
  };

  return (
    <>
      <form className="space-y-5 bg-white shadow p-10 rounded-lg">
        <div className="grid grid-cols-1 gap-3">
          {activity.name}
          <label htmlFor="category" className="font-bold">
            Categoria:
          </label>
          <select
            id="category"
            value={activity.category}
            onChange={handleChange}
            className="border border-slate-300 p-2 rounded-lg w-full bg-white"
          >
            {categories.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="name" className="font-bold">
            Actividad:
          </label>
          <input
            id="name"
            type="text"
            value={activity.name}
            onChange={handleChange}
            className="border border-slate-300 p-2 rounded-lg"
            placeholder="Ej. Jugo de naranja"
          />
        </div>

        <div className="grid grid-cols-1 gap-3">
          <label htmlFor="calories" className="font-bold">
            Calorias:
          </label>
          <input
            id="calories"
            value={activity.calories}
            onChange={handleChange}
            type="number"
            className="border border-slate-300 p-2 rounded-lg"
            placeholder="Ej. 300 o 500 calorias"
          />
        </div>

        <input
          type="submit"
          className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold text-white rounded-md uppercase"
          value="Guardar comida o Guardar ejercicio"
        />
      </form>
    </>
  );
}
