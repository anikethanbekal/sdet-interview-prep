# Advanced Data Structures in Python

Explore Python's built-in and specialized data structures beyond the basics, and understand their optimal use cases in test automation and data manipulation.

## Topics:

- **Advanced List Operations:** Slicing, list comprehensions, nested lists.
- **Dictionary Deep Dive:** Views, iteration, nested dictionaries.
- **Sets for Uniqueness:** Set operations (union, intersection, difference).
- **`collections` Module:** `deque`, `Counter`, `defaultdict`, `namedtuple`.
- **When to Use Which:** Performance considerations and practical examples.

---

## 💡 SDET Perspective on Python Data Structures

Python's flexible and powerful built-in data structures are a cornerstone for efficient test automation. SDETs frequently use them to manage test data, parse API responses (often JSON), interact with web elements, and organize test configurations. A deep understanding allows for more concise, readable, and performant test scripts.

---

## ✅ Advanced List Operations

Lists are ordered, mutable sequences that can hold items of different data types.

### Slicing

Slicing allows you to extract a portion of a list. The syntax is `list[start:end:step]`.

- `start`: (Optional) The starting index (inclusive). Defaults to 0.
- `end`: (Optional) The ending index (exclusive). Defaults to the end of the list.
- `step`: (Optional) The step size. Defaults to 1.

**SDET Relevance:** Extracting specific ranges of data from a list of test results or web elements.

```python
my_list = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

print(my_list[2:7])    # [2, 3, 4, 5, 6] - Elements from index 2 up to (but not including) 7
print(my_list[:5])     # [0, 1, 2, 3, 4] - Elements from beginning up to (but not including) 5
print(my_list[5:])     # [5, 6, 7, 8, 9] - Elements from index 5 to the end
print(my_list[::2])    # [0, 2, 4, 6, 8] - Every second element
print(my_list[::-1])   # [9, 8, 7, 6, 5, 4, 3, 2, 1, 0] - Reverse the list
print(my_list[1:8:3])  # [1, 4, 7] - From index 1 to 8 (exclusive), step 3
```

### List Comprehensions

A concise way to create lists. They are often more readable and efficient than traditional `for` loops for list creation.

**SDET Relevance:** Transforming data, filtering lists of elements, generating test data.

```python
# Basic transformation: Get text from a list of WebElements
# web_elements = [elem1, elem2, elem3] # Assume these are Selenium WebElements
# element_texts = [elem.text for elem in web_elements]

# Filtering: Get only visible elements
# visible_elements = [elem for elem in web_elements if elem.is_displayed()]

# Generating test data: Create a list of 10 user IDs
user_ids = [f"user_{i:03d}" for i in range(1, 11)]
print(user_ids) # ['user_001', 'user_002', ..., 'user_010']

# Nested list comprehension: Flatten a list of lists
matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
flat_list = [num for row in matrix for num in row]
print(flat_list) # [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

### Nested Lists

Lists can contain other lists, forming structures like matrices or tables.

**SDET Relevance:** Representing tabular test data (e.g., from CSV/Excel), or complex UI structures.

```python
test_data = [
    ["username", "password", "expected_result"],
    ["user1", "pass1", "success"],
    ["user2", "wrong_pass", "failure"]
]

# Accessing data
print(test_data[1][0]) # "user1"

# Iterating through nested list
for row in test_data:
    print(row)
```

---

## ✅ Dictionary Deep Dive

Dictionaries are unordered collections of key-value pairs. Keys must be unique and immutable.

### Views (`keys()`, `values()`, `items()`)

These methods return view objects that provide a dynamic view of the dictionary's contents. Changes to the dictionary are reflected in the view.

**SDET Relevance:** Iterating through API response fields, checking for specific keys or values in configuration.

```python
api_response = {
    "id": "prod123",
    "name": "Laptop",
    "price": 1200.00,
    "inStock": True
}

print(api_response.keys())   # dict_keys(['id', 'name', 'price', 'inStock'])
print(api_response.values()) # dict_values(['prod123', 'Laptop', 1200.0, True])
print(api_response.items())  # dict_items([('id', 'prod123'), ...])

# Iterating through items
for key, value in api_response.items():
    print(f"{key}: {value}")
```

### Nested Dictionaries

Dictionaries can contain other dictionaries, useful for representing hierarchical data like complex JSON structures.

**SDET Relevance:** Parsing complex JSON/XML API responses, managing multi-level test configurations.

```python
user_profile = {
    "user_id": "U001",
    "personal_info": {
        "first_name": "Alice",
        "last_name": "Smith",
        "email": "alice@example.com"
    },
    "address": {
        "street": "123 Test St",
        "city": "Testville",
        "zip": "12345"
    }
}

