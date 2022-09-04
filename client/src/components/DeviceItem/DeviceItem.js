import React from 'react';
import { Card, Col } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import { useNavigate } from 'react-router-dom';
import star from '../../assets/star.png';
import { DEVICE_ROUTE } from '../../utils/consts';
import s from './DeviceItem.module.css';

function DeviceItem({ device }) {
  const navigate = useNavigate();

  const handleClickDevice = () => {
    navigate(`${DEVICE_ROUTE}/${device.id}`);
  };

  return (
    <Col md={3} className="mt-3" onClick={handleClickDevice}>
      <Card className={s.card}>
        <Image className={s.img} src={process.env.REACT_APP_API_URL + device.img} />
        <div className="text-black-50 mt-1 d-flex justify-content-between align-items-center">
          <div>{device.brandId}</div>
          <div className="d-flex align-items-center">
            <div>{device.rating}</div>
            <Image width={18} height={18} src={star} />
          </div>
        </div>
        <div>{device.name}</div>
      </Card>
    </Col>
  );
}

export default DeviceItem;
