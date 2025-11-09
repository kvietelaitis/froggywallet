import React, { useEffect, useState } from "react";
import { useNavigate} from 'react-router-dom';

const DeleteLoansPage: React.FC = () => {
    const navigate = useNavigate();

    return (
    <div>
      <h1>This is a page that lets you delete loans. It is currently under construction</h1>

      <button onClick={() => navigate('/loan')}>
        Back
      </button>
    </div>
    );
};

export default DeleteLoansPage;