import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


const DebtorPage: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is a page that stores debtor information. It is currently under construction</h1>

      <button onClick={() => navigate('/loan')}>
        Back
      </button>
    </div>

  );
};

export default DebtorPage;