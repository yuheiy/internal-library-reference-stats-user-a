import React from 'react';
import { Typography, List, Avatar, Rate } from 'antd';

const { Title } = Typography;

interface ReviewItem {
  title: string;
  description: string;
  avatar: string;
  rating: number;
}

const data: ReviewItem[] = [
  {
    title: '最高の白玉！',
    description: 'とても美味しかったです。また来ます！',
    avatar: 'https://joeschmoe.io/api/v1/random',
    rating: 5,
  },
  {
    title: '懐かしい味',
    description: '祖母の作る白玉を思い出しました。',
    avatar: 'https://joeschmoe.io/api/v1/random',
    rating: 4,
  },
  {
    title: '新しいアレンジも良い',
    description: '伝統的な味わいも良いですが、新しいアレンジも楽しめました。',
    avatar: 'https://joeschmoe.io/api/v1/random',
    rating: 4.5,
  },
];

const Reviews: React.FC = () => {
  return (
    <div>
      <Title>お客様の声</Title>
      <List
        itemLayout="horizontal"
        dataSource={data}
        renderItem={(item: ReviewItem) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src={item.avatar} />}
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.description}
            />
            <Rate disabled defaultValue={item.rating} />
          </List.Item>
        )}
      />
    </div>
  );
};

export default Reviews;
