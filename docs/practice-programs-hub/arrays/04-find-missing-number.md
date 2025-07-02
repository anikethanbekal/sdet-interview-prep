---
title: Find the Missing Number in an Array
tags:
  - java
  - python
  - arrays
  - medium
  - math
categories:
  - Programming
  - Interview
difficulty: medium
background: bg-[#fef3c7]
badge_color: text-yellow-800 bg-yellow-100
topic: arrays
date: 2025-07-04
author: Anikethan Bekal
intro: |
  This is a common interview question for SDET roles that tests understanding of array manipulation and mathematical techniques.
---

# 🧠 Problem: Find the Missing Number in an Array

Given an array containing integers from 1 to n with one number missing, find the missing number.

**Category**: Arrays  
**Difficulty**: Medium  
**Tags**: arrays, math, missing-number

---

## ✅ Requirements
- **Input**: An array of integers `arr` (e.g., `[1, 2, 4, 5]`)
- **Output**: The missing integer (e.g., `3`)
- **Constraints**:
  - Array contains integers from 1 to n.
  - Only one number is missing.

---

## 🧪 Example(s)
```text
Input: [1, 2, 4, 5]
Output: 3
```

---

## 🧪 Test Cases
| Input           | Output |
|------------------|--------|
| [1, 2, 4, 5]     | 3      |
| [1, 3, 4, 5]     | 2      |
| [2, 3, 4, 5]     | 1      |
| [1, 2, 3, 4, 6]  | 5      |

---

## ☕ Java Solution
```java
public class MissingNumber {
    // Approach: Sum formula (Sum of 1 to n minus sum of array elements)
    public static int findMissingNumber(int[] arr, int n) {
        int totalSum = n * (n + 1) / 2;
        int arraySum = 0;
        for (int num : arr) {
            arraySum += num;
        }
        return totalSum - arraySum;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 4, 5};
        int n = 5; // Total numbers from 1 to n
        System.out.println("Missing number: " + findMissingNumber(arr, n));
    }
}
```

---

## 🔵🟡 Python Solution
```python
def find_missing_number(arr, n):
    # Approach: Sum formula (Sum of 1 to n minus sum of array elements)
    total_sum = n * (n + 1) // 2
    array_sum = sum(arr)
    return total_sum - array_sum

# Example usage
arr = [1, 2, 4, 5]
n = 5  # Total numbers from 1 to n
print(f"Missing number: {find_missing_number(arr, n)}")
```

---

## 🔍 Explanation
- **Java**:
  - Calculates the sum of integers from 1 to n using the formula `n * (n + 1) / 2`.
  - Subtracts the sum of array elements from the total sum to find the missing number.
- **Python**:
  - Similar approach using the sum formula and `sum()` function.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)             | Iterates through the array once |
| Python   | O(n)            | O(1)             | Uses `sum()` function |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases:
  - Missing number is the first or last element.
  - Arrays with only one element.
- Avoid sorting the array as it increases time complexity to `O(n log n)`.

---

## 🏷 Tags
`arrays`, `python`, `java`, `missing-number`, `medium`, `interview`, `math`
---
