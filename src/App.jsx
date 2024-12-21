import About from "./components/About.jsx";
import HomePage from "./components/HomePage.jsx";
import NavBar from "./components/NavBar.jsx"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
const App = ()=>{
return(
<>
	<Router>
	<NavBar/>
		<Routes>
			<Route path="/" element={<HomePage/>}/>
			<Route path='/about' element={<About/>}></Route>
		</Routes>
	</Router>
</>
)
}
export default App;
