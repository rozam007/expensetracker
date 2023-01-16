import { Header } from './components/Header';
import { Balance } from './components/Balance';
import { IncomeExpenses } from './components/IncomeExpenses';
import { TransactionList } from './components/TransactionList';
import { AddTransaction } from './components/AddTransaction';
import './App.css';

// import { GlobalProvider } from './context/GobalState';


function App() {
  return (
    <>
      <div className="main-container">
        <Header/>
        <div className='inner-container'>
          <div className='left-side'>
            <Balance/>
            <IncomeExpenses/>
            <AddTransaction/>
          </div>
          <div className='right-side'>
            <TransactionList/>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
