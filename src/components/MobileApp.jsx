import React,{Component} from 'react'
import MobileNewsHeader from './MobileHeader'
import NewsFooter from './news_footer'
import '../componentsCss/mobile.css'

class MobileApp extends Component{
render(){
  return(
    <div>
      <MobileNewsHeader/>
      {/*显示当前路由，那个子路由访问显示那个*/}
      {this.props.children}
      <NewsFooter/>
    </div>
  )
}

}
export default MobileApp