import { Routes, Route, Link } from 'react-router-dom';
import { Home } from '../Pages/Home'; 
import { Blog } from '../Pages/Blog';
import { Post } from '../Pages/Post';
export const AppRoutes = () => {
    return (
        <div>
            <Routes>

                <Route index element={<Home />} />
                <Route path='/Home' element={<Home />} />
                <Route path='/Blog' element={<Blog />} />
                <Route path='/Post' element={<Post />} />
            </Routes>
        </div>
    )
}