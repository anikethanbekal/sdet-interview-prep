# SDET Interview Practice Programming Questions

This comprehensive list contains **200+ practice programming questions** categorized by **difficulty level** and **topic** to help you prepare for SDET interviews. The questions are designed to test both algorithmic thinking and practical testing/automation skills.

---

## 🔹 Easy Level (80 Questions)

### 🧮 Arrays & Strings (20)
1.  Find the **maximum element** in an array.
2.  **Reverse a string**.
3.  Check if two strings are **anagrams**.
4.  **Remove duplicates** from an array.
5.  Find the **second largest element** in an array.
6.  **Merge two sorted arrays**.
7.  Find **common elements** in two arrays.
8.  **Count the frequency** of elements in an array.
9.  **Rotate an array** by one position.
10. Return the **sum of all even numbers** in an array.
11. Check if a string is a **palindrome**.
12. **Replace all spaces** in a string with `"%20"`.
13. **Move all zeros** to the end of the array.
14. Find the **missing number** in a range from 1 to N.
15. **Convert a string to an integer**.
16. **Capitalize the first letter** of each word in a sentence.
17. Find the **first occurrence** of a character in a string.
18. Check if an array is **sorted** in ascending order.
19. **Find the longest word** in a sentence.
20. **Count words** in a string.

### 🔄 Loops & Conditions (15)
21. Print the **Fibonacci series** up to N.
22. Check if a number is **prime**.
23. Find the **factorial** of a number.
24. **Count the number of vowels** in a string.
25. Print numbers from 1 to 100 with **FizzBuzz logic**.
26. Print all **prime numbers between 1 and 100**.
27. **Sum of digits** in an integer.
28. Check if a number is a **power of two**.
29. Find the **largest of three numbers**.
30. **Count digits** in a number.
31. Check if a year is a **leap year**.
32. Calculate **simple interest** given principal, rate, and time.
33. **Print multiplication table** for a given number.
34. **Check if a number is Armstrong number**.
35. **Find all factors** of a number.

### 🧠 Hashing & Sets (10)
36. Check for **duplicates using a set**.
37. Find the **first non-repeating character** in a string.
38. Implement a **hash map** (using a dictionary/map in your chosen language).
39. Find the **intersection of two arrays using sets**.
40. Find all **pairs that sum to a target**.
41. **Count unique words** in a sentence.
42. **Remove duplicates from a linked list**.
43. Check if a string has **all unique characters**.
44. **Group words with the same characters** (e.g., "eat", "tea", "ate").
45. Implement a **simple LRU cache** (basic concept).

### 🔗 Linked Lists (5)
46. **Reverse a linked list**.
47. Find the **middle of a linked list**.
48. **Detect a cycle** in a linked list.
49. **Merge two sorted linked lists**.
50. **Remove the Nth node from the end** of a list.

### 🧪 Testing Logic & Automation-Oriented (15)
> **Note**: These questions are critical for SDET roles as they test your ability to automate, validate, and debug real-world scenarios.

51. Write a function to **validate an email format** (basic regex).
52. Simulate **login API test** (input/output design, status codes).
53. Write a function to test **palindrome detection logic**.
54. Debug a function that fails intermittently and identify the root cause.
55. Implement a **retry mechanism for flaky tests** (e.g., with max attempts).
56. Write a function to **compare two JSON objects** (deep comparison).
57. Validate a **phone number using regex** (e.g., a specific format).
58. Create a **test data generator for usernames** (e.g., unique, valid format).
59. Validate **input fields with boundary values** (e.g., min/max length, special chars).
60. Create a **mock function to simulate a database call** (e.g., return predefined data).
61. Write a test case for **pagination API** (e.g., first page, middle, last, empty).
62. **Validate URL format** using regex.
63. **Generate random test data** for different data types.
64. **Parse CSV data** and validate its structure.
65. **Validate date formats** in different locales.