print(user_profile["personal_info"]["email"]) # "alice@example.com"
```

---

## ✅ Sets for Uniqueness

Sets are unordered collections of unique elements. They are highly optimized for membership testing and eliminating duplicates.

### Set Operations

**SDET Relevance:** Comparing two lists of data for common elements, finding missing elements, or identifying unique values.

```python
expected_ids = {"A1", "B2", "C3", "D4"}
actual_ids = {"B2", "C3", "E5", "F6"}

# Union: All unique elements from both sets
print(expected_ids.union(actual_ids)) # {'F6', 'D4', 'C3', 'B2', 'E5', 'A1'}

# Intersection: Common elements in both sets
print(expected_ids.intersection(actual_ids)) # {'C3', 'B2'}

# Difference: Elements in expected_ids but not in actual_ids
print(expected_ids.difference(actual_ids)) # {'D4', 'A1'}

# Symmetric Difference: Elements in either set, but not in both
print(expected_ids.symmetric_difference(actual_ids)) # {'F6', 'D4', 'E5', 'A1'}

# Check for subset/superset
set1 = {1, 2, 3}
set2 = {1, 2, 3, 4, 5}
print(set1.issubset(set2)) # True
print(set2.issuperset(set1)) # True
```

---

## ✅ The `collections` Module

Python's `collections` module provides specialized container datatypes that offer alternatives to Python's general purpose built-in containers (`dict`, `list`, `set`, `tuple`).

### `deque` (Double-ended Queue)

**Definition:** A list-like container with fast appends and pops on either end.

**SDET Relevance:** Implementing a fixed-size log buffer, managing a history of actions in a UI test.

```python
from collections import deque

# Max 3 elements
d = deque(maxlen=3)
d.append(1)
d.append(2)
d.append(3)
print(d) # deque([1, 2, 3])
d.append(4) # 1 is popped from the left
print(d) # deque([2, 3, 4])

d.appendleft(0) # 4 is popped from the right
print(d) # deque([0, 2, 3])
```

### `Counter`

**Definition:** A `dict` subclass for counting hashable objects. It's an unordered collection where elements are stored as dictionary keys and their counts as dictionary values.

**SDET Relevance:** Counting occurrences of specific log messages, API response codes, or elements on a page.

```python
from collections import Counter

log_messages = ["INFO", "ERROR", "INFO", "DEBUG", "ERROR", "INFO"]
counts = Counter(log_messages)
print(counts) # Counter({'INFO': 3, 'ERROR': 2, 'DEBUG': 1})

print(counts["INFO"]) # 3
```

### `defaultdict`

**Definition:** A `dict` subclass that calls a factory function to supply missing values. When you try to access a key that doesn't exist, it automatically creates it with a default value.

**SDET Relevance:** Grouping test results by category, accumulating data without explicit `if key in dict` checks.

```python
from collections import defaultdict

# Default value for missing keys will be an empty list
grouped_errors = defaultdict(list)

errors = [
    {"type": "API", "code": 500},
    {"type": "UI", "code": 404},
    {"type": "API", "code": 401}
]

for error in errors:
    grouped_errors[error["type"]].append(error["code"])

print(grouped_errors) # defaultdict(<class 'list'>, {'API': [500, 401], 'UI': [404]})
print(grouped_errors["DB"]) # [] (automatically creates an empty list)
```

### `namedtuple`

**Definition:** A factory function for creating tuple subclasses with named fields. This makes the code more readable and self-documenting than using plain tuples.

**SDET Relevance:** Representing structured test data records (e.g., user credentials, product details) in a lightweight, immutable way.

```python
from collections import namedtuple

# Define a namedtuple for a TestUser
TestUser = namedtuple("TestUser", ["username", "password", "email"])

# Create instances
user1 = TestUser("testuser1", "pass123", "test1@example.com")
user2 = TestUser(username="testuser2", password="pass456", email="test2@example.com")

# Access fields by name
print(user1.username) # "testuser1"
print(user2.email)    # "test2@example.com"

# Still behaves like a tuple
print(user1[0]) # "testuser1"
```

---

## 🏷 Tags

`python`, `data-structures`, `list`, `dict`, `set`, `collections-module`, `sdet`, `programming`, `advanced-python`