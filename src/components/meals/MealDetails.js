import React from 'react'
import { Row, Col, Typography, Card, Tag, Button } from 'antd';

const { Title, Text } = Typography;

const MealDetails = ({ mealData, setVisibleForm }) => {
  
  return (
    <Row gutter={16} className='m-5'>
      <Col xs={24} sm={24} md={7}>
        <Card
          cover={<img src={mealData?.image} alt={mealData?.name} />}
          style={{ height: '100%' }}
        >
          <Title level={4}>{mealData?.name}</Title>
        </Card>
      </Col>

      <Col xs={24} sm={24} md={17}  >
        <div style={{ padding: '16px' }}>
          <Title level={3}>Description</Title>
          <Text>{mealData?.description}</Text>

          <Title level={3}>Ingredients</Title>
          <ul>
            {mealData.ingredients && mealData?.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient}</li>
            ))}
          </ul>

          {mealData.tags && <Title level={3}>Tags</Title>}
          <div>
            {mealData.tags && mealData.tags.map((tag, index) => (
              <Tag key={index}>{tag}</Tag>
            ))}
          </div>
        </div>
        <Button type="primary" className="float-right" onClick={()=>setVisibleForm(true)}>
            Checkout
        </Button>
      </Col>
    </Row>
  );
};

export default MealDetails