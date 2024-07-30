import React from 'react';
import { Collapse, Timeline, Typography, Card, Row, Col } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';

const { Panel } = Collapse;
const { Title, Paragraph } = Typography;

const HealthBenefits: React.FC = () => {
  return (
    <div>
      <Title>Health Benefits of Vinegar</Title>
      <Paragraph>
        Vinegar has been used for centuries not just as a culinary ingredient, but also for its potential health benefits. Here are some of the ways vinegar might contribute to your well-being:
      </Paragraph>

      <Collapse defaultActiveKey={['1']}>
        <Panel header="Weight Management" key="1">
          <Paragraph>
            Some studies suggest that vinegar may help with weight loss by increasing feelings of fullness and reducing calorie intake.
          </Paragraph>
        </Panel>
        <Panel header="Blood Sugar Control" key="2">
          <Paragraph>
            Vinegar may help improve insulin sensitivity and lower blood sugar responses after meals, which could be beneficial for people with diabetes.
          </Paragraph>
        </Panel>
        <Panel header="Heart Health" key="3">
          <Paragraph>
            Some research indicates that vinegar might help reduce cholesterol levels and lower blood pressure, potentially reducing the risk of heart disease.
          </Paragraph>
        </Panel>
        <Panel header="Digestive Health" key="4">
          <Paragraph>
            The acetic acid in vinegar may aid digestion by increasing the acidity in the stomach, which can help break down food more effectively.
          </Paragraph>
        </Panel>
        <Panel header="Skin Health" key="5">
          <Paragraph>
            When applied topically, diluted vinegar may help balance the skin's pH and has antimicrobial properties that could help with certain skin conditions.
          </Paragraph>
        </Panel>
      </Collapse>

      <Title level={2} style={{ marginTop: 40 }}>Historical Uses of Vinegar</Title>
      <Row gutter={16}>
        <Col span={12}>
          <Card>
            <Timeline mode="alternate">
              <Timeline.Item>5000 BC - Babylonians use date palm vinegar as food and medicine</Timeline.Item>
              <Timeline.Item color="green">400 BC - Hippocrates prescribes vinegar for various ailments</Timeline.Item>
              <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                10th Century AD - Sung Tse develops hand washing with sulfur and vinegar to prevent infections
              </Timeline.Item>
              <Timeline.Item color="red">18th Century - Vinegar used to treat wounds during American Civil War</Timeline.Item>
              <Timeline.Item>1920s - Apple cider vinegar popularized as a health tonic</Timeline.Item>
              <Timeline.Item dot={<ClockCircleOutlined style={{ fontSize: '16px' }} />}>
                Present Day - Ongoing research into vinegar's potential health benefits
              </Timeline.Item>
            </Timeline>
          </Card>
        </Col>
        <Col span={12}>
          <Paragraph>
            Vinegar has a rich history of use in medicine and health practices. From ancient civilizations to modern times, people have turned to vinegar for its potential healing properties. While many historical uses were based on anecdotal evidence, modern science continues to explore the potential benefits of this versatile substance.
          </Paragraph>
          <Paragraph>
            It's important to note that while vinegar shows promise in many areas of health, more research is needed to fully understand its effects. Always consult with a healthcare professional before using vinegar for medicinal purposes, especially if you have any existing health conditions or are taking medications.
          </Paragraph>
        </Col>
      </Row>
    </div>
  );
}

export default HealthBenefits;
