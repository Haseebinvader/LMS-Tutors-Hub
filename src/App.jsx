import { BrowserRouter, Route, Routes } from "react-router-dom"
import { PrivateRoutes } from "./routes/Routes"
import Layout from './layout/Layout'
function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <Routes>
            {PrivateRoutes.map((item, index) => (
              <Route path={item.path} element={<item.component />} key={index} exact={true} />
            ))}
          </Routes>
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
