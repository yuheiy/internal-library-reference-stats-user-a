import React from 'react';
import { Typography, List, Card, Button } from 'antd';

const { Title } = Typography;

interface ShopItem {
  title: string;
  description: string;
  price: string;
}

const data: ShopItem[] = [
  {
    title: '定番白玉ぜんざい',
    description: '自家製あんこと一緒にお楽しみください',
    price: '¥500',
  },
  {
    title: '抹茶白玉パフェ',
    description: '濃厚な抹茶の味わいと白玉のハーモニー',
    price: '¥800',
  },
  {
    title: 'フルーツ白玉',
    description: '季節のフルーツと一緒に',
    price: '¥700',
  },
  {
    title: '白玉アイス',
    description: 'さっぱりとした味わいの夏の定番',
    price: '¥600',
  },
];

const Shop: React.FC = () => {
  return (
    <div>
      <Title>ショップ</Title>
      <List
        grid={{ gutter: 16, column: 4 }}
        dataSource={data}
        renderItem={(item: ShopItem) => (
          <List.Item>
            <Card title={item.title} extra={<Button type="primary">購入</Button>}>
              {item.description}
              <br />
              {item.price}
            </Card>
          </List.Item>
        )}
      />
    </div>
  );
};

export default Shop;
