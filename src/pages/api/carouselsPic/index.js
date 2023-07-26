// pages/api/cards.js
// 假设你有一个名为 cards 的数组，其中包含卡片数据
const cards = [
  { id: 1, url:"https://picsum.photos/seed/1/2000/400"},
  { id: 2, url:"https://picsum.photos/seed/2/2000/400"},
  { id: 3, url:"https://picsum.photos/seed/3/2000/400"},
  { id: 4, url:"https://picsum.photos/seed/4/2000/400"},
  { id: 5, url:"https://picsum.photos/seed/5/2000/400"},
  { id: 6, url:"https://picsum.photos/seed/6/2000/400"},

  // 添加更多卡片数据...
];

export default function handler(req, res) {
  res.status(200).json(cards);
}
