import { Box, Typography, Chip, useMediaQuery } from '@mui/material'

function ProgramBanner({ name, description }) {
  const data = {
    projectName: 'Machine Learning Engineer',
    projectDetail:
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatem beatae totam, aspernatur nulla magni,Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut voluptatem beatae totam, aspernatur nulla magni  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur molestiae laudantium molestias deleniti quibusdam illo odio ab',

    tag: ['Machine learning', 'AI', 'Data Science', 'NLP', 'XXXXXX', 'C++'],
    lable: 'Advanced Robotics'
  }

  const isOverSize = useMediaQuery('(max-width:600px)')

  const projectDetail = isOverSize ? `${data.projectDetail.slice(0, 150)}...` : data.projectDetail

  const tagList = data.tag?.map((item, index) => (
    <Chip key={index} label={item} color='primary' onClick={() => {}} sx={{ marginLeft: '0.2rem' }} />
  ))

  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} flexDirection={'column'}>
      {/* Title box */}
      <Box display={'inline-flex'}>
        <Typography
          variant='h4'
          align='center'
          color='primary.text'
          sx={{ position: 'relative', marginTop: '4rem', marginBottom: '1rem', fontWeight: '700' }}
        >
          {name}
          {!isOverSize && (
            <Chip
              label={data.lable}
              sx={{
                position: 'absolute',
                color: 'white',
                background: '#b658ff',
                marginLeft: '2rem',
                marginTop: '0.45rem'
              }}
            />
          )}
        </Typography>
      </Box>

      {/* Detail box */}
      <Box
        display={'flex'}
        justifyContent={'center'}
        alignItems={'center'}
        sx={{
          marginTop: '1rem',
          marginBottom: '1.5rem',
          overflow: 'hidden'
        }}
      >
        <Typography variant='h6' color='primary.text' align={'center'} sx={{ width: '80%', fontWeight: 500 }}>
          {projectDetail}
        </Typography>
      </Box>

      {/* Tag box */}
      <Box display='flex' justifyContent='flex-start' alignItems={'center'} sx={{ marginBottom: '3rem' }}>
        {!isOverSize && tagList}
      </Box>
    </Box>
  )
}

export default ProgramBanner
