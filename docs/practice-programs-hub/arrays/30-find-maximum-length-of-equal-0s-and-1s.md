---
title: Find Maximum Length of Contiguous Subarray with Equal 0s and 1s
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
date: 2025-07-30
author: Anikethan Bekal
intro: |
  This is a common interview question for SDET roles that tests understanding of array manipulation and hash-based techniques.
---

# 🧠 Problem: Find Maximum Length of Contiguous Subarray with Equal 0s and 1s

Given a binary array, find the maximum length of a contiguous subarray with an equal number of 0s and 1s.

**Category**: Arrays  
**Difficulty**: Medium  
**Tags**: arrays, hash-map, subarray-equal-0s-1s

---

## ✅ Requirements
- **Input**: A binary array `arr` (e.g., `[0, 1, 0, 1]`)
- **Output**: Maximum length of the subarray (e.g., `4`)
- **Constraints**:
  - Array contains only 0s and 1s.

---

## 🧪 Example(s)
```text
Input: [0, 1, 0, 1]
Output: 4
```

---

## 🧪 Test Cases
| Input                  | Output |
|-------------------------|--------|
| [0, 1, 0, 1]           | 4      |
| [0, 0, 1, 1, 0, 1]     | 6      |
| [1, 1, 1, 0, 0, 0]     | 6      |
| [1, 1, 1, 1]           | 0      |

---

## ☕ Java Solution
```java
import java.util.HashMap;

public class MaximumLengthEqual0s1s {
    // Approach: HashMap to track prefix sums
    public static int findMaxLength(int[] arr) {
        HashMap<Integer, Integer> prefixSumMap = new HashMap<>();
        int sum = 0, maxLength = 0;
        prefixSumMap.put(0, -1); // Handle cases where subarray starts at index 0

        for (int i = 0; i < arr.length; i++) {
            sum += (arr[i] == 0) ? -1 : 1;
            if (prefixSumMap.containsKey(sum)) {
                maxLength = Math.max(maxLength, i - prefixSumMap.get(sum));
            } else {
                prefixSumMap.put(sum, i);
            }
        }
        return maxLength;
    }

    public static void main(String[] args) {
        int[] arr = {0, 1, 0, 1};
        System.out.println("Maximum length of subarray: " + findMaxLength(arr));
    }
}
```

---

## 🔵🟡 Python Solution
```python
def find_max_length(arr):
    # Approach: HashMap to track prefix sums
    prefix_sum_map = {0: -1}  # Handle cases where subarray starts at index 0
    sum = 0
    max_length = 0

    for i, num in enumerate(arr):
        sum += -1 if num == 0 else 1
        if sum in prefix_sum_map:
            max_length = max(max_length, i - prefix_sum_map[sum])
        else:
            prefix_sum_map[sum] = i

    return max_length

# Example usage
arr = [0, 1, 0, 1]
print(f"Maximum length of subarray: {find_max_length(arr)}")
```

---

## 🔍 Explanation
- **HashMap**:
  - Tracks prefix sums and their indices.
  - Checks if the current prefix sum has been seen before to calculate the length of the subarray.

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
`arrays`, `python`, `java`, `subarray-equal-0s-1s`, `medium`, `interview`, `hash-map`
---
