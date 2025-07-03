---
title: Java Arrays Cheat Sheet
tags:
  - java
  - arrays
  - sdet
  - programming
  - core-java
categories:
  - Programming
  - Language-Specific
  - Java
difficulty:
  - easy
background: bg-[#dbeafe]  # Light blue for language-specific
badge_color: text-blue-800 bg-blue-100
topic: java-arrays
date: 2025-07-03
author: Anikethan Bekal
intro: |
  A cheat sheet covering the basics of Java arrays, including declaration, initialization, access, and common operations. Essential for handling collections of fixed-size data in test automation.
---

# 📘 Java Arrays

An array is a collection of similar types of elements that have a contiguous memory location. In Java, arrays are objects.

---

## 🧠 Core Concepts

- **Fixed Size**: Once an array is created, its size cannot be changed.
- **Homogeneous**: An array can only store elements of the same data type.
- **Indexed**: Elements are accessed using a zero-based index.
- **Default Values**: If an array is declared but not initialized, its elements will be assigned default values (e.g., `0` for `int`, `false` for `boolean`, `null` for objects).

---

## ✅ Declaration and Initialization

### 1. Declaring an Array

```java
// Method 1: Declare type then array name
dataType[] arrayName;

// Method 2: Declare array name then type (less common but valid)
dataType arrayName[];

// Examples:
int[] numbers;
String[] names;
```

### 2. Creating (Instantiating) an Array

Arrays are objects, so they must be created using the `new` keyword.

```java
// Syntax:
arrayName = new dataType[size];

// Examples:
numbers = new int[5]; // An array of 5 integers
names = new String[3]; // An array of 3 Strings
```

### 3. Initializing an Array

#### a) Using `new` and assigning values individually

```java
int[] numbers = new int[3];
numbers[0] = 10;
numbers[1] = 20;
numbers[2] = 30;
```

#### b) Using array literal (declaration, creation, and initialization in one step)

```java
int[] numbers = {10, 20, 30, 40, 50};
String[] browsers = {"chrome", "firefox", "edge"};
```

---

## ✅ Accessing Array Elements

Array elements are accessed using their index (0-based).

```java
String[] fruits = {"Apple", "Banana", "Cherry"};
System.out.println(fruits[0]); // Outputs: Apple
System.out.println(fruits[1]); // Outputs: Banana

// Modifying an element
fruits[1] = "Orange";
System.out.println(fruits[1]); // Outputs: Orange
```

---

## ✅ Array Length

The `length` property returns the number of elements in an array.

```java
int[] numbers = {1, 2, 3, 4, 5};
System.out.println(numbers.length); // Outputs: 5
```

---

## ✅ Iterating Through Arrays

### 1. Using a `for` loop

```java
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
for (int i = 0; i < cars.length; i++) {
    System.out.println(cars[i]);
}
```

### 2. Using an Enhanced `for` loop (for-each loop)

```java
String[] cars = {"Volvo", "BMW", "Ford", "Mazda"};
for (String car : cars) {
    System.out.println(car);
}
```

---

## ✅ Multidimensional Arrays

Arrays of arrays. Useful for representing tables or matrices.

```java
// Declare and initialize a 2D array (matrix)
int[][] matrix = { {1, 2, 3}, {4, 5, 6}, {7, 8, 9} };

// Access elements
System.out.println(matrix[0][0]); // Outputs: 1
System.out.println(matrix[1][2]); // Outputs: 6

// Iterate through a 2D array
for (int i = 0; i < matrix.length; i++) {
    for (int j = 0; j < matrix[i].length; j++) {
        System.out.print(matrix[i][j] + " ");
    }
    System.out.println(); // New line for each row
}
```

---

## ✅ `java.util.Arrays` Class

Provides static methods for common array operations.

| Method | Description | Example |
|---|---|---|
| `toString(array)` | Returns a string representation of the contents of the specified array. | `int[] arr = {1, 2, 3}; Arrays.toString(arr); // "[1, 2, 3]"` |
| `sort(array)` | Sorts the specified array into ascending numerical order. | `int[] arr = {5, 2, 8}; Arrays.sort(arr); // arr is now {2, 5, 8}` |
| `copyOf(original, newLength)` | Copies the specified array, truncating or padding with zeros (or nulls) if necessary. | `int[] arr = {1, 2}; int[] newArr = Arrays.copyOf(arr, 4); // {1, 2, 0, 0}` |
| `equals(array1, array2)` | Returns `true` if the two specified arrays are deeply equal to one another. | `Arrays.equals(arr1, arr2);` |

---

## 💡 Tips for SDETs

- Use arrays to store a fixed number of test data elements (e.g., a list of URLs to test, a set of credentials).
- Multidimensional arrays can represent tabular test data, such as data read from an Excel sheet.
- The `Arrays.toString()` method is invaluable for debugging, allowing you to quickly print the contents of an array.
- When working with Selenium, `driver.findElements(By.locator)` returns a `List<WebElement>`, which is more flexible than a raw array, but understanding arrays is still fundamental.

---

## 🏷 Tags

`java`, `arrays`, `sdet`, `programming`, `core-java`