### 🧱 Stack & Queue (5)
66. Implement a **stack using an array**.
67. Implement a **queue using two stacks**.
68. Check for **balanced parentheses** in a string.
69. Implement a simple **browser back button using a stack**.
70. **Reverse a queue**.

### 📋 Miscellaneous (10)
71. **Convert a decimal number to binary**.
72. Find the **GCD (Greatest Common Divisor)** of two numbers.
73. Validate if **brackets are correctly nested** (using a stack).
74. Calculate the **average of an array of numbers**.
75. **Flatten a nested list** (1 level deep, e.g., `[[1,2],[3,4]]` to `[1,2,3,4]`).
76. **Convert temperature** between Celsius and Fahrenheit.
77. **Calculate compound interest**.
78. **Find LCM** of two numbers.
79. **Check if a number is perfect square**.
80. **Convert binary to decimal**.

---

## 🔸 Medium Level (70 Questions)

### 🔁 Arrays & Strings (20)
81. Find the **longest substring without repeating characters**.
82. **Rotate a matrix by 90 degrees** (in-place).
83. Find all **subarrays that sum to a target value**.
84. Implement **wildcard matching** (`*`, `?`) for strings.
85. Convert a **Roman numeral to an integer**.
86. Implement **string compression** (e.g., `"aaabb"` → `"a3b2"`).
87. Find the **longest common prefix** among a list of words.
88. Find the **majority element** in an array (appears more than n/2 times).
89. Search for a **target in a rotated sorted array**.
90. Implement `strstr` (substring search) function.
91. Find the **minimum window substring** containing all characters of another string.
92. **Group Anagrams** together (e.g., ["eat", "tea", "tan", "ate", "nat", "bat"]).
93. Implement a function to **shuffle an array** randomly.
94. Find the **kth largest element** in an array.
95. Calculate the **maximum product subarray**.
96. **Find the longest palindromic substring**.
97. **Implement string to integer conversion** with error handling.
98. **Find all permutations** of a string.
99. **Check if strings are rotations** of each other.
100. **Implement basic regex matching** (`.` and `*`).

### 🧠 Hash Map / Sets (10)
101. Implement a **word frequency counter** using a hash map.
102. Find two strings that are **one edit apart** (insert, delete, or replace).
103. Implement an **LRU Cache class** with `get`/`put` operations.
104. Find the **longest consecutive sequence** in an unsorted array.
105. Implement a basic **spell checker with suggestions** (e.g., using Levenshtein distance).
106. Find the **difference of two arrays** (elements present in one but not the other).
107. Design a **TinyURL** or URL shortener (basic hash map concept).
108. **Find the first duplicate** in an array.
109. **Implement a simple bloom filter**.
110. **Group strings by length** using hash map.

### 📋 Linked Lists & Recursion (10)
111. **Detect and remove a loop** in a linked list.
112. Add two numbers represented by **linked lists** (e.g., `(2 -> 4 -> 3) + (5 -> 6 -> 4)`).
113. Clone a linked list with **next and random pointers**.
114. Implement **recursive string reversal**.
115. Flatten a **multilevel linked list** (e.g., where nodes can have a `child` pointer).
116. **Reverse linked list in groups** of k.
117. **Find intersection point** of two linked lists.
118. **Sort a linked list** using merge sort.
119. **Remove duplicates** from sorted linked list.
120. **Check if linked list is palindrome**.

### 🧱 Stack / Queue / Trees (15)
121. **Evaluate a postfix expression**.
122. **Serialize and deserialize a binary tree**.
123. Find the **height of a binary tree**.
124. Implement **level-order traversal** of a binary tree.
125. Check if a binary tree is a **Binary Search Tree (BST)**.
126. Find the **lowest common ancestor (LCA)** of two nodes in a BST.
127. Implement a **Min Stack** (stack that also returns min element in O(1)).
128. Implement a **queue with a circular buffer**.
129. Print all **root-to-leaf paths** in a binary tree.
130. Convert **infix expression to postfix**.
131. **Invert a binary tree**.
132. **Find diameter of binary tree**.
133. **Check if binary tree is balanced**.
134. **Print nodes at k distance** from root.
135. **Convert sorted array to BST**.

