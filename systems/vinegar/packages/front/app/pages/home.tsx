import React from 'react';
import { Typography, Carousel, Card, Row, Col } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const Home: React.FC = () => {
  return (
    <div>
      <Carousel autoplay>
        <div>
          <h3 style={contentStyle}>Welcome to VinegarVista</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Discover the World of Vinegar</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Health Benefits of Vinegar</h3>
        </div>
        <div>
          <h3 style={contentStyle}>Explore Our Recipes</h3>
        </div>
      </Carousel>

      <Title level={2} style={{ marginTop: 40 }}>Featured Products</Title>
      <Row gutter={16}>
        <Col span={6}>
          <Card
            hoverable
            cover={<img alt="Balsamic Vinegar" src="https://example.com/balsamic.jpg" />}
          >
            <Card.Meta title="Aged Balsamic Vinegar" description="Rich and complex flavor" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            cover={<img alt="Apple Cider Vinegar" src="https://example.com/applecider.jpg" />}
          >
            <Card.Meta title="Organic Apple Cider Vinegar" description="With the mother" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            cover={<img alt="Rice Vinegar" src="https://example.com/rice.jpg" />}
          >
            <Card.Meta title="Japanese Rice Vinegar" description="Mild and sweet" />
          </Card>
        </Col>
        <Col span={6}>
          <Card
            hoverable
            cover={<img alt="Red Wine Vinegar" src="https://example.com/redwine.jpg" />}
          >
            <Card.Meta title="Red Wine Vinegar" description="Bold and tangy" />
          </Card>
        </Col>
      </Row>

      <Title level={2} style={{ marginTop: 40 }}>Latest Blog Posts</Title>
      <Row gutter={16}>
        <Col span={8}>
          <Card hoverable>
            <Title level={4}>10 Surprising Uses for Vinegar</Title>
            <Paragraph>Discover unconventional ways to use vinegar in your daily life...</Paragraph>
            <a href="/blog/surprising-uses">Read more <ArrowRightOutlined /></a>
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable>
            <Title level={4}>The Health Benefits of Apple Cider Vinegar</Title>
            <Paragraph>Learn about the numerous health benefits of consuming apple cider vinegar...</Paragraph>
            <a href="/blog/acv-benefits">Read more <ArrowRightOutlined /></a>
          </Card>
        </Col>
        <Col span={8}>
          <Card hoverable>
            <Title level={4}>Vinegar in Cuisine: A Global Perspective</Title>
            <Paragraph>Explore how different cultures use vinegar in their traditional dishes...</Paragraph>
            <a href="/blog/vinegar-cuisine">Read more <ArrowRightOutlined /></a>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

export default Home;
