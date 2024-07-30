import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import { HomeOutlined, InfoCircleOutlined, ExperimentOutlined, BookOutlined, CalendarOutlined, HeartOutlined, PictureOutlined, MailOutlined } from '@ant-design/icons';

import HomePage from './HomePage';
import PlumTypesPage from './PlumTypesPage';
import PlumCultivationPage from './PlumCultivationPage';
import PlumPickleRecipePage from './PlumPickleRecipePage';
import PlumWineRecipePage from './PlumWineRecipePage';
import PlumHistoryPage from './PlumHistoryPage';
import PlumHealthBenefitsPage from './PlumHealthBenefitsPage';
import PlumFestivalPage from './PlumFestivalPage';
import PlumGalleryPage from './PlumGalleryPage';
import PlumContactPage from './PlumContactPage';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Router>
      <Layout className="layout" style={{ minHeight: '100vh' }}>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeOutlined />}>
              <Link to="/">ホーム</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<InfoCircleOutlined />}>
              <Link to="/types">梅の種類</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<ExperimentOutlined />}>
              <Link to="/cultivation">栽培方法</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<BookOutlined />}>
              <Link to="/history">梅の歴史</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<HeartOutlined />}>
              <Link to="/health">健康効果</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<CalendarOutlined />}>
              <Link to="/festivals">梅祭り</Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<PictureOutlined />}>
              <Link to="/gallery">ギャラリー</Link>
            </Menu.Item>
            <Menu.Item key="8" icon={<MailOutlined />}>
              <Link to="/contact">お問い合わせ</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/types" component={PlumTypesPage} />
            <Route path="/cultivation" component={PlumCultivationPage} />
            <Route path="/pickle" component={PlumPickleRecipePage} />
            <Route path="/wine" component={PlumWineRecipePage} />
            <Route path="/history" component={PlumHistoryPage} />
            <Route path="/health" component={PlumHealthBenefitsPage} />
            <Route path="/festivals" component={PlumFestivalPage} />
            <Route path="/gallery" component={PlumGalleryPage} />
            <Route path="/contact" component={PlumContactPage} />
          </Switch>
        </Content>
        <Footer style={{ textAlign: 'center' }}>梅テーマのウェブサイト ©2024 Created with Ant Design</Footer>
      </Layout>
    </Router>
  );
}

export default App;