### 🐞 Debugging Challenges (5)
> **Note**: Debugging is a critical skill for SDETs. These challenges focus on identifying and fixing issues in code or systems.

1. Debug a function that throws a null pointer exception.
2. Identify and fix a memory leak in a program.
3. Debug a failing API test and identify the root cause.
4. Fix a race condition in a multithreaded program.
5. Debug a Selenium test that fails intermittently due to timing issues.

### 🧪 SDET-Specific Logic (15)
136. Write a function to demonstrate a **data-driven test framework** in code (e.g., reading test data from CSV/Excel).
137. Simulate **API request and assert status codes and payload** (using a mock HTTP client).
138. Write a function that **mocks file uploads** to a server (e.g., simulates success/failure).
139. Implement a **`wait-until-success` retry logic with timeout** for an operation.
140. Create a test function to **validate cookie values in response headers**.
141. Validate **XML structure programmatically** (e.g., using XPath or an XML parser).
142. **Compare two log files** and return significant differences (e.g., based on keywords).
143. Generate a set of **random test inputs with constraints** (e.g., numbers within a range, specific string patterns).
144. Write a test case to simulate **1000 parallel users accessing an endpoint** (conceptual design/pseudocode for load testing).
145. Implement a **mock HTTP server to simulate flaky APIs** (e.g., introduce delays, return errors randomly).
146. Design a simple **logging utility** with different log levels (INFO, WARN, ERROR).
147. How would you **test a feature that involves real-time updates** (e.g., web sockets)? (Conceptual)
148. Write a function to **parse command-line arguments** for a test script.
149. **Validate JSON schema** against a predefined structure.
150. **Generate test reports** in different formats (HTML, XML, JSON).

---

## 🔴 Hard Level (60 Questions)

### 🔁 Advanced Arrays & Strings (15)
151. **Find the longest substring with at most k distinct characters**.
152. **Implement regular expression matching** (support for `*`, `+`, `?`).
153. **Find the longest common subsequence** of two strings.
154. **Implement string matching using KMP algorithm**.
155. **Find all anagrams in a string**.
156. **Implement wildcard pattern matching** with `*` and `?`.
157. **Find the shortest superstring** containing all given strings.
158. **Implement string interleaving** check.
159. **Find the longest palindromic subsequence**.
160. **Implement string matching with backspace** character.
161. **Find the longest substring with k unique characters**.
162. **Implement string matching with wildcards**.
163. **Find the shortest common supersequence**.
164. **Implement string matching with one mismatch**.
165. **Find the longest substring with equal 0s and 1s**.

### 🧠 Advanced Data Structures (15)
166. **Implement a Trie** (prefix tree) with insert, search, and delete operations.
167. **Design a data structure** that supports insert, delete, search, and getRandom in O(1).
168. **Implement a segment tree** for range sum queries.
169. **Design a circular queue** with dynamic size.
170. **Implement a skip list** data structure.
171. **Design a data structure** for LRU cache with O(1) operations.
172. **Implement a disjoint set** (union-find) data structure.
173. **Design a data structure** for efficient range queries.
174. **Implement a B-tree** data structure.
175. **Design a data structure** for efficient string operations.
176. **Implement a suffix tree** for string operations.
177. **Design a data structure** for efficient graph operations.
178. **Implement a bloom filter** with configurable false positive rate.
179. **Design a data structure** for efficient matrix operations.
180. **Implement a rope data structure** for efficient string operations.

