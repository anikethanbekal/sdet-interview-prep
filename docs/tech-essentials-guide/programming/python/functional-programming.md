# Functional Programming in Python

Discover functional programming concepts in Python and how they can lead to more concise, readable, and testable code, especially for data transformations.

## Topics:

- **Lambda Functions:** Anonymous functions for quick operations.
- **`map()`, `filter()`, `reduce()`:** Applying functions to iterables.
- **List, Dict, Set Comprehensions:** Concise data structure creation.
- **Generators:** Memory-efficient iteration for large datasets.
- **Decorators:** Enhancing functions without modifying their code.

---

## 💡 SDET Perspective on Functional Programming

Functional programming (FP) paradigms in Python can significantly enhance the readability, maintainability, and testability of your automation scripts. By focusing on immutable data and pure functions, you can reduce side effects, making your code easier to reason about and debug. This is particularly useful for data processing, transformations, and creating flexible utility functions.

---

## ✅ Lambda Functions (Anonymous Functions)

**Definition:** A small anonymous function. A lambda function can take any number of arguments, but can only have one expression.

**Syntax:** `lambda arguments : expression`

**SDET Relevance:** Quick, inline functions for sorting, filtering, or simple transformations, especially when used with `map()`, `filter()`, or `sorted()`.

```python
# Example 1: Simple lambda
add_two = lambda x: x + 2
print(add_two(5)) # 7

# Example 2: Sorting a list of dictionaries by a specific key
users = [
    {'name': 'Alice', 'age': 30},
    {'name': 'Bob', 'age': 25},
    {'name': 'Charlie', 'age': 35}
]

# Sort by age
sorted_users = sorted(users, key=lambda user: user['age'])
print(sorted_users)
# Output: [{'name': 'Bob', 'age': 25}, {'name': 'Alice', 'age': 30}, {'name': 'Charlie', 'age': 35}]

# Example 3: Filtering elements in Selenium
# from selenium.webdriver.remote.webelement import WebElement
# all_elements: list[WebElement] = driver.find_elements(By.CSS_SELECTOR, ".item")
# visible_elements = list(filter(lambda elem: elem.is_displayed(), all_elements))
```

---

## ✅ `map()`, `filter()`, `reduce()`

These are higher-order functions that operate on iterables.

### `map(function, iterable)`

**Definition:** Applies a given `function` to each item of an `iterable` and returns a `map` object (an iterator).

**SDET Relevance:** Transforming data from API responses, converting a list of web elements to their text values.

```python
# Example: Convert a list of numbers to strings
numbers = [1, 2, 3, 4]
strings = list(map(str, numbers))
print(strings) # ['1', '2', '3', '4']

# Example: Extracting text from a list of Selenium WebElements
# from selenium.webdriver.remote.webelement import WebElement
# web_elements: list[WebElement] = driver.find_elements(By.CSS_SELECTOR, ".product-name")
# product_names = list(map(lambda elem: elem.text, web_elements))
# print(product_names)
```

### `filter(function, iterable)`

**Definition:** Constructs an iterator from elements of an `iterable` for which a `function` returns true.

**SDET Relevance:** Filtering log messages, test data, or web elements based on certain criteria.

```python
# Example: Filter even numbers
numbers = [1, 2, 3, 4, 5, 6]
even_numbers = list(filter(lambda x: x % 2 == 0, numbers))
print(even_numbers) # [2, 4, 6]

# Example: Filter log entries containing "ERROR"
log_entries = ["INFO: User logged in", "ERROR: DB connection failed", "DEBUG: Data processed"]
error_logs = list(filter(lambda log: "ERROR" in log, log_entries))
print(error_logs) # ['ERROR: DB connection failed']
```

### `reduce(function, iterable[, initializer])`

**Definition:** Applies a `function` of two arguments cumulatively to the items of an `iterable`, from left to right, so as to reduce the iterable to a single value. (Requires `functools` module).

**SDET Relevance:** Aggregating data, calculating sums or products from a list of values.

