import {useDispatch} from "react-redux";
import {useRouter} from "next/router";
import {useEffect} from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";


const LessonPage = () => {
  const dispatch = useDispatch()



  const router = useRouter()

  useEffect(() => {
    if (router.isReady) {
      console.log(router.query)

    }
  }, [router])



  return (
    <Box sx={{ height: '100%' }}>
      <Typography>title:</Typography>
      <Typography>this is title</Typography>
      <Typography>description:</Typography>
      <Typography>this is description</Typography>
      <Typography>url:</Typography>
      <Typography>this is url</Typography>
    </Box>
  )
}

LessonPage.authGuard = false


export default LessonPage
