import React from 'react';
import { Layout, Menu, Typography, Card, Row, Col, Button } from 'antd';
import { HomeOutlined, AppstoreOutlined, HistoryOutlined, HeartOutlined, CalendarOutlined, PictureOutlined, MailOutlined } from '@ant-design/icons';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

function HomePage() {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
          <Menu.Item key="1" icon={<HomeOutlined />}>ホーム</Menu.Item>
          <Menu.Item key="2" icon={<AppstoreOutlined />}>梅の種類</Menu.Item>
          <Menu.Item key="3" icon={<HistoryOutlined />}>梅の歴史</Menu.Item>
          <Menu.Item key="4" icon={<HeartOutlined />}>健康効果</Menu.Item>
          <Menu.Item key="5" icon={<CalendarOutlined />}>梅祭り</Menu.Item>
          <Menu.Item key="6" icon={<PictureOutlined />}>ギャラリー</Menu.Item>
          <Menu.Item key="7" icon={<MailOutlined />}>お問い合わせ</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '0 50px' }}>
        <div className="site-layout-content" style={{ background: '#fff', padding: 24, minHeight: 280 }}>
          <Title>梅の世界へようこそ</Title>
          <Paragraph>
            日本の伝統と文化に深く根付いた梅。その美しさと魅力、そして多様な活用法をご紹介します。
          </Paragraph>
          <Row gutter={16}>
            <Col span={8}>
              <Card title="梅の種類" extra={<Button type="link">詳細</Button>}>
                様々な梅の品種とその特徴をご紹介します。
              </Card>
            </Col>
            <Col span={8}>
              <Card title="梅干しレシピ" extra={<Button type="link">詳細</Button>}>
                伝統的な梅干しの作り方から、現代風アレンジまで。
              </Card>
            </Col>
            <Col span={8}>
              <Card title="梅酒づくり" extra={<Button type="link">詳細</Button>}>
                自家製梅酒の作り方と美味しい飲み方をご紹介。
              </Card>
            </Col>
          </Row>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>梅テーマのウェブサイト ©2024 Created with Ant Design</Footer>
    </Layout>
  );
}

export default HomePage;
