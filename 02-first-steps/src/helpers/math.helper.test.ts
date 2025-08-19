import { describe, expect, test } from 'vitest';
import { add, multiply, subtract } from './math.helper';

describe('add', () => {
  test('should add two positive numbers', () => {
    //* Arrange
    const a = 1;
    const b = 2;

    //* Act
    const result = add(a, b);

    //* Assert
    expect(result).toBe(a + b);
  });

  test('should add two negative numbers', () => {
    const a = -2;
    const b = -5;

    const result = add(a, b);

    expect(result).toBe(a + b);
  });
});

describe('subtract', () => {
  test('should subtract a negative number of positive number', () => {
    const a = 5;
    const b = -2;

    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });

  test('should subtract two negative numbers', () => {
    const a = -5;
    const b = -7;

    const result = subtract(a, b);

    expect(result).toBe(a - b);
  });
});

describe('multiply', () => {
  test('should multiply a number by itself', () => {
    const a = 5;

    const result = multiply(a, a);

    expect(result).toBe(a * a);
  });

  test('should multiply a number by zero', () => {
    const a = 8;

    const result = multiply(a, 0);

    expect(result).toBe(0);
  });
});
