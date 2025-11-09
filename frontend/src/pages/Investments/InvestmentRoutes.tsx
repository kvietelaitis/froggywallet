import { Routes, Route, Navigate } from 'react-router-dom';
import InvestmentPage from './InvestmentsPage';
import AddInvestmentsPage from './AddInvestmentsPage';
import DeleteInvestmentsPage from './DeleteInvestmentsPage';
import InvestmentPredictionsTimePage from './InvestmentPredictionsTimePage';
import InvestmentPredictionsPage from './InvestmentPredictionsPage';
import ProfitLossTimePickerPage from './ProfitLossTimePickerPage';
import ProfitLossSummaryPage from './ProfitLossSummaryPage';

      
function InvestmentsRoutes() {
  return (
    <Routes>
      <Route path="/" element={<InvestmentPage />} />
      <Route path="addinvestments" element={<AddInvestmentsPage />} />
      <Route path="deleteinvestments" element={<DeleteInvestmentsPage />} />
      <Route path="investmentpredictionstime" element={<InvestmentPredictionsTimePage/>} />
      <Route path="investmentpredictionstime/investmentpredictions" element={<InvestmentPredictionsPage/>} />
      <Route path="profitlosstimepicker" element={<ProfitLossTimePickerPage />} />
      <Route path="profitlosstimepicker/profitlosssummary" element={<ProfitLossSummaryPage />} />
      {/* Catch-all: redirect invalid routes */}
      <Route path="*" element={<Navigate to="/investments" replace />} />
    </Routes>
  );
}

export default InvestmentsRoutes;