---
title: Find Maximum Product Subarray
tags:
  - java
  - python
  - arrays
  - hard
  - dynamic-programming
categories:
  - Programming
  - Interview
difficulty: hard
background: bg-[#fde68a]
badge_color: text-yellow-800 bg-yellow-100
topic: arrays
date: 2025-07-19
author: Anikethan Bekal
intro: |
  This is a challenging interview question for SDET roles that tests understanding of array manipulation and dynamic programming techniques.
---

# 🧠 Problem: Find Maximum Product Subarray

Given an array of integers, find the maximum product of a contiguous subarray.

**Category**: Arrays  
**Difficulty**: Hard  
**Tags**: arrays, dynamic-programming, product-subarray

---

## ✅ Requirements
- **Input**: An array of integers `arr` (e.g., `[2, 3, -2, 4]`)
- **Output**: Maximum product of a contiguous subarray (e.g., `6`)
- **Constraints**:
  - Array can contain positive and negative integers.

---

## 🧪 Example(s)
```text
Input: [2, 3, -2, 4]
Output: 6
```

---

## 🧪 Test Cases
| Input              | Output |
|---------------------|--------|
| [2, 3, -2, 4]       | 6      |
| [-2, 0, -1]         | 0      |
| [1, 2, 3, 4]        | 24     |
| [-1, -2, -3, -4]    | 24     |

---

## ☕ Java Solution
```java
public class MaximumProductSubarray {
    // Approach: Dynamic Programming
    public static int findMaxProductSubarray(int[] arr) {
        int maxProduct = arr[0], minProduct = arr[0], result = arr[0];
        for (int i = 1; i < arr.length; i++) {
            int tempMax = maxProduct;
            maxProduct = Math.max(arr[i], Math.max(maxProduct * arr[i], minProduct * arr[i]));
            minProduct = Math.min(arr[i], Math.min(tempMax * arr[i], minProduct * arr[i]));
            result = Math.max(result, maxProduct);
        }
        return result;
    }

    public static void main(String[] args) {
        int[] arr = {2, 3, -2, 4};
        System.out.println("Maximum product subarray: " + findMaxProductSubarray(arr));
    }
}
```

---

## 🔵🟡 Python Solution
```python
def find_max_product_subarray(arr):
    # Approach: Dynamic Programming
    max_product = min_product = result = arr[0]
    for num in arr[1:]:
        temp_max = max_product
        max_product = max(num, max(max_product * num, min_product * num))
        min_product = min(num, min(temp_max * num, min_product * num))
        result = max(result, max_product)
    return result

# Example usage
arr = [2, 3, -2, 4]
print(f"Maximum product subarray: {find_max_product_subarray(arr)}")
```

---

## 🔍 Explanation
- **Dynamic Programming**:
  - Maintains two variables (`maxProduct` and `minProduct`) to track the maximum and minimum product at each step.
  - Updates the result with the maximum product encountered so far.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)             | Single pass through the array |
| Python   | O(n)            | O(1)             | Single pass through the array |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases:
  - Array with all negative numbers.
  - Array with zeros.
- Explain why maintaining both `maxProduct` and `minProduct` is necessary.

---

## 🏷 Tags
`arrays`, `python`, `java`, `product-subarray`, `hard`, `interview`, `dynamic-programming`
---
