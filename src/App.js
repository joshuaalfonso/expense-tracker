
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Auth from './pages/auth';
import ExpenseTracker from './pages/expense-tracker/expense-tracker';

function App() {
  return (
    <div className="bg-zinc-800 min-h-dvh">
      <div className='bg-zinc-900 w-full md:max-w-md mx-auto h-dvh'>

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
