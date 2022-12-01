import React from 'react'
import { useNavigate } from 'react-router-dom';

const Mealitem = ({ data }) => {
    
    let navigate=useNavigate()
    return (
        <>
            {
                (!data) ? "Not found" : data.map(item => {
                    return (
                        <div className='card' key={item.id} onClick={()=>{navigate(`/${item.idMeal}`)}}>
                            <img src={item.strMealThumb} alt='' />
                            <h3>{item.strMeal}</h3>

                        </div>

                    )
                })
            }


        </>
    )
}

export default Mealitem;