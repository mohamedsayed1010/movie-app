import Blog from '../Blog/Blog'
import Schedule from '../Schedule/Schedule'
import Trend from '../Trend/Trend'
import './main.css'


export default function Main() {
  return ( <main>
       <Schedule/>
       <Trend/>
       <Blog/>
    </main>
  )
}
