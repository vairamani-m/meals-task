import React, { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import MealDetails from '../components/meals/MealDetails'
import { getMealById } from '../redux/actions/mealsActions';
import Loader from '../components/Loader';
import ShippingForm from '../components/ShippingForm';
import MainHeader from '../components/header/MainHeader';
import OrderInformation from '../components/OrderInformation';

const DetailPage = () => {

  const [visibleForm, setVisibleForm] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false);
  const [orderInfo, setOrderInfo] = useState(null);

  const { id } = useParams()

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { meals } = useSelector(state => state)

  const handlePurchase = (values) => {
    setOrderInfo(values);
    setShowConfirmation(true);
  };

  const handleCloseModal = () => {
    setVisibleForm(false);
  };

  const handleBack = () => {
    setShowConfirmation(false);
    navigate('/')

  };
  
  useEffect(() => {
    dispatch(getMealById(id))
  }, [id])


  if(meals.loading){
    return <Loader />
  }

  const containerStyle = {
    background: '#fff',        
    padding: '16px',           
    borderRadius: '8px',       
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
    margin:'20px'
 }
  
  return (
        <>
            <MainHeader isHomePage={false} />
            <div style={containerStyle}>
                {!showConfirmation &&<MealDetails mealData={meals.meal} setVisibleForm={setVisibleForm} />}
                {!showConfirmation && <ShippingForm  visibleForm={visibleForm} onCancel={handleCloseModal}  onCallBack={handlePurchase} />}
                {showConfirmation && <OrderInformation orderInfo={orderInfo} onBack={handleBack} />}
            </div>
        </>
  )
}

export default DetailPage