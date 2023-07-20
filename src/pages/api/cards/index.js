// pages/api/cards.js
// 假设你有一个名为 cards 的数组，其中包含卡片数据
const cards = [
  { id: 1, name: 'Card 1', imageUrl: 'https://example.com/card1.jpg' },
  { id: 2, name: 'Card 2', imageUrl: 'https://example.com/card2.jpg' },

  // 添加更多卡片数据...
];

export default function handler(req, res) {
  res.status(200).json(cards);
}
