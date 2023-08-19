
import './App.css'
import {Route, Routes} from "react-router-dom";
import {Layout} from "./components/Layout/Layout.jsx";
import {PostsPage} from "./components/pages/PostPage/PostsPage..jsx";
import CreatePostsPage from "./components/pages/CreatePostPage/CreatePostsPage.jsx";
import {NotFound} from "./components/NotFound/NotFound.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route index element={<PostsPage/>}/>
          <Route path='create' element={<CreatePostsPage/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
