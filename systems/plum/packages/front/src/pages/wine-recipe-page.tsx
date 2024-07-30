import React from 'react';
import { Typography, Timeline, Card, Row, Col, List } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const plumWineSteps = [
  {
    title: '材料の準備',
    content: '青梅1kg、氷砂糖500g、ホワイトリカー1.8Lを用意します。'
  },
  {
    title: '梅の下処理',
    content: '梅を水で洗い、へたを取り除きます。水気をよく拭き取ります。'
  },
  {
    title: '漬け込み開始',
    content: '清潔な広口瓶に梅と氷砂糖を交互に層にして入れ、最後にホワイトリカーを注ぎます。'
  },
  {
    title: '保存',
    content: '瓶の蓋をしっかり閉め、冷暗所で保存します。'
  },
  {
    title: '熟成',
    content: '時々瓶を揺らして氷砂糖を溶かします。最低3ヶ月は熟成させます。'
  },
  {
    title: '完成',
    content: '熟成後、梅を取り出し、別の容器に漉して保存します。'
  }
];

const variations = [
  {
    title: 'はちみつ梅酒',
    description: '氷砂糖の代わりにはちみつを使用します。まろやかな甘みが特徴です。'
  },
  {
    title: '紫蘇梅酒',
    description: '漬け込み時に紫蘇を加えます。美しい色と爽やかな香りが楽しめます。'
  },
  {
    title: 'ブランデー梅酒',
    description: 'ホワイトリカーの代わりにブランデーを使用します。より深みのある味わいになります。'
  }
];

const tips = [
  '梅は傷のない、完熟する前の硬めのものを選びましょう。',
  '漬け込む容器は必ず消毒してから使用してください。',
  '漬け込み期間が長いほど、まろやかな味わいになります。',
  '梅酒に使用した梅は、梅ジャムや梅シロップなどに再利用できます。'
];

function PlumWineRecipePage() {
  return (
    <div className="site-layout-content" style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      <Title level={2}>梅酒の作り方</Title>
      <Paragraph>
        家庭で簡単に作れる梅酒は、日本の伝統的なお酒です。以下は基本的な梅酒の作り方です。
      </Paragraph>
      
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Timeline mode="left">
            {plumWineSteps.map((step, index) => (
              <Timeline.Item key={index} label={step.title}>
                {step.content}
              </Timeline.Item>
            ))}
          </Timeline>
        </Col>
        <Col xs={24} md={12}>
          <Card title="梅酒のバリエーション" style={{ marginBottom: 16 }}>
            <List
              dataSource={variations}
              renderItem={item => (
                <List.Item>
                  <List.Item.Meta
                    title={item.title}
                    description={item.description}
                  />
                </List.Item>
              )}
            />
          </Card>
          <Card title="梅酒作りのコツ">
            <List
              dataSource={tips}
              renderItem={item => (
                <List.Item>
                  <ClockCircleOutlined style={{ marginRight: 8 }} />
                  {item}
                </List.Item>
              )}
            />
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default PlumWineRecipePage;
