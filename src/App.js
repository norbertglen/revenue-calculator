import React, { useState } from 'react';
import './App.css';

function Calculator() {
  const [hoursWorked, setHoursWorked] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hourlyRate, setHourlyRate] = useState(0);
  const [serviceCharge, setServiceCharge] = useState(0);
  const [payeeTax, setPayeeTax] = useState(0);
  const [netPay, setNetPay] = useState(0);
  const [payeeDeduction, setPayeeDeduction] = useState(0);

  const calculatePay = () => {
    const totalHours = parseInt(hoursWorked) + parseInt(minutes) / 60;
    const serviceChargeAmount = (totalHours * hourlyRate) * (serviceCharge / 100);
    const vatAmount = serviceChargeAmount * 0.16;
    const netAfterVAT = (totalHours * hourlyRate) - serviceChargeAmount - vatAmount;
    const payeeDeductionAmount = netAfterVAT * (payeeTax / 100);
    const finalNetPay = netAfterVAT - payeeDeductionAmount;

    setNetPay(finalNetPay);
    setPayeeDeduction(payeeDeductionAmount);
  };

  return (
    <div className="calculator-container">
      <h2>Upwork Revenue Calculator</h2>
      <div className="input-container">
        <label>Hours Worked:</label>
        <input type="number" value={hoursWorked} onChange={(e) => setHoursWorked(e.target.value)} />
      </div>
      <div className="input-container">
        <label>Minutes Worked:</label>
        <input type="number" value={minutes} onChange={(e) => setMinutes(e.target.value)} />
      </div>
      <div className="input-container">
        <label>Contract Hourly Rate:</label>
        <input type="number" value={hourlyRate} onChange={(e) => setHourlyRate(e.target.value)} />
      </div>
      <div className="input-container">
        <label>Upwork Service Charge %:</label>
        <input type="number" value={serviceCharge} onChange={(e) => setServiceCharge(e.target.value)} />
      </div>
      <div className="input-container">
        <label>Deduction on Net Revenue(%):</label>
        <input type="number" value={payeeTax} onChange={(e) => setPayeeTax(e.target.value)} />
      </div>
      <button onClick={calculatePay}>Calculate</button>
      <div className="result-container">
        <h3>Net Contractor Pay: ${netPay.toFixed(2)}</h3>
        <h3>Net Profit: ${payeeDeduction.toFixed(2)}</h3>
      </div>
    </div>
  );
}

export default Calculator;