### 🌳 Advanced Trees & Graphs (15)
181. **Serialize and deserialize a binary tree** with null markers.
182. **Find the diameter of a binary tree** (longest path between any two nodes).
183. **Implement level-order traversal** with null markers.
184. **Check if a binary tree is complete**.
185. **Find the lowest common ancestor** in a binary tree (not necessarily BST).
186. **Implement iterative postorder traversal**.
187. **Find the maximum path sum** in a binary tree.
188. **Implement Morris traversal** for inorder traversal.
189. **Check if a binary tree is balanced** (height difference ≤ 1).
190. **Find the kth smallest element** in a BST.
191. **Implement a binary search tree** with delete operation.
192. **Convert a binary tree to a doubly linked list**.
193. **Find the largest BST subtree** in a binary tree.
194. **Implement a binary tree iterator**.
195. **Find the shortest path** in a weighted graph.

### 🔄 CI/CD and Test Integration (5)
> **Note**: These challenges focus on integrating tests into CI/CD pipelines and handling complex test scenarios.

1. Design a CI/CD pipeline that runs tests in parallel and generates reports.
2. Implement a script to trigger tests automatically on code commits.
3. Debug a failing test in a CI/CD pipeline and identify the root cause.
4. Automate the deployment of a test environment using Docker.
5. Integrate performance tests into a CI/CD pipeline and analyze results.

### 🧪 Advanced SDET & Performance Testing (15)
196. **Design a load testing framework** that can simulate millions of concurrent users.
197. **Implement a distributed test execution** system with master-slave architecture.
198. **Design a test data management system** that can generate, store, and clean test data.
199. **Implement a test result aggregation** system that can handle large-scale test runs.
200. **Design a test automation framework** that supports multiple browsers and platforms.
201. **Implement a test reporting system** with real-time dashboards.
202. **Design a test environment management** system for dynamic provisioning.
203. **Implement a test case prioritization** algorithm based on risk and coverage.
204. **Design a test execution pipeline** with parallel and sequential execution.
205. **Implement a test data masking** system for sensitive data.
206. **Design a test monitoring system** that tracks system resources during test execution.
207. **Implement a test result comparison** system for regression testing.
208. **Design a test automation framework** that supports keyword-driven testing.
209. **Implement a test data generation** system with constraints and relationships.
210. **Design a test execution scheduler** that optimizes resource utilization.

---

## 🎯 Interview Preparation Tips

### 📝 Before the Interview
- **Practice coding** on platforms like LeetCode, HackerRank, or CodeSignal
- **Review data structures** and algorithms fundamentals
- **Prepare examples** of your testing experience
- **Practice explaining** your thought process while coding
- **Review system design** concepts for testing frameworks

### 💡 During the Interview
- **Clarify requirements** before starting to code
- **Think out loud** while solving problems
- **Consider edge cases** and error handling
- **Discuss time and space complexity** of your solutions
- **Ask questions** about the problem if needed

### 🔍 Common SDET Interview Topics
- **Test automation frameworks** (Selenium, Appium, Playwright, Cypress)
- **API testing tools** (Postman, RestAssured, Karate)
- **Performance testing** (JMeter, Gatling, k6)
- **CI/CD pipelines** and test integration (Jenkins, GitHub Actions, Azure DevOps)
- **Test data management** and test environment setup (Docker, Kubernetes)
- **Test reporting** and metrics (Allure, ExtentReports)
- **Mobile testing** and cross-platform testing (BrowserStack, Sauce Labs)
- **Security testing** basics (OWASP ZAP, Burp Suite)

### 📚 Additional Resources
- **Books**: "Test Automation with Selenium", "API Testing with Postman"
- **Online Courses**: Udemy, Coursera, Pluralsight
- **Practice Platforms**: LeetCode, HackerRank, TestDome
- **Testing Tools**: Selenium, Appium, JMeter, Postman
- **Frameworks**: TestNG, JUnit, PyTest, Cucumber

---

*Total Questions: 245+ | Last Updated: 2024*

This comprehensive list covers both algorithmic problem-solving and practical SDET skills. Focus on understanding the underlying concepts rather than memorizing solutions. Practice implementing these solutions in your preferred programming language and testing framework.