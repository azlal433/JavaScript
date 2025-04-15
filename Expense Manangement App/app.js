var balance = document.getElementById('balance');
var text = document.getElementById('text');
var amount = document.getElementById('amount');
var list = document.getElementById('list');
var addTransactionBtn = document.getElementById('add-transaction');

let transactions = [];

// Format date to readable format
function formatDate(date) {
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });
}

// Add new transaction
function addTransaction() {
  var description = text.value.trim();
  var expenseAmount = parseFloat(amount.value.trim());

  if (description === '' || isNaN(expenseAmount)) {
    alert('Please enter a valid description and amount.');
    return;
  }

  var transaction = {
    id: Date.now(),
    description,
    amount: expenseAmount,
    date: new Date()
  };

  transactions.push(transaction);
  updateUI();
  clearInputs();
}

// Delete a transaction
function deleteTransaction(id) {
  transactions = transactions.filter(transaction => transaction.id !== id);
  updateUI();
}

// Update UI: list + balance
function updateUI() {
  list.innerHTML = '';
  let total = 0;

  transactions.forEach(transaction => {
    var row = document.createElement('tr');

    var dateCell = document.createElement('td');
    dateCell.textContent = formatDate(transaction.date);

    var descCell = document.createElement('td');
    descCell.textContent = transaction.description;

    var amountCell = document.createElement('td');
    amountCell.textContent = transaction.amount.toFixed(2);

    var deleteCell = document.createElement('td');
    var delBtn = document.createElement('button');
    delBtn.textContent = '🗑️';
    delBtn.classList.add('delete-btn');
    delBtn.onclick = () => deleteTransaction(transaction.id);
    deleteCell.appendChild(delBtn);

    row.appendChild(dateCell);
    row.appendChild(descCell);
    row.appendChild(amountCell);
    row.appendChild(deleteCell);

    list.appendChild(row);

    total += transaction.amount;
  });

  balance.textContent = total.toFixed(2);
}

// Clear inputs after adding
function clearInputs() {
  text.value = '';
  amount.value = '';
}

// Add event listener
addTransactionBtn.addEventListener('click', addTransaction);
