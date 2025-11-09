import { Routes, Route, Navigate } from 'react-router-dom';
import LoanPage from './LoanPage';
import DebtorPage from './DebtorPage';
import DeleteLoansPage from './DeleteLoansPage';
import MontlyPayment from './MonthlyPayment';
import PayLoan from './PayLoan';

function ExpensesRoutes() {
  return (
    <Routes>
        <Route path="/" element={<LoanPage />} />
        <Route path="deleteloan" element={<DeleteLoansPage />} />
        <Route path="debtor" element={<DebtorPage />} />
        <Route path="monthlyloan" element={<MontlyPayment />} />
        <Route path="payloan" element={<PayLoan />} />
      
      {/* Catch-all: redirect invalid routes */}
      <Route path="*" element={<Navigate to="/loan" replace />} />
    </Routes>
  );
}

export default ExpensesRoutes;