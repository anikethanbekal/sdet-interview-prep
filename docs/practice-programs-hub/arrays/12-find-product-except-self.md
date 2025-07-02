---
title: Find Product of Array Except Self
tags:
  - java
  - python
  - arrays
  - hard
  - prefix-suffix
categories:
  - Programming
  - Interview
difficulty: hard
background: bg-[#fde68a]
badge_color: text-yellow-800 bg-yellow-100
topic: arrays
date: 2025-07-12
author: Anikethan Bekal
intro: |
  This is a challenging interview question for SDET roles that tests understanding of array manipulation and efficient algorithms using prefix and suffix arrays.
---

# 🧠 Problem: Find Product of Array Except Self

Given an array of integers, return an array where each element is the product of all elements except itself.

**Category**: Arrays  
**Difficulty**: Hard  
**Tags**: arrays, prefix-suffix, product-except-self

---

## ✅ Requirements
- **Input**: An array of integers `arr` (e.g., `[1, 2, 3, 4]`)
- **Output**: An array of integers (e.g., `[24, 12, 8, 6]`)
- **Constraints**:
  - Array contains positive integers.
  - Division is not allowed.

---

## 🧪 Example(s)
```text
Input: [1, 2, 3, 4]
Output: [24, 12, 8, 6]
```

---

## 🧪 Test Cases
| Input          | Output         |
|-----------------|----------------|
| [1, 2, 3, 4]    | [24, 12, 8, 6] |
| [2, 3, 4, 5]    | [60, 40, 30, 24] |
| [1, 1, 1, 1]    | [1, 1, 1, 1]    |
| [10, 5]         | [5, 10]         |

---

## ☕ Java Solution
```java
public class ProductExceptSelf {
    // Approach: Prefix and Suffix Arrays
    public static int[] productExceptSelf(int[] arr) {
        int n = arr.length;
        int[] result = new int[n];
        int[] prefix = new int[n];
        int[] suffix = new int[n];

        prefix[0] = 1;
        for (int i = 1; i < n; i++) {
            prefix[i] = prefix[i - 1] * arr[i - 1];
        }

        suffix[n - 1] = 1;
        for (int i = n - 2; i >= 0; i--) {
            suffix[i] = suffix[i + 1] * arr[i + 1];
        }

        for (int i = 0; i < n; i++) {
            result[i] = prefix[i] * suffix[i];
        }

        return result;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 4};
        int[] result = productExceptSelf(arr);
        System.out.println("Product except self: " + Arrays.toString(result));
    }
}
```

---

## 🔵🟡 Python Solution
```python
def product_except_self(arr):
    # Approach: Prefix and Suffix Arrays
    n = len(arr)
    prefix = [1] * n
    suffix = [1] * n
    result = [1] * n

    for i in range(1, n):
        prefix[i] = prefix[i - 1] * arr[i - 1]

    for i in range(n - 2, -1, -1):
        suffix[i] = suffix[i + 1] * arr[i + 1]

    for i in range(n):
        result[i] = prefix[i] * suffix[i]

    return result

# Example usage
arr = [1, 2, 3, 4]
print(f"Product except self: {product_except_self(arr)}")
```

---

## 🔍 Explanation
- **Prefix and Suffix Arrays**:
  - Prefix array stores the product of all elements before the current index.
  - Suffix array stores the product of all elements after the current index.
  - Result is calculated by multiplying prefix and suffix values.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(n)             | Uses prefix and suffix arrays |
| Python   | O(n)            | O(n)             | Uses prefix and suffix arrays |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases:
  - Array with one element.
  - Array with all identical elements.
- Explain why division is avoided in this approach.

---

## 🏷 Tags
`arrays`, `python`, `java`, `product-except-self`, `hard`, `interview`, `prefix-suffix`
---
