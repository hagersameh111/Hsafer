import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from './Pages/Layout';
import Home from './Pages/Home';
import Cities from './Pages/Cities';
import SignUp from './Pages/SignUp';
import NoPage from './Pages/NoPage';
import SignIn from './Pages/SignIn';
import Aboutus from './Components/Aboutus';

const App = () => {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/cities" element={<Cities />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </HashRouter>
  );
};

export default App;


