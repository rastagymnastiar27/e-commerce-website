// Fungsi untuk memformat angka menjadi mata uang
export const formatCurrency = (amount) => {
    if (typeof amount !== 'number') {
      return '$0.00'; // Return default value jika amount bukan angka
    }
  
    return amount.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD', // Ganti 'USD' dengan mata uang yang sesuai jika perlu
    });
  };
  