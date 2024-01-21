import { BrowserRouter } from "react-router-dom"
// import { PrivateRoutes } from "./routes/Routes"
import Layout from './layout/Layout'
import HandleRoutes from "./routes/Handle_Routes/HandleRoutes"
function App() {
  return (
    <>
      <BrowserRouter>
        <Layout>
          <HandleRoutes />
        </Layout>
      </BrowserRouter>
    </>
  )
}

export default App
