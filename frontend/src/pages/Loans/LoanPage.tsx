import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

export interface Loan{
  amount: number,
  monthlyPayment: number,
  nextPayment: Date,
  prevPayment: Date
}

const LoanPage = () => {
  const [loans, setLoans] = useState<Loan[]>([]);
  const navigate = useNavigate();

  const generateMockLoan = (): Loan => {
    const totalAmount = Math.floor(Math.random() * 100000) + 5000;
    
    const monthlyPayment = totalAmount / 1000;

    const today = new Date();
    const nextPayment = new Date(today);
    nextPayment.setDate(today.getDate() + Math.floor(Math.random() * 30) + 1);
    
    const previousPayment = new Date(today);
    previousPayment.setDate(today.getDate() - Math.floor(Math.random() * 30) - 1);

    return {
      amount: totalAmount,
      monthlyPayment: monthlyPayment,
      nextPayment: nextPayment,
      prevPayment: previousPayment
    };
  };

  const addMockLoan = () => {
    const newLoan = generateMockLoan();
    setLoans(prev => [newLoan, ...prev]);
  };

  return (
    <div style = {{alignContent: "center", width: "100%"}}>
      <button style = {{margin: "10px", height: "70px", width: "400xp", maxWidth: "400px"}} onClick={() => navigate('debtor')} >
        Debtors
      </button>

      <h2>Loan Management</h2>
      <div>
        <button  style = {{margin: "10px", height: "70px", width: "400xp", maxWidth: "400px"}} onClick={addMockLoan}>
          Add One Loan
        </button>
      </div>

      <div>
        {loans.length === 0 ? (
          <p style = {{margin: "10px", textAlign: "center"}}>No loans added yet. Use the controls above to add some!</p>
        ) : (
          loans.map(loan => (
            <div key={loan.amount}>
              <div>
                <div>
                  <strong>Amount:</strong> {loan.amount}
                </div>
                <div>
                  <strong>Monthly Payment:</strong> {loan.monthlyPayment}
                </div>
                <div>
                  <strong>Next Payment:</strong> {loan.nextPayment.toDateString()}
                </div>
                <div>
                  <strong>Last Payment:</strong> {loan.prevPayment.toDateString()}
                </div>
              </div>
              
              <button 
                style={{margin: "10px", maxWidth: "400px"}}
                onClick={() => navigate('deleteloan')}
              >
                Delete
              </button>

              <button 
                style={{margin: "10px", maxWidth: "400px"}}
                onClick={() => navigate('monthlyloan')}
              >
                Calculate next payment
              </button>

              <button 
                style={{margin: "10px", maxWidth: "400px"}}
                onClick={() => navigate('payloan')}
              >
                Pay off loan
              </button>

            </div>
          ))
        )}
      </div>
      
    </div>
  )
};

export default LoanPage;