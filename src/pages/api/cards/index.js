// pages/api/cards.js
// 假设你有一个名为 cards 的数组，其中包含卡片数据
const cards = [
  { id: 1, url:"https://picsum.photos/200/300", text:'lekajlfkdddddddddddddddddddddddddddddddddddddjas;jdsla;fjl;das;sdalfaj;j;'},
  { id: 2, url:"https://picsum.photos/200/300", text:'lekajlfkdddddddddddddddddddddddddddddddddddddjas;jdsla;fjl;das;sdalfaj;j;'},
  { id: 3, url:"https://picsum.photos/200/300", text:'lekajlfkdddddddddddddddddddddddddddddddddddddjas;jdsla;fjl;das;sdalfaj;j;'},
  { id: 4, url:"https://picsum.photos/200/300", text:'lekajlfkdddddddddddddddddddddddddddddddddddddjas;jdsla;fjl;das;sdalfaj;j;'},
  { id: 5, url:"https://picsum.photos/200/300", text:'lekajlfkdddddddddddddddddddddddddddddddddddddjas;jdsla;fjl;das;sdalfaj;j;'},
  { id: 6, url:"https://picsum.photos/200/300", text:'lekajlfkdddddddddddddddddddddddddddddddddddddjas;jdsla;fjl;das;sdalfaj;j;'},

  // 添加更多卡片数据...
];

export default function handler(req, res) {
  res.status(200).json(cards);
}
