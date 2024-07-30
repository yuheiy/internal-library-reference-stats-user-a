import React from 'react';
import { Typography, Form, Input, Button } from 'antd';

const { Title } = Typography;
const { TextArea } = Input;

interface ContactFormValues {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const onFinish = (values: ContactFormValues) => {
    console.log('Received values of form: ', values);
  };

  return (
    <div>
      <Title>お問い合わせ</Title>
      <Form name="contact" onFinish={onFinish} layout="vertical">
        <Form.Item
          name="name"
          label="お名前"
          rules={[{ required: true, message: 'お名前を入力してください' }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="email"
          label="メールアドレス"
          rules={[
            { required: true, message: 'メールアドレスを入力してください' },
            { type: 'email', message: '有効なメールアドレスを入力してください' },
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          name="message"
          label="メッセージ"
          rules={[{ required: true, message: 'メッセージを入力してください' }]}
        >
          <TextArea rows={4} />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit">
            送信
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Contact;
