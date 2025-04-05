import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Playlist } from './pages/Playlist';
import { Top100 } from './pages/Top100';
import { Login } from './pages/Login';
import { MyPage } from './pages/MyPage';
import { NotFound } from './pages/NotFound';
import { Layout } from './components/layouts/Layout';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Playlist />} />
          <Route path="/top100" element={<Top100 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
