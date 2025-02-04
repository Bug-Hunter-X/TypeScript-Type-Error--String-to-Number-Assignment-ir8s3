function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else if (typeof a === 'string' && typeof b === 'string') {
    return a + b;
  } else if (typeof a === 'number' && typeof b === 'string') {
    return a + parseFloat(b);
  } else if (typeof a === 'string' && typeof b === 'number') {
    return parseFloat(a) + b;
  }
  return 0;
}

const result1 = add(5, 3); // Correct usage
const result2 = addSafe("hello", 5); // Safe usage with string and number
const result3 = addSafe(10, "5"); // Safe usage with number and string
const result4 = addSafe("hello", "world"); // Safe usage with two strings