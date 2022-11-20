
import "./Components/style.css"
import Meal from './Components/Meal';
import { Routes, Route } from "react-router-dom";
import Recipieinfo from "./Components/Recipieinfo";

function App() {
  return (
    <div >
      <Routes>
        <Route path="/" element={<Meal />} />
        <Route path="/:MealId" element={<Recipieinfo/>}/>
      </Routes>


    </div>
  );
}

export default App;
