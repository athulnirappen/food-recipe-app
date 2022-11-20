import React, { useEffect, useState } from 'react'
import Mealitem from './Mealitem';
import Mealrecipeindex from './Mealrecipeindex';


const Meal = () => {
  const[url,setUrl]=useState("https:/www.themealdb.com/api/json/v1/1/search.php?f=a");
  const[item,setItem]=useState()
  const[show,setshow]=useState(false)
  const[search,setSearch]=useState("");
  useEffect(()=>{
    fetch(url).then(res=>res.json()).then(data=>{
     console.log(data.meals);
      setItem(data.meals)
      setshow(true);
    })

  },[url])

  const setIndex=(alpha)=>{
    setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?f=${alpha}`)

  }


  const searchRecipie=(event)=>{
    if(event.key==="Enter"){
      setUrl(`https:/www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
    }

  }




  return (
    <div className='main'>
        <div className='heading'>
            <h1>Search Your Food Recipe </h1>
            <h4>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor </h4>
        </div>
        <div className='searchbox'>
            <input type="search" className='searchbar' onChange={(e)=>{
              setSearch(e.target.value)
            }} onKeyPress={searchRecipie}/>
        </div>
        <div className='container'>
          {
            show ? <Mealitem data={item}/> :"Not found"
          }
            
        </div>
        <div className='indexcontainer'>
          <Mealrecipeindex alphaIndex={(alpha)=>{
            setIndex(alpha)
          }}/>

        </div>

    </div>
  )
}

export default Meal;

