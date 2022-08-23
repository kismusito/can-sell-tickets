function canSellTickets(bills: number[]) {
  let [totalBillsOf25, totalBillsOf50] = [0, 0];

  for (const bill of bills) {
    if (bill === 25) {
      totalBillsOf25++;
    } else if (bill === 50) {
      if (totalBillsOf25 === 0) {
        return "NO";
      }

      totalBillsOf25--;
      totalBillsOf50++;
    } else {
      if (totalBillsOf25 >= 3) {
        totalBillsOf25 -= 3;
      } else if (totalBillsOf25 >= 1 && totalBillsOf50 >= 1) {
        totalBillsOf25 -= 1;
        totalBillsOf50 -= 1;
      } else {
        return "NO";
      }
    }
  }

  return "YES";
}

console.log(canSellTickets([25, 25, 50])); // Expected output: YES
console.log(canSellTickets([25, 100])); // Expected output: NO
console.log(canSellTickets([25, 25, 50, 50, 100])); // Expected output: NO
