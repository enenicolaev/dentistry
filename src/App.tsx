import React, { useEffect } from 'react';
import { Route, Routes, useLocation, useNavigate } from "react-router"
import { PageFive } from './app/pages/PageFive/PageFive';
import { PageFour } from './app/pages/PageFour/PageFour';
import { PageOne } from './app/pages/PageOne/PageOne';
import { PageThree } from './app/pages/PageThree/PageThree';
import { PageTwo } from './app/pages/PageTwo/PageTwo';
import { AppRoutes } from './app/types/routes/routes';

const App = () => {
  const location = useLocation()
  const navigate = useNavigate()
  useEffect(() => {
    if (location.pathname === '' || location.pathname === '/') {
      navigate(AppRoutes.PageOne, {replace: false})
    }
  }, [])
  

  return (
    <Routes>
      <Route path={AppRoutes.PageOne} element={<PageOne />}/>
      <Route path={AppRoutes.PageTwo} element={<PageTwo />}/>
      <Route path={AppRoutes.PageThree} element={<PageThree />}/>
      <Route path={AppRoutes.PageFour} element={<PageFour />}/>
      <Route path={AppRoutes.PageFife} element={<PageFive />}/>
    </Routes>
  )
}

export default App;
