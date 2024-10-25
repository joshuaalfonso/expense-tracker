
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './pages/auth';
import ExpenseTracker from './pages/expense-tracker/expense-tracker';



function App() {
  return (
    <div className="bg-[#F5F5F5] min-h-dvh">
      <div className='bg-white w-full md:max-w-md mx-auto min-h-dvh overflow-hidden relative'>

      <Router>
        <Routes>
          <Route path='/' exact element={<Auth />} />
          <Route path='/expense-tracker' element={<ExpenseTracker />} />
          
        </Routes>
      </Router>

      </div>
    </div>
  );
}

export default App;
