import { ChangeEvent, FormEvent, useState } from "react";
import { categories } from "../data/categories";
import { Activity } from "../types/Activity";

export default function Form() {
  const [activity, setActivity] = useState<Activity>({
    category: 1,
    name: "",
    calories: 0,
  });

  const handleChange = (
    event: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement>
  ) => {
    const isNumberField = ["category", "calories"].includes(event.target.id);
    console.log(isNumberField);

    setActivity({
      ...activity,
      [event.target.id]: isNumberField
        ? +event.target.value
        : event.target.value,
    });
  };

  const isValidActivity = () => {
    const { name, calories } = activity;
    return name.trim() !== "" && calories > 0;
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(event);
  };

  return (
    <>
      <form
        className="space-y-5 bg-white shadow p-10 rounded-lg"
        onSubmit={handleSubmit}
      >
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
          value={
            activity.category === 1 ? "Guardar comida" : "Guardar ejercicio"
          }
          disabled={!isValidActivity()}
        />
      </form>
    </>
  );
}
