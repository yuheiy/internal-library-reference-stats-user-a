import React from 'react';
import { Typography, Card, Row, Col, Statistic } from 'antd';
import { HeartOutlined, EyeOutlined, BugOutlined, ThunderboltOutlined } from '@ant-design/icons';

const { Title, Paragraph } = Typography;

const healthBenefits = [
  {
    title: '抗酸化作用',
    content: '梅に含まれるポリフェノールは強い抗酸化作用を持ち、体内の活性酸素を除去し、細胞の損傷を防ぎます。',
    icon: <HeartOutlined style={{ fontSize: '24px', color: '#ff4d4f' }} />
  },
  {
    title: '疲労回復',
    content: 'クエン酸が豊富に含まれており、疲労回復や運動パフォーマンスの向上に役立ちます。',
    icon: <ThunderboltOutlined style={{ fontSize: '24px', color: '#faad14' }} />
  },
  {
    title: '整腸作用',
    content: '食物繊維が豊富で、腸内環境を整え、便秘の改善に効果があります。',
    icon: <BugOutlined style={{ fontSize: '24px', color: '#52c41a' }} />
  },
  {
    title: '目の健康',
    content: 'ビタミンAが豊富で、目の健康維持や夜間視力の改善に役立ちます。',
    icon: <EyeOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
  }
];

const nutritionFacts = [
  { title: 'カロリー', value: 33, suffix: 'kcal' },
  { title: 'タンパク質', value: 0.7, suffix: 'g' },
  { title: '脂質', value: 0.1, suffix: 'g' },
  { title: '炭水化物', value: 8.7, suffix: 'g' },
  { title: 'ビタミンC', value: 6, suffix: 'mg' },
  { title: 'カリウム', value: 140, suffix: 'mg' }
];

function PlumHealthBenefitsPage() {
  return (
    <div className="site-layout-content" style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      <Title level={2}>梅の健康効果</Title>
      <Paragraph>
        梅は古くから健康食品として珍重されてきました。現代の研究でも、その多様な健康効果が明らかになっています。
      </Paragraph>
      
      <Row gutter={[16, 16]}>
        {healthBenefits.map((benefit, index) => (
          <Col xs={24} sm={12} key={index}>
            <Card title={<><span style={{ marginRight: 8 }}>{benefit.icon}</span>{benefit.title}</>}>
              <Paragraph>{benefit.content}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>

      <Title level={3} style={{ marginTop: 32 }}>栄養成分（梅100gあたり）</Title>
      <Row gutter={[16, 16]}>
        {nutritionFacts.map((fact, index) => (
          <Col xs={12} sm={8} md={4} key={index}>
            <Card>
              <Statistic title={fact.title} value={fact.value} suffix={fact.suffix} />
            </Card>
          </Col>
        ))}
      </Row>

      <Paragraph style={{ marginTop: 32 }}>
        ※ 上記の栄養成分は平均的な値であり、品種や栽培条件によって多少の差があります。
      </Paragraph>
    </div>
  );
}

export default PlumHealthBenefitsPage;
