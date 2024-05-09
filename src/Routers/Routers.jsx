import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import { Home } from '@/pages';

const Routers = () => {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<Home />} />
                </Routes>
            </Router>
        </div>
    )
}

export default Routers
