import Users from './Pages/users';
import Publications from './Pages/publications';

import {Route, Routes, BrowserRouter} from 'react-router-dom';



const AppRouter = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<>Home </>} />
                <Route path="/users" element={<Users />} />
                <Route path="/publications" element={<Publications />} />
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter;

