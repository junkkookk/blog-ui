import { Layout } from '@douyinfe/semi-ui'
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom'

import classz from '@/asserts/css/app.module.css'
import TopBar from '@/components/TopBar';
import {
  RecoilRoot,
} from 'recoil';
import { CustomFooter } from '@/components/CustomFooter';
import routes from '@/router';
const { Header, Content } = Layout;



function App() {

  return (
    <Router>
      <RecoilRoot>
        <Layout className={classz.app}>
          <Header>
            <TopBar />
          </Header>
          <Content className={classz.container} >
              <Routes>
              {routes.map((route)=><Route key={route.name} path={route.path} element={route.component} />)}
              </Routes>
          </Content>
          <CustomFooter/>
        </Layout>
      </RecoilRoot>
    </Router>
  )
}

export default App
