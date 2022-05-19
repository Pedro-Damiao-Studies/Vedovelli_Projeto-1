export function sum(num1, num2) {
  const parsedNum1 = parseInt(num1, 10);
  const parsedNum2 = parseInt(num2, 10);

  if (isNaN(parsedNum1) || isNaN(parsedNum2)) {
    throw new Error('Please check your input');
  }

  return parsedNum1 + parsedNum2;
}
