import React from 'react';
import { Row, Col } from 'antd';
import MealCard from './MealCard';

const MealList = ({ meals, setVisibleForm }) => {

  return (
    <Row gutter={[16, 16]} style={{ margin: '30px' }}>
      {meals.map((item) => (
        <Col xs={24} sm={12} md={6} lg={6} key={item.id}>
          <MealCard id={item.id} name={item.name} sourceLink={item.sourceLink} youtubeLink={item.youtubeLink} imageSrc={item.image} setVisibleForm={setVisibleForm} />
        </Col>
      ))}
    </Row>
  );
};


export default MealList;
