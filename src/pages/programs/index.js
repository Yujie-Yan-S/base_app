// ** MUI Imports
import Grid from '@mui/material/Grid'
import ClassCard from './component/ClassCard'
import { Box } from '@mui/material'
import { margin } from '@mui/system'

const Programs = () => {
  const classData = [
    {
      id: 100,
      title: 'Machine Learning Engineer',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellat quas voluptas sed eaque suscipit dolor, laboriosam aliquid vel. Necessitatibus dolorum id odit sit inventore facilis magni error iste aperiam?',
      tag: ['AI', 'ML', 'NPL'],
      titleTag: 'Autonomous'
    },
    {
      id: 101,
      title: 'Machine Learning Engineer',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellat quas voluptas sed eaque suscipit dolor, laboriosam aliquid vel. Necessitatibus dolorum id odit sit inventore facilis magni error iste aperiam?',
      tag: ['AI', 'ML', 'NPL'],
      titleTag: 'Autonomous'
    },
    {
      id: 102,
      title: 'Machine Learning Engineer',
      description:
        'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa repellat quas voluptas sed eaque suscipit dolor, laboriosam aliquid vel. Necessitatibus dolorum id odit sit inventore facilis magni error iste aperiam?',
      tag: ['AI', 'ML', 'NPL'],
      titleTag: 'Autonomous'
    }
  ]
  const classList = classData.map((item, index) => {
    const backgroundColor =
      index % 2 === 0 ? 'linear-gradient(to right, #787878, #FFFFFF)' : 'linear-gradient(to right, #CACACA, #FEFEFE)'

    return (
        <ClassCard
          key={item.id}
          title={item.title}
          description={item.description}
          tag={item.tag}
          titleTag={item.titleTag}
          background={backgroundColor}
        />
    )
  })

  return (
    <>
      {classList}
    </>
  )
}

export default Programs
