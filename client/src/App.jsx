//client/src/App.jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import CreateProduct from './pages/CreateProduct';

const App = () => {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/create-product" element={<CreateProduct />} />
            <Route path="/login" element={<Login />} /> {/* Optional */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
