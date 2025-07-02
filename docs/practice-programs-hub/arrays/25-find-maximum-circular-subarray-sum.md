---
title: Find Maximum Circular Subarray Sum
tags:
  - java
  - python
  - arrays
  - hard
  - kadane
categories:
  - Programming
  - Interview
difficulty: hard
background: bg-[#fde68a]
badge_color: text-yellow-800 bg-yellow-100
topic: arrays
date: 2025-07-25
author: Anikethan Bekal
intro: |
  This is a challenging interview question for SDET roles that tests understanding of array manipulation and Kadane's Algorithm.
---

# 🧠 Problem: Find Maximum Circular Subarray Sum

Given an array of integers, find the maximum sum of a circular subarray.

**Category**: Arrays  
**Difficulty**: Hard  
**Tags**: arrays, kadane, circular-subarray

---

## ✅ Requirements
- **Input**: An array of integers `arr` (e.g., `[8, -1, -3, 8]`)
- **Output**: Maximum sum of a circular subarray (e.g., `16`)
- **Constraints**:
  - Array can contain positive and negative integers.

---

## 🧪 Example(s)
```text
Input: [8, -1, -3, 8]
Output: 16
```

---

## 🧪 Test Cases
| Input              | Output |
|---------------------|--------|
| [8, -1, -3, 8]      | 16     |
| [1, 2, 3, 4, 5]      | 15     |
| [-1, -2, -3, -4]     | -1     |
| [10, -5, 10]         | 20     |

---

## ☕ Java Solution
```java
public class MaximumCircularSubarraySum {
    // Approach: Kadane's Algorithm
    public static int findMaxCircularSubarraySum(int[] arr) {
        int maxKadane = kadane(arr);
        int totalSum = 0;
        for (int i = 0; i < arr.length; i++) {
            totalSum += arr[i];
            arr[i] = -arr[i];
        }
        int maxWrap = totalSum + kadane(arr);
        return maxWrap > 0 ? Math.max(maxKadane, maxWrap) : maxKadane;
    }

    private static int kadane(int[] arr) {
        int maxSum = arr[0], currentSum = arr[0];
        for (int i = 1; i < arr.length; i++) {
            currentSum = Math.max(arr[i], currentSum + arr[i]);
            maxSum = Math.max(maxSum, currentSum);
        }
        return maxSum;
    }

    public static void main(String[] args) {
        int[] arr = {8, -1, -3, 8};
        System.out.println("Maximum circular subarray sum: " + findMaxCircularSubarraySum(arr));
    }
}
```

---

## 🔵🟡 Python Solution
```python
def find_max_circular_subarray_sum(arr):
    # Approach: Kadane's Algorithm
    def kadane(arr):
        max_sum = current_sum = arr[0]
        for num in arr[1:]:
            current_sum = max(num, current_sum + num)
            max_sum = max(max_sum, current_sum)
        return max_sum

    max_kadane = kadane(arr)
    total_sum = sum(arr)
    arr = [-num for num in arr]
    max_wrap = total_sum + kadane(arr)
    return max_wrap if max_wrap > 0 else max_kadane

# Example usage
arr = [8, -1, -3, 8]
print(f"Maximum circular subarray sum: {find_max_circular_subarray_sum(arr)}")
```

---

## 🔍 Explanation
- **Kadane's Algorithm**:
  - Finds the maximum subarray sum using Kadane's Algorithm.
  - Calculates the maximum circular sum by inverting the array and adding the total sum.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(1)             | Single pass using Kadane's Algorithm |
| Python   | O(n)            | O(1)             | Single pass using Kadane's Algorithm |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases:
  - Array with all negative numbers.
  - Array with only one element.
- Explain why Kadane's Algorithm is used twice.

---

## 🏷 Tags
`arrays`, `python`, `java`, `circular-subarray`, `hard`, `interview`, `kadane`
---
