// ** Custom Navigation Components
import HorizontalNavLink from './CustomHorizontalNavLink'
import HorizontalNavGroup from 'src/@core/layouts/components/horizontal/navigation/HorizontalNavGroup.js'
import {useRouter} from "next/router";

const resolveComponent = item => {
  if (item.children) return HorizontalNavGroup

  return HorizontalNavLink
}


const HorizontalNavItems = props => {
  const router = useRouter();


  const RenderMenuItems = props.horizontalNavItems?.map((item, index) => {
    console.log(router.pathname);
    console.log(item)
    const TagName = resolveComponent(item)

    if(router.pathname=='/home' && item.title=='Home') return null

    return <TagName {...props} key={index} item={item} />
  })

  return <>{RenderMenuItems}</>
}

export default HorizontalNavItems
