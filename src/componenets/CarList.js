import { useSelector, useDispatch} from "react-redux"
import { createSelector } from "@reduxjs/toolkit";
import { removeCar } from "../store";

const memoizedCars = createSelector(
  [(state) => state.cars.data, (state) => state.cars.searchTerm],
  (data, searchTerm) =>
   data.filter((car) =>
    car.name.toLowerCase().includes(searchTerm.toLowerCase())
   )
);
const CarList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(memoizedCars);
  const name = useSelector((state)=> state.form.name);
 
  const handleCarDelete = (car) => {
    dispatch(removeCar(car.id))
  }
  
  const renderedCars = cars.map((car)=>{
    const bold = name && car.name.toLowerCase().includes(name.toLowerCase()); 
    return(
      <div key={car.id} className={`panel ${bold && 'has-text-weight-bold'}`}>
        <p>
          {car.name} - ${car.cost}
        </p>
        <button 
        className="button is-danger"
        onClick={()=> handleCarDelete(car)}>
          Delete
        </button>
      </div>
    )
  });
  return (
    <div>{renderedCars}</div>
  )
}

export default CarList