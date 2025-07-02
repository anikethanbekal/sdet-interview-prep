---
title: Find Equilibrium Index in an Array
tags:
  - java
  - python
  - arrays
  - medium
  - prefix-sum
categories:
  - Programming
  - Interview
difficulty: medium
background: bg-[#fef3c7]
badge_color: text-yellow-800 bg-yellow-100
topic: arrays
date: 2025-07-21
author: Anikethan Bekal
intro: |
  This is a common interview question for SDET roles that tests understanding of array manipulation and prefix-sum techniques.
---

# 🧠 Problem: Find Equilibrium Index in an Array

Given an array of integers, find the index where the sum of elements to the left is equal to the sum of elements to the right.

**Category**: Arrays  
**Difficulty**: Medium  
**Tags**: arrays, prefix-sum, equilibrium-index

---

## ✅ Requirements
- **Input**: An array of integers `arr` (e.g., `[1, 7, 3, 6, 5, 6]`)
- **Output**: The equilibrium index (e.g., `3`)
- **Constraints**:
  - Array can contain positive and negative integers.

---

## 🧪 Example(s)
```text
Input: [1, 7, 3, 6, 5, 6]
Output: 3
```

---

## 🧪 Test Cases
| Input              | Output |
|---------------------|--------|
| [1, 7, 3, 6, 5, 6]  | 3      |
| [1, 2, 3]           | -1     |
| [2, 3, -1, 8, 4]    | 3      |
| [0, 0, 0, 0]        | 0      |

---

## ☕ Java Solution
```java
public class EquilibriumIndex {
    // Approach: Prefix Sum
    public static int findEquilibriumIndex(int[] arr) {
        int totalSum = 0, leftSum = 0;
        for (int num : arr) {
            totalSum += num;
        }
        for (int i = 0; i < arr.length; i++) {
            totalSum -= arr[i];
            if (leftSum == totalSum) {
                return i;
            }
            leftSum += arr[i];
        }
        return -1; // No equilibrium index found
    }

    public static void main(String[] args) {
        int[] arr = {1, 7, 3, 6, 5, 6};
        System.out.println("Equilibrium index: " + findEquilibriumIndex(arr));
    }
}
```

---

## 🔵🟡 Python Solution
```python
def find_equilibrium_index(arr):
    # Approach: Prefix Sum
    total_sum = sum(arr)
    left_sum = 0
    for i, num in enumerate(arr):
        total_sum -= num
        if left_sum == total_sum:
            return i
        left_sum += num
    return -1  # No equilibrium index found

# Example usage
arr = [1, 7, 3, 6, 5, 6]
print(f"Equilibrium index: {find_equilibrium_index(arr)}")
```

---

## 🔍 Explanation
- **Prefix Sum**:
  - Calculates the total sum of the array.
  - Iterates through the array while maintaining the left sum and updating the right sum.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)             | Single pass through the array |
| Python   | O(n)            | O(1)             | Single pass through the array |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases:
  - Array with no equilibrium index.
  - Array with all identical elements.
- Explain why prefix-sum is preferred over nested loops.

---

## 🏷 Tags
`arrays`, `python`, `java`, `equilibrium-index`, `medium`, `interview`, `prefix-sum`
---
