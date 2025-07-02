---
title: Find Subarrays with Product Less Than K
tags:
  - java
  - python
  - arrays
  - medium
  - sliding-window
categories:
  - Programming
  - Interview
difficulty: medium
background: bg-[#fef3c7]
badge_color: text-yellow-800 bg-yellow-100
topic: arrays
date: 2025-07-29
author: Anikethan Bekal
intro: |
  This is a common interview question for SDET roles that tests understanding of array manipulation and sliding window techniques.
---

# 🧠 Problem: Find Subarrays with Product Less Than K

Given an array of integers and a target product `k`, find the number of contiguous subarrays with a product less than `k`.

**Category**: Arrays  
**Difficulty**: Medium  
**Tags**: arrays, sliding-window, subarray-product

---

## ✅ Requirements
- **Input**: An array of integers `arr` (e.g., `[10, 5, 2, 6]`) and an integer `k` (e.g., `100`)
- **Output**: Number of subarrays (e.g., `8`)
- **Constraints**:
  - Array contains positive integers.

---

## 🧪 Example(s)
```text
Input: arr = [10, 5, 2, 6], k = 100
Output: 8
```

---

## 🧪 Test Cases
| Input                  | Output |
|-------------------------|--------|
| [10, 5, 2, 6], 100     | 8      |
| [1, 2, 3], 10          | 6      |
| [1, 1, 1, 1], 2        | 10     |
| [5, 1, 2, 3], 10       | 7      |

---

## ☕ Java Solution
```java
public class SubarrayProductLessThanK {
    // Approach: Sliding Window
    public static int findSubarraysWithProductLessThanK(int[] arr, int k) {
        if (k <= 1) return 0;
        int count = 0, product = 1, start = 0;
        for (int end = 0; end < arr.length; end++) {
            product *= arr[end];
            while (product >= k) {
                product /= arr[start++];
            }
            count += end - start + 1;
        }
        return count;
    }

    public static void main(String[] args) {
        int[] arr = {10, 5, 2, 6};
        int k = 100;
        System.out.println("Number of subarrays: " + findSubarraysWithProductLessThanK(arr, k));
    }
}
```

---

## 🔵🟡 Python Solution
```python
def find_subarrays_with_product_less_than_k(arr, k):
    # Approach: Sliding Window
    if k <= 1:
        return 0
    count, product, start = 0, 1, 0
    for end in range(len(arr)):
        product *= arr[end]
        while product >= k:
            product //= arr[start]
            start += 1
        count += end - start + 1
    return count

# Example usage
arr = [10, 5, 2, 6]
k = 100
print(f"Number of subarrays: {find_subarrays_with_product_less_than_k(arr, k)}")
```

---

## 🔍 Explanation
- **Sliding Window**:
  - Expands the window by multiplying elements to the product.
  - Shrinks the window by dividing elements when the product exceeds or equals `k`.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)             | Single pass using sliding window |
| Python   | O(n)            | O(1)             | Single pass using sliding window |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases:
  - No subarray found (return `0`).
  - Subarray is the entire array.
- Explain the efficiency of sliding window compared to brute force.

---

## 🏷 Tags
`arrays`, `python`, `java`, `subarray-product`, `medium`, `interview`, `sliding-window`
---