```python
from functools import reduce

# Example: Sum all numbers in a list
numbers = [1, 2, 3, 4, 5]
sum_of_numbers = reduce(lambda x, y: x + y, numbers)
print(sum_of_numbers) # 15

# Example: Concatenate strings
words = ["Hello", " ", "World", "!"]
sentence = reduce(lambda x, y: x + y, words)
print(sentence) # "Hello World!"
```

---

## ✅ List, Dict, Set Comprehensions

These provide a concise way to create lists, dictionaries, and sets. They are often more readable and efficient than traditional `for` loops.

**SDET Relevance:** Efficiently transforming and filtering data, generating test data, parsing complex data structures.

```python
# List Comprehension: Extracting specific data from a list of dictionaries
api_users = [
    {'id': 1, 'name': 'Alice', 'status': 'active'},
    {'id': 2, 'name': 'Bob', 'status': 'inactive'},
    {'id': 3, 'name': 'Charlie', 'status': 'active'}
]

active_user_names = [user['name'] for user in api_users if user['status'] == 'active']
print(active_user_names) # ['Alice', 'Charlie']

# Dictionary Comprehension: Creating a mapping from a list
product_list = [("Laptop", 1200), ("Mouse", 25), ("Keyboard", 75)]
product_prices = {name: price for name, price in product_list}
print(product_prices) # {'Laptop': 1200, 'Mouse': 25, 'Keyboard': 75}

# Set Comprehension: Getting unique error codes from a list of log strings
logs = ["ERROR 101", "INFO 200", "ERROR 101", "WARN 300", "ERROR 102"]
unique_errors = {log.split()[1] for log in logs if log.startswith("ERROR")}
print(unique_errors) # {'101', '102'}
```

---

## ✅ Generators

**Definition:** Functions that return an iterator that produces a sequence of results instead of a single value. They use the `yield` keyword. Generators are memory-efficient because they produce items one at a time, only when requested.

**SDET Relevance:** Processing large log files, generating large test data sets on the fly, or iterating through a large number of web elements without loading all of them into memory at once.

```python
def generate_test_users(num_users):
    for i in range(1, num_users + 1):
        yield {
            "username": f"user_{i}",
            "email": f"user_{i}@example.com",
            "password": "password123"
        }

# Usage:
# This will not generate all 100000 users at once, saving memory
for user_data in generate_test_users(100000):
    # print(user_data) # Process each user data as it's generated
    if user_data["username"] == "user_5":
        print(f"Found user_5: {user_data}")
        break
```

---

## ✅ Decorators

**Definition:** A decorator is a design pattern in Python that allows a user to add new functionality to an existing object without modifying its structure. Decorators are essentially functions that take another function as an argument, add some functionality, and return another function.

**SDET Relevance:** Adding cross-cutting concerns like logging, timing, error handling, retries, or authentication checks to test methods or utility functions without modifying their core logic.

```python
import time

# Example 1: Timing decorator
def timing_decorator(func):
    def wrapper(*args, **kwargs):
        start_time = time.time()
        result = func(*args, **kwargs)
        end_time = time.time()
        print(f"Function '{func.__name__}' took {end_time - start_time:.4f} seconds to execute.")
        return result
    return wrapper

@timing_decorator
def perform_login_test():
    print("Performing login test...")
    time.sleep(2) # Simulate network delay
    print("Login test completed.")

# perform_login_test()

# Example 2: Retry decorator for flaky tests
def retry(max_attempts=3, delay=1):
    def decorator(func):
        def wrapper(*args, **kwargs):
            for attempt in range(1, max_attempts + 1):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    print(f"Attempt {attempt} failed: {e}")
                    if attempt < max_attempts:
                        time.sleep(delay)
            raise Exception(f"Function failed after {max_attempts} attempts.")
        return wrapper
    return decorator

@retry(max_attempts=2, delay=0.5)
def flaky_element_click():
    import random
    if random.random() < 0.7: # 70% chance of failure
        raise Exception("Element not clickable!")
    print("Element clicked successfully!")

# flaky_element_click()
```

---

## 🏷 Tags

`python`, `functional-programming`, `lambda`, `map`, `filter`, `reduce`, `comprehensions`, `generators`, `decorators`, `sdet`, `programming`, `advanced-python`