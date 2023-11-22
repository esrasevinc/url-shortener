import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLayout from './pages/PageLayout.jsx'
import Home from './pages/Home.jsx'
import NoPage from './pages/NoPage.jsx'
import Links from './pages/Links.jsx'
import UrlShortenerPage from './pages/UrlShortenerPage.jsx';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<PageLayout />} errorElement={<NoPage />} >
          <Route path="/Home" index element={<Home />} />
          <Route path="/Links" element={<Links />} />
          <Route path="/UrlShortenerPage" element={<UrlShortenerPage />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App