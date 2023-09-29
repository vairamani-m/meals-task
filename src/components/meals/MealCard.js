import React from 'react'
import { Card } from 'antd';
import { Link  } from 'react-router-dom';
import { Typography } from 'antd';

const { Link : AntdLink } = Typography;

const { Meta } = Card;

const MealCard = ({ id, name, sourceLink, youtubeLink, imageSrc }) => {
    return (
        <Card
          hoverable
          cover={
            <Link to={`/meals/${id}`}>
              <img 
                style={{
                  width:'100%',
                  height:'100%',
                  objectFit:'cover'
                }} 
              alt={name} src={imageSrc} />
            </Link>
          }
        >
           <Link to={`/meals/${id}`}><Meta title={name} /></Link>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop:'10px' }}>
            <AntdLink href={sourceLink} target='_blank'>Source Link</AntdLink>
            <AntdLink href={youtubeLink} target='_blank'>Youtube Link</AntdLink>
          </div>
        </Card>
      );
}

export default MealCard