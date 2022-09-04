import cn from 'classnames';
import { observer } from 'mobx-react-lite';
import React, { useContext } from 'react';
import { Card, Row } from 'react-bootstrap';
import { Context } from '../../context/Context';
import s from './BrandBar.module.css';

const BrandBar = observer(() => {
  const { device } = useContext(Context);

  return (
    <Row className={cn('d-flex', s.row)}>
      {device.brands.map((brand) => (
        <Card
          className={s.card}
          key={brand.id}
          onClick={() => device.setSelectedBrand(brand)}
          border={brand.id === device.selectedBrand.id ? 'danger' : 'light'}
        >
          {brand.name}
        </Card>
      ))}
    </Row>
  );
});

export default BrandBar;
