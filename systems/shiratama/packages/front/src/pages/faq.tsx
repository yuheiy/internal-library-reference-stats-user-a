import React from 'react';
import { Typography, Collapse } from 'antd';

const { Title } = Typography;
const { Panel } = Collapse;

const FAQ: React.FC = () => {
  return (
    <div>
      <Title>よくある質問</Title>
      <Collapse accordion>
        <Panel header="白玉とは何ですか？" key="1">
          <p>白玉は、もち米から作られた小さな丸い餅のことです。和菓子や甘味の材料として広く使用されています。</p>
        </Panel>
        <Panel header="白玉の賞味期限はどのくらいですか？" key="2">
          <p>生の白玉は冷蔵庫で2-3日程度保存可能です。冷凍の場合は1ヶ月ほど保存できます。</p>
        </Panel>
        <Panel header="白玉は自宅で作れますか？" key="3">
          <p>はい、白玉粉と水を混ぜて丸めるだけで簡単に作ることができます。詳しいレシピは当店のブログでご紹介しています。</p>
        </Panel>
        <Panel header="白玉にアレルギー成分は含まれていますか？" key="4">
          <p>白玉自体にはアレルギー成分は含まれていませんが、調理過程で他の食材と接触する可能性があります。詳細は各商品の成分表示をご確認ください。</p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default FAQ;
