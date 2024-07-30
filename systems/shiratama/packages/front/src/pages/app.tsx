import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import {
  HomeTwoTone,
  InfoCircleTwoTone,
  ShopTwoTone,
  PictureTwoTone,
  ContactsTwoTone,
  ShoppingCartTwoTone,
  SmileTwoTone,
  SettingTwoTone,
  QuestionCircleTwoTone,
  LoginTwoTone,
} from '@ant-design/icons';

import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Reviews from './pages/Reviews';
import Settings from './pages/Settings';
import FAQ from './pages/FAQ';
import Login from './pages/Login';

const { Header, Content, Footer } = Layout;

const App: React.FC = () => {
  return (
    <Router>
      <Layout className="layout" style={{ minHeight: '100vh' }}>
        <Header>
          <div className="logo" />
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<HomeTwoTone />}>
              <Link to="/">ホーム</Link>
            </Menu.Item>
            <Menu.Item key="2" icon={<InfoCircleTwoTone />}>
              <Link to="/about">About</Link>
            </Menu.Item>
            <Menu.Item key="3" icon={<ShopTwoTone />}>
              <Link to="/shop">ショップ</Link>
            </Menu.Item>
            <Menu.Item key="4" icon={<PictureTwoTone />}>
              <Link to="/gallery">ギャラリー</Link>
            </Menu.Item>
            <Menu.Item key="5" icon={<ContactsTwoTone />}>
              <Link to="/contact">お問い合わせ</Link>
            </Menu.Item>
            <Menu.Item key="6" icon={<ShoppingCartTwoTone />}>
              <Link to="/cart">カート</Link>
            </Menu.Item>
            <Menu.Item key="7" icon={<SmileTwoTone />}>
              <Link to="/reviews">レビュー</Link>
            </Menu.Item>
            <Menu.Item key="8" icon={<SettingTwoTone />}>
              <Link to="/settings">設定</Link>
            </Menu.Item>
            <Menu.Item key="9" icon={<QuestionCircleTwoTone />}>
              <Link to="/faq">FAQ</Link>
            </Menu.Item>
            <Menu.Item key="10" icon={<LoginTwoTone />}>
              <Link to="/login">ログイン</Link>
            </Menu.Item>
          </Menu>
        </Header>
        <Content style={{ padding: '0 50px' }}>
          <div className="site-layout-content" style={{ background: '#fff', padding: 24, minHeight: 280 }}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/shop" component={Shop} />
              <Route path="/gallery" component={Gallery} />
              <Route path="/contact" component={Contact} />
              <Route path="/cart" component={Cart} />
              <Route path="/reviews" component={Reviews} />
              <Route path="/settings" component={Settings} />
              <Route path="/faq" component={FAQ} />
              <Route path="/login" component={Login} />
            </Switch>
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>白玉パラダイス ©2024 Created by Ant Design</Footer>
      </Layout>
    </Router>
  );
};

export default App;
