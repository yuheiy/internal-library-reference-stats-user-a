import React from 'react';
import { Typography, Card, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;

const plumTypes = [
  {
    name: '南高梅',
    description: '和歌山県で生まれた品種で、大きくて肉厚、糖度が高いのが特徴です。',
    image: '/api/placeholder/200/150'
  },
  {
    name: '白加賀',
    description: '石川県原産の品種で、果肉が柔らかく、独特の香りがあります。',
    image: '/api/placeholder/200/150'
  },
  {
    name: '小梅',
    description: '小さくて酸味が強いのが特徴で、梅干しや梅酒作りに適しています。',
    image: '/api/placeholder/200/150'
  },
  {
    name: '豊後梅',
    description: '大分県原産の品種で、果実が大きく、果肉が厚いのが特徴です。',
    image: '/api/placeholder/200/150'
  },
  {
    name: '青梅',
    description: '熟す前に収穫される梅で、酸味が強く、梅酒や梅シロップ作りに適しています。',
    image: '/api/placeholder/200/150'
  },
  {
    name: '紅南高',
    description: '南高梅の枝変わり品種で、果皮が赤く色づくのが特徴です。',
    image: '/api/placeholder/200/150'
  }
];

function PlumTypesPage() {
  return (
    <div className="site-layout-content" style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      <Title level={2}>梅の種類</Title>
      <Paragraph>
        梅には多くの品種があり、それぞれに特徴があります。ここでは代表的な梅の品種をご紹介します。
      </Paragraph>
      <Row gutter={[16, 16]}>
        {plumTypes.map((plum, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              hoverable
              cover={<img alt={plum.name} src={plum.image} />}
              title={plum.name}
            >
              <Paragraph>{plum.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default PlumTypesPage;
