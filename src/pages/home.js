import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../components/Loader';
import MealList from '../components/meals/MealList';
import MainHeader from '../components/header/MainHeader';
import { getMeals } from '../redux/actions/mealsActions';

const Home = () => {

  const dispatch = useDispatch()
  const { meals } = useSelector(state => state)
  
  useEffect(()=>{
    dispatch(getMeals())
  },[])

  if(meals.loading){
    return <Loader />
  }
  
  const centerDiv = {
    position:'absolute', 
    top:'50%', 
    left:'50%', 
    marginRight:'-50%', 
    transform:'translate(-50%, -50%)'
  }

  return (
    <>
     <MainHeader isHomePage={true} />
     {
        meals.mealsData.length > 0 ?
        <MealList meals={meals.mealsData} />
        :
         <div>
            <h1 style={centerDiv}>No Data Found</h1>
        </div>
     }
    </>
  )
}

export default Home