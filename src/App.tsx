import Layout from './components/Layout/Layout';
import {Route, Routes} from 'react-router-dom';
import Modal from "./components/Modal/Modal";
import PageNoFoundPicture from '../src/images/404PageNotFound.jpg';
import FinanceTracker from "./components/FinanceTracker/FinanceTracker";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path={'/'} element={<FinanceTracker />}/>
        <Route path={'/home'} element={<FinanceTracker />}/>
        <Route path={'/add-expense'} element={<Modal />}/>
          <Route path="*" element={(
              <div className="container-fluid pic-container d-flex justify-content-center">
                  <img
                      style={{width: '50rem', height: '50rem'}}
                      src={PageNoFoundPicture}
                      alt="Page Not Found"/>
              </div>
          )}/>
      </Routes>
    </Layout>
  );
}

export default App;
