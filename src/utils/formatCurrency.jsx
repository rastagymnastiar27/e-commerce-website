// Fungsi untuk memformat angka menjadi mata uang
export const formatCurrency = (amount) => {
    if (typeof amount !== 'number') {
      return '$0.00';
    }
  
    return amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  };
  