import React from 'react';
import { Typography, Form, Input, Button, Checkbox } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const { Title } = Typography;

interface LoginFormValues {
  username: string;
  password: string;
  remember: boolean;
}

const Login: React.FC = () => {
  const onFinish = (values: LoginFormValues) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div>
      <Title>ログイン</Title>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: 'ユーザー名を入力してください！',
            },
          ]}
        >
          <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="ユーザー名" />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: 'パスワードを入力してください！',
            },
          ]}
        >
          <Input
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="パスワード"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>ログイン状態を保持する</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            パスワードをお忘れの方
          </a>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="login-form-button">
            ログイン
          </Button>
          Or <a href="">今すぐ登録！</a>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
