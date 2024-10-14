document.getElementById('calulatebtn').addEventListener('click',calculateLoan);

function calculateLoan() {
    const loan = parseFloat(document.getElementById('loanAmoutInput').value);
    const rate = parseFloat(document.getElementById('interestrateinput').value);
    const time = parseFloat(document.getElementById('loantimeinput').value);

    if (isNaN(loan) || isNaN(rate) || isNaN(time)) {
        alert("Please Enter valid numbers for all fields");
    }
    const monthlyInterest = rate /100 / 12;
    const totalpayment = time;
    const monthlyPayment = (loan * monthlyInterest) / (1-Math.pow(1+monthlyInterest,-totalpayment));
    const totalInterest = (monthlyPayment * totalpayment)- loan;
    
    displayResult(monthlyPayment,totalInterest);
}
function displayResult(monthlyPayment,totalInterest) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = `
    <p><strong>Monthly Payment : ${monthlyPayment.toFixed(2)}</p></strong>
    <p><strong>Total Interest : ${totalInterest.toFixed(2)}</p></strong>
    `;
}