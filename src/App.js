import { Route, Routes } from 'react-router-dom';

import AllMeetUps from './pages/AllMeetUps';
import Favorites from './pages/Favorites';
import NewMeetUp from './pages/NewMeetUp';
import Layout from './components/layout/Layout';

function App() {
  return (
    <Layout>
      
      <Routes>
        <Route path="/" element={<AllMeetUps />}></Route>
        <Route path="/new" element={<NewMeetUp />}></Route>
        <Route path="/fav" element={<Favorites />}></Route>
      </Routes>


    </Layout>
  );
}


export default App;
