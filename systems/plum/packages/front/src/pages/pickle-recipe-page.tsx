import React from 'react';
import { Typography, Steps, Card, Row, Col } from 'antd';

const { Title, Paragraph } = Typography;
const { Step } = Steps;

const picklingSteps = [
  {
    title: '梅の選別と洗浄',
    description: '青梅を選び、水で洗います。傷んでいる梅は取り除きます。'
  },
  {
    title: '塩漬け',
    description: '梅の重量の20%程度の塩を用意し、梅と塩を交互に重ねていきます。'
  },
  {
    title: '重石を乗せる',
    description: '梅の重量の1.5倍程度の重石を乗せ、冷暗所で約3週間漬け込みます。'
  },
  {
    title: '天日干し',
    description: '梅を取り出し、天日で3日程度干します。夜は室内に取り込みます。'
  },
  {
    title: '再び漬け込む',
    description: '干した梅を再び容器に戻し、冷暗所で1〜2ヶ月熟成させます。'
  },
  {
    title: '完成',
    description: '好みの酸味になったら完成です。清潔な容器に移し替えて保存します。'
  }
];

const arrangedRecipes = [
  {
    title: 'はちみつ梅',
    description: '完成した梅干しをはちみつに漬け込み、まろやかな甘酸っぱさを楽しみます。'
  },
  {
    title: '紫蘇梅',
    description: '塩漬けの際に赤紫蘇を一緒に漬け込み、美しい色と香りをつけます。'
  },
  {
    title: '梅肉ペースト',
    description: '完成した梅干しの種を取り除き、ペースト状にして調味料として使用します。'
  }
];

function PlumPickleRecipePage() {
  return (
    <div className="site-layout-content" style={{ background: '#fff', padding: 24, minHeight: 280 }}>
      <Title level={2}>梅干しレシピ</Title>
      <Paragraph>
        伝統的な保存食である梅干しは、自家製で作ることができます。以下は基本的な梅干しの作り方です。
      </Paragraph>
      
      <Steps direction="vertical" current={-1}>
        {picklingSteps.map((step, index) => (
          <Step key={index} title={step.title} description={step.description} />
        ))}
      </Steps>

      <Title level={3} style={{ marginTop: 32 }}>アレンジレシピ</Title>
      <Row gutter={[16, 16]}>
        {arrangedRecipes.map((recipe, index) => (
          <Col xs={24} sm={8} key={index}>
            <Card title={recipe.title}>
              <Paragraph>{recipe.description}</Paragraph>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
}

export default PlumPickleRecipePage;
