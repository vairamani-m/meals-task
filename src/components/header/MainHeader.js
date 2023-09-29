import React from 'react';
import { Layout, Input } from 'antd';
import { BellOutlined, ArrowLeftOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Space } from 'antd';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getMeals } from '../../redux/actions/mealsActions';

const { Header } = Layout;
const { Search } = Input;

const MainHeader = ({ isHomePage }) => {
  const dispatch = useDispatch()
  return (
    <Header style={{ backgroundColor: '#f2f2f2', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        { isHomePage ?
        <Search
          placeholder="Search meals..."
          onSearch={(value) => {
            dispatch(getMeals(value))
          }}
          style={{ width: 200 }}
        /> :
        <Link to="/"><span style={{ fontSize: '40px' }}><ArrowLeftOutlined /></span></Link>
        }
      </div>
      
      <Space>
        <Avatar
          icon={<BellOutlined />}
          style={{cursor:'pointer'}}
        />
        <Avatar
          style={{
            backgroundColor: '#87d068',
          }}
          icon={<UserOutlined />}
        />
      </Space>
    </Header>
  );
};

export default MainHeader;