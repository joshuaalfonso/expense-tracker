
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './pages/auth';
import ExpenseTracker from './pages/expense-tracker/expense-tracker';
import ProtectedRoutes from './protectedRoutes';



function App() {
  return (
    // bg-[#F5F5F5]
    <div className="bg-[#F5F5F5] min-h-dvh"> 
      <div className='bg-white w-full md:max-w-md mx-auto h-dvh overflow-auto relative flex flex-col gap-5'>

      <Router>
        <Routes>
          <Route path='/' exact element={<Auth />} />

          <Route element={<ProtectedRoutes/>}>
            <Route path='/expense-tracker' element={<ExpenseTracker />} />
          </Route>
          
        </Routes>
      </Router>

      </div>
    </div>
  );
}

export default App;
