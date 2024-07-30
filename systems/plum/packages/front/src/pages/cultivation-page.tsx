import React from 'react';
import { Typography, Timeline, Card, Row, Col } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const cultivationSteps = [
  {
    title: '場所の選定',
    content: '日当たりが良く、水はけの良い場所を選びます。梅は寒さに強いですが、強風を避けられる場所が理想的です。'
  },
  {
    title: '土壌の準備',
    content: '植え付け前に、土壌を深く耕し、有機物を混ぜ込みます。pHは6.0〜6.5が適しています。'
  },
  {
    title: '植え付け',
    content: '通常、秋か早春に植え付けを行います。苗木の根を広げ、接ぎ木部分が地表面より少し上になるように植えます。'
  },
  {
    title: '水やり',
    content: '植え付け後は十分な水やりを行います。その後は、土が乾いたら水やりを行う程度で十分です。'
  },
  {
    title: '施肥',
    content: '春と秋に有機肥料を与えます。過度の施肥は避け、バランスの取れた栄養を与えることが重要です。'
  },
  {
    title: '剪定',
    content: '冬の落葉期に主に行います。風通しと日当たりを良くするために、込み合った枝や下向きの枝を取り除きます。'
  },
  {
    title: '病害虫対策',
    content: '定期的に樹を観察し、病気や害虫の早期発見・早期対策を心がけます。必要に応じて、有機農薬を使用します。'
  },
  {
    title: '収穫',
    content: '通常、6月〜7月頃に収穫を行います。完熟前の硬い実を収穫するのが一般的です。'
  }
];

function PlumCultivationPage() {
  return (
    <div className="site-layout-content" style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      <Title level={2}>梅の栽培方法</Title>
      <Paragraph>
        梅の栽培は、適切なケアと知識があれば、家庭でも十分に楽しむことができます。以下は、梅の栽培における主要なステップです。
      </Paragraph>
      
      <Row gutter={[16, 16]}>
        <Col xs={24} md={12}>
          <Timeline mode="left">
            {cultivationSteps.map((step, index) => (
              <Timeline.Item key={index} label={step.title}>
                {step.content}
              </Timeline.Item>
            ))}
          </Timeline>
        </Col>
        <Col xs={24} md={12}>
          <Card title="栽培のポイント" style={{ marginBottom: 16 }}>
            <ul>
              <li>梅は比較的丈夫な果樹ですが、適切なケアが必要です。</li>
              <li>水はけの良い土壌を好みます。</li>
              <li>過度の肥料は逆効果になる可能性があります。</li>
              <li>定期的な剪定で樹形を整えることが重要です。</li>
              <li>病害虫の早期発見・早期対策が大切です。</li>
            </ul>
          </Card>
          <Card title="栽培カレンダー">
            <Timeline mode="left">
              <Timeline.Item color="green" label="春">施肥、新芽の観察</Timeline.Item>
              <Timeline.Item color="red" label="夏">収穫、病害虫対策</Timeline.Item>
              <Timeline.Item color="orange" label="秋">施肥、来年の準備</Timeline.Item>
              <Timeline.Item color="blue" label="冬">剪定、土壌管理</Timeline.Item>
            </Timeline>
          </Card>
        </Col>
      </Row>
    </div>
  );
}

export default PlumCultivationPage;
