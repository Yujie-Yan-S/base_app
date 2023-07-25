// pages/api/cards.js
// 假设你有一个名为 cards 的数组，其中包含卡片数据
const programs = [
  {
    id: 1,
    title: 'Machine Learning',
    des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellat quas voluptas sed eaque suscipit dolor, laboriosam aliquid vel. Necessitatibus dolorum id odit sit inventore facilis magni error iste aperiam?',
    tag: ['AI', 'ML', 'NPL'],
    titleTag: 'Autonomous'
  },
  {
    id: 2,
    title: 'Machine Learning',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellat quas voluptas sed eaque suscipit dolor, laboriosam aliquid vel. Necessitatibus dolorum id odit sit inventore facilis magni error iste aperiam?',
    tag: ['AI', 'ML', 'NPL'],
    titleTag: 'Autonomous'
  },
  {
    id: 3,
    title: 'Machine Learning',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellat quas voluptas sed eaque suscipit dolor, laboriosam aliquid vel. Necessitatibus dolorum id odit sit inventore facilis magni error iste aperiam?',
    tag: ['AI', 'ML', 'NPL'],
    titleTag: 'Autonomous'
  },
  {
    id: 4,
    title: 'Machine Learning',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellat quas voluptas sed eaque suscipit dolor, laboriosam aliquid vel. Necessitatibus dolorum id odit sit inventore facilis magni error iste aperiam?',
    tag: ['AI', 'ML', 'NPL'],
    titleTag: 'Autonomous'
  },
  {
    id: 5,
    title: 'Machine Learning',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellat quas voluptas sed eaque suscipit dolor, laboriosam aliquid vel. Necessitatibus dolorum id odit sit inventore facilis magni error iste aperiam?',
    tag: ['AI', 'ML', 'NPL'],
    titleTag: 'Autonomous'
  },
  {
    id: 6,
    title: 'Machine Learning',
    des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellat quas voluptas sed eaque suscipit dolor, laboriosam aliquid vel. Necessitatibus dolorum id odit sit inventore facilis magni error iste aperiam?',
    tag: ['AI', 'ML', 'NPL'],
    titleTag: 'Autonomous'
  }

  // 添加更多卡片数据...
]

export default function handler(req, res) {
  res.status(200).json(programs)
}
