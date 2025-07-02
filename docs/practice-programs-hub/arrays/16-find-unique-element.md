---
title: Find the Unique Element in an Array
tags:
  - java
  - python
  - arrays
  - easy
  - xor
categories:
  - Programming
  - Interview
difficulty: easy
background: bg-[#e0f2fe]
badge_color: text-blue-800 bg-blue-100
topic: arrays
date: 2025-07-16
author: Anikethan Bekal
intro: |
  This is a basic interview question for SDET roles that tests understanding of array manipulation and bitwise operations.
---

# 🧠 Problem: Find the Unique Element in an Array

Given an array of integers where every element appears twice except for one, find the unique element.

**Category**: Arrays  
**Difficulty**: Easy  
**Tags**: arrays, xor, unique-element

---

## ✅ Requirements
- **Input**: An array of integers `arr` (e.g., `[1, 2, 3, 2, 1]`)
- **Output**: The unique integer (e.g., `3`)
- **Constraints**:
  - Array contains integers where every element appears twice except for one.

---

## 🧪 Example(s)
```text
Input: [1, 2, 3, 2, 1]
Output: 3
```

---

## 🧪 Test Cases
| Input              | Output |
|---------------------|--------|
| [1, 2, 3, 2, 1]     | 3      |
| [4, 5, 6, 5, 4]     | 6      |
| [10, 10, 20]        | 20     |
| [100, 200, 100]     | 200    |

---

## ☕ Java Solution
```java
public class UniqueElement {
    // Approach: XOR operation
    public static int findUniqueElement(int[] arr) {
        int unique = 0;
        for (int num : arr) {
            unique ^= num;
        }
        return unique;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 2, 1};
        System.out.println("Unique element: " + findUniqueElement(arr));
    }
}
```

---

## 🔵🟡 Python Solution
```python
def find_unique_element(arr):
    # Approach: XOR operation
    unique = 0
    for num in arr:
        unique ^= num
    return unique

# Example usage
arr = [1, 2, 3, 2, 1]
print(f"Unique element: {find_unique_element(arr)}")
```

---

## 🔍 Explanation
- **XOR Operation**:
  - XOR of two identical numbers is `0`.
  - XOR of a number with `0` is the number itself.
  - XOR all elements to cancel out duplicates and find the unique element.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)             | Single pass through the array |
| Python   | O(n)            | O(1)             | Single pass through the array |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases:
  - Array with only one element.
  - Array with all identical elements except one.
- Explain the efficiency of XOR compared to other approaches like sorting.

---

## 🏷 Tags
`arrays`, `python`, `java`, `unique-element`, `easy`, `interview`, `xor`
---
