import React from 'react';
import { Typography, Table, Button } from 'antd';

const { Title } = Typography;

interface CartItem {
  key: string;
  name: string;
  price: string;
  quantity: number;
  subtotal: string;
}

const columns = [
  {
    title: '商品名',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: '価格',
    dataIndex: 'price',
    key: 'price',
  },
  {
    title: '数量',
    dataIndex: 'quantity',
    key: 'quantity',
  },
  {
    title: '小計',
    dataIndex: 'subtotal',
    key: 'subtotal',
  },
];

const data: CartItem[] = [
  {
    key: '1',
    name: '定番白玉ぜんざい',
    price: '¥500',
    quantity: 2,
    subtotal: '¥1,000',
  },
  {
    key: '2',
    name: '抹茶白玉パフェ',
    price: '¥800',
    quantity: 1,
    subtotal: '¥800',
  },
];

const Cart: React.FC = () => {
  return (
    <div>
      <Title>カート</Title>
      <Table<CartItem> columns={columns} dataSource={data} pagination={false} />
      <div style={{ marginTop: 16, textAlign: 'right' }}>
        <Button type="primary" size="large">
          注文する
        </Button>
      </div>
    </div>
  );
};

export default Cart;
