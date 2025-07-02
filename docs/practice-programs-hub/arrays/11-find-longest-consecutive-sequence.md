---
title: Find the Longest Consecutive Sequence in an Array
tags:
  - java
  - python
  - arrays
  - hard
  - hash-set
categories:
  - Programming
  - Interview
difficulty: hard
background: bg-[#fde68a]
badge_color: text-yellow-800 bg-yellow-100
topic: arrays
date: 2025-07-11
author: Anikethan Bekal
intro: |
  This is a challenging interview question for SDET roles that tests understanding of array manipulation and efficient algorithms using hash sets.
---

# 🧠 Problem: Find the Longest Consecutive Sequence in an Array

Given an unsorted array of integers, find the length of the longest consecutive sequence.

**Category**: Arrays  
**Difficulty**: Hard  
**Tags**: arrays, hash-set, consecutive-sequence

---

## ✅ Requirements
- **Input**: An array of integers `arr` (e.g., `[100, 4, 200, 1, 3, 2]`)
- **Output**: Length of the longest consecutive sequence (e.g., `4`)
- **Constraints**:
  - Array can contain duplicates.

---

## 🧪 Example(s)
```text
Input: [100, 4, 200, 1, 3, 2]
Output: 4
```

---

## 🧪 Test Cases
| Input                     | Output |
|----------------------------|--------|
| [100, 4, 200, 1, 3, 2]     | 4      |
| [1, 2, 3, 4, 5]            | 5      |
| [10, 5, 12, 6, 11]         | 3      |
| [1, 1, 1, 1]               | 1      |

---

## ☕ Java Solution
```java
import java.util.HashSet;

public class LongestConsecutiveSequence {
    // Approach: HashSet to track elements
    public static int findLongestConsecutiveSequence(int[] arr) {
        HashSet<Integer> set = new HashSet<>();
        for (int num : arr) {
            set.add(num);
        }

        int longestStreak = 0;
        for (int num : set) {
            if (!set.contains(num - 1)) { // Start of a sequence
                int currentNum = num;
                int currentStreak = 1;

                while (set.contains(currentNum + 1)) {
                    currentNum++;
                    currentStreak++;
                }

                longestStreak = Math.max(longestStreak, currentStreak);
            }
        }
        return longestStreak;
    }

    public static void main(String[] args) {
        int[] arr = {100, 4, 200, 1, 3, 2};
        System.out.println("Longest consecutive sequence length: " + findLongestConsecutiveSequence(arr));
    }
}
```

---

## 🔵🟡 Python Solution
```python
def find_longest_consecutive_sequence(arr):
    # Approach: HashSet to track elements
    num_set = set(arr)
    longest_streak = 0

    for num in num_set:
        if num - 1 not in num_set:  # Start of a sequence
            current_num = num
            current_streak = 1

            while current_num + 1 in num_set:
                current_num += 1
                current_streak += 1

            longest_streak = max(longest_streak, current_streak)

    return longest_streak

# Example usage
arr = [100, 4, 200, 1, 3, 2]
print(f"Longest consecutive sequence length: {find_longest_consecutive_sequence(arr)}")
```

---

## 🔍 Explanation
- **HashSet**:
  - Tracks all elements in the array.
  - Identifies the start of a sequence by checking if `num - 1` exists.
  - Expands the sequence by checking consecutive numbers.

---

## ⏱️ Time & Space Complexity
| Language | Time Complexity | Space Complexity | Notes |
|----------|-----------------|------------------|-------|
| Java     | O(n)            | O(n)             | HashSet operations are O(1) |
| Python   | O(n)            | O(n)             | HashSet operations are O(1) |

---

## ⚠️ Interview Tips / Notes
- Discuss edge cases:
  - Array with all identical elements.
  - Array with no consecutive sequence.
- Explain the efficiency of HashSet compared to sorting.

---

## 🏷 Tags
`arrays`, `python`, `java`, `consecutive-sequence`, `hard`, `interview`, `hash-set`
---
