import React from 'react';
import { Typography, Carousel, Card, Row, Col, Button } from 'antd';

const { Title, Paragraph } = Typography;

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Home: React.FC = () => {
  return (
    <div>
      <Title>白玉パラダイスへようこそ！</Title>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>美味しい白玉の世界</h3>
        </div>
        <div>
          <h3 style={contentStyle}>伝統と革新</h3>
        </div>
        <div>
          <h3 style={contentStyle}>季節の味わい</h3>
        </div>
      </Carousel>
      <Paragraph>
        白玉パラダイスは、日本の伝統的なデザート「白玉」を愛する全ての人のための特別な空間です。
        ここでは、古典的な味わいから現代的なアレンジまで、様々な白玉の魅力をお楽しみいただけます。
      </Paragraph>
      <Row gutter={16}>
        <Col span={8}>
          <Card title="今月のおすすめ" extra={<Button type="link">詳細</Button>}>
            抹茶あんみつ白玉
          </Card>
        </Col>
        <Col span={8}>
          <Card title="新商品情報" extra={<Button type="link">詳細</Button>}>
            ティラミス風白玉パフェ
          </Card>
        </Col>
        <Col span={8}>
          <Card title="イベント" extra={<Button type="link">詳細</Button>}>
            白玉作り体験教室 開催中！
          </Card>
        </Col>
      </Row>
    </div>
  );
};

export default Home;
