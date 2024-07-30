import React from 'react';
import { Collapse, Typography, Input } from 'antd';

const { Title, Paragraph } = Typography;
const { Panel } = Collapse;
const { Search } = Input;

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "What is vinegar?",
      answer: "Vinegar is a liquid consisting mainly of acetic acid and water, produced through the fermentation of ethanol by acetic acid bacteria."
    },
    {
      question: "How is vinegar made?",
      answer: "Vinegar is made through a two-step fermentation process. First, yeast ferment sugars into alcohol. Then, acetic acid bacteria convert the alcohol into acetic acid."
    },
    {
      question: "What are the health benefits of vinegar?",
      answer: "Some potential health benefits of vinegar include blood sugar control, weight management support, and improved digestion. However, more research is needed to confirm these effects."
    },
    // Add more FAQs...
  ];

  return (
    <div>
      <Title>Frequently Asked Questions</Title>
      <Paragraph>
        Find answers to common questions about vinegar, its uses, and benefits.
      </Paragraph>
      <Search
        placeholder="Search FAQs"
        onSearch={value => console.log(value)}
        style={{ marginBottom: 20 }}
      />
      <Collapse accordion>
        {faqs.map((faq, index) => (
          <Panel header={faq.question} key={index}>
            <p>{faq.answer}</p>
          </Panel>
        ))}
      </Collapse>
    </div>
  );
}

export default FAQ;
