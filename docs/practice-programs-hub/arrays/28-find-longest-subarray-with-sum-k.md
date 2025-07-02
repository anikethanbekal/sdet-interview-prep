---
title: Find Longest Subarray with Sum Equal to K
tags:
  - java
  - python
  - arrays
  - medium
  - hash-map
categories:
  - Programming
  - Interview
difficulty: medium
background: bg-[#fef3c7]
badge_color: text-yellow-800 bg-yellow-100
topic: arrays
date: 2025-07-28
author: Anikethan Bekal
intro: |
  This is a common interview question for SDET roles that tests understanding of array manipulation and hash-based techniques.
---

# 🧠 Problem: Find Longest Subarray with Sum Equal to K

Given an array of integers and a target sum `k`, find the length of the longest subarray with a sum equal to `k`.

**Category**: Arrays  
**Difficulty**: Medium  
**Tags**: arrays, hash-map, subarray-sum

---

## ✅ Requirements
- **Input**: An array of integers `arr` (e.g., `[1, 2, 3, 7, 5]`) and an integer `k` (e.g., `12`)
- **Output**: Length of the longest subarray (e.g., `2`)
- **Constraints**:
  - Array can contain positive and negative integers.

---

## 🧪 Example(s)
```text
Input: arr = [1, 2, 3, 7, 5], k = 12
Output: 2
```

---

## 🧪 Test Cases
| Input                  | Output |
|-------------------------|--------|
| [1, 2, 3, 7, 5], 12    | 2      |
| [1, 2, 3, 4, 5], 9     | 3      |
| [-1, -2, -3, -4], -6   | 2      |
| [5, 1, 2, 3], 10       | 4      |

---

## ☕ Java Solution
```java
import java.util.HashMap;

public class LongestSubarrayWithSumK {
    // Approach: HashMap to track prefix sums
    public static int findLongestSubarrayWithSumK(int[] arr, int k) {
        HashMap<Integer, Integer> prefixSumMap = new HashMap<>();
        int sum = 0, maxLength = 0;
        prefixSumMap.put(0, -1); // Handle cases where subarray starts at index 0

        for (int i = 0; i < arr.length; i++) {
            sum += arr[i];
            if (prefixSumMap.containsKey(sum - k)) {
                maxLength = Math.max(maxLength, i - prefixSumMap.get(sum - k));
            }
            prefixSumMap.putIfAbsent(sum, i);
        }
        return maxLength;
    }

    public static void main(String[] args) {
        int[] arr = {1, 2, 3, 7, 5};
        int k = 12;
        System.out.println("Longest subarray length: " + findLongestSubarrayWithSumK(arr, k));
    }
}
```

---

## 🔵🟡 Python Solution
```python
def find_longest_subarray_with_sum_k(arr, k):
    # Approach: HashMap to track prefix sums
    prefix_sum_map = {0: -1}  # Handle cases where subarray starts at index 0
    sum = 0
    max_length = 0

    for i, num in enumerate(arr):
        sum += num
        if sum - k in prefix_sum_map:
            max_length = max(max_length, i - prefix_sum_map[sum - k])
        if sum not in prefix_sum_map:
            prefix_sum_map[sum] = i

    return max_length

# Example usage
arr = [1, 2, 3, 7, 5]
k = 12
print(f"Longest subarray length: {find_longest_subarray_with_sum_k(arr, k)}")
```

---

## 🔍 Explanation
- **HashMap**:
  - Tracks prefix sums and their indices.
  - Checks if the difference between the current sum and `k` exists in the map.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(n)             | Uses `HashMap` for prefix sums |
| Python   | O(n)            | O(n)             | Uses `dict` for prefix sums |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases:
  - No subarray found (return `0`).
  - Subarray is the entire array.
- Explain why prefix sums are preferred over nested loops.

---

## 🏷 Tags
`arrays`, `python`, `java`, `subarray-sum`, `medium`, `interview`, `hash-map`
---
