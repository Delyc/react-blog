import "./App.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Hom from "./pages/Hom";
import Signup from "./pages/Signup";
import Login from "./pages/Login"
import Blog from './components/Blog';
import Users from './pages/Users';
import GetBlogs from './pages/GetBlogs';
import BlogDetails from './pages/BlogDetails';
import EditPost from "./pages/EditPost";
function App() {
  return (
    <Router>
    <Routes>
    <Route path="/" element={<Hom/>} />
         <Route path="/sign" element={<Signup/>} />
         <Route path="/login"  element={<Login />} />
         <Route path="/blog"  element={<Blog />} />
         <Route path="/users"  element={<Users />} />
         <Route path="/allblogs"  element={<GetBlogs/>} />
         <Route path="/blog/:id"  element={<BlogDetails/>} />
         <Route path="/edit/:id"  element={<EditPost/>} />
         
         
         
    </Routes>
</Router>

  )
 
}

export default App;
