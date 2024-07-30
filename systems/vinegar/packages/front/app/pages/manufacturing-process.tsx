import React from 'react';
import { Steps, Typography, Card } from 'antd';

const { Title, Paragraph } = Typography;
const { Step } = Steps;

const ManufacturingProcess: React.FC = () => {
  return (
    <div>
      <Title>Vinegar Manufacturing Process</Title>
      <Paragraph>
        Learn about the fascinating process of how vinegar is made, from raw ingredients to the final product.
      </Paragraph>
      <Card>
        <Steps direction="vertical" current={-1}>
          <Step 
            title="Raw Material Selection" 
            description="Choose high-quality fruits, grains, or other fermentable sources."
          />
          <Step 
            title="Alcoholic Fermentation" 
            description="Convert sugars into alcohol using yeast."
          />
          <Step 
            title="Acetic Acid Fermentation" 
            description="Convert alcohol into acetic acid using acetic acid bacteria."
          />
          <Step 
            title="Aging" 
            description="Optional step for some vinegars to develop complex flavors."
          />
          <Step 
            title="Filtration" 
            description="Remove sediment and clarify the vinegar."
          />
          <Step 
            title="Bottling" 
            description="Package the vinegar for distribution and sale."
          />
        </Steps>
      </Card>
    </div>
  );
}

export default ManufacturingProcess;
