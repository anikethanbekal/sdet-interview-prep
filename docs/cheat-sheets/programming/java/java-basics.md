---
title: Java Basics Cheat Sheet
tags:
  - java
  - java-basics
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
topic: java-basics
date: 2025-07-03
author: Anikethan Bekal
intro: |
  A foundational cheat sheet covering the absolute basics of the Java programming language, including data types, variables, operators, and control flow. Perfect for beginners or as a quick refresher.
---

# 📘 Java Basics

This cheat sheet provides a quick reference for the fundamental building blocks of the Java language.

---

## 🧠 Data Types

Java has two categories of data types: Primitive and Reference.

### Primitive Data Types

These are the most basic data types.

| Type | Size | Description | Example |
|---|---|---|---|
| `byte` | 1 byte | Stores whole numbers from -128 to 127 | `byte b = 100;` |
| `short` | 2 bytes | Stores whole numbers from -32,768 to 32,767 | `short s = 5000;` |
| `int` | 4 bytes | Stores whole numbers from -2,147,483,648 to 2,147,483,647 | `int i = 100000;` |
| `long` | 8 bytes | Stores whole numbers from -9,223,372,036,854,775,808 to 9,223,372,036,854,775,807 | `long l = 15000000000L;` |
| `float` | 4 bytes | Stores fractional numbers. Sufficient for storing 6 to 7 decimal digits | `float f = 5.75f;` |
| `double` | 8 bytes | Stores fractional numbers. Sufficient for storing 15 decimal digits | `double d = 19.99d;` |
| `boolean` | 1 bit | Stores `true` or `false` values | `boolean isJavaFun = true;` |
| `char` | 2 bytes | Stores a single character/letter or ASCII values | `char grade = 'A';` |

### Reference Data Types

These refer to objects. The most common is `String`.

- **String**: Represents a sequence of characters. `String myString = "Hello World";`
- **Arrays**: Used to store multiple values in a single variable. `int[] numbers = {1, 2, 3};`
- **Classes**: User-defined blueprints for objects. `MyClass myObj = new MyClass();`

---

## ✅ Variables

A variable is a container which holds the value while the Java program is executed.

```java
// Declaring and initializing a variable
String name = "John";
int age = 30;
```

---

## ✅ Operators

| Type | Operators | Description |
|---|---|---|
| **Arithmetic** | `+`, `-`, `*`, `/`, `%` (modulus) | Used to perform common mathematical operations. |
| **Relational** | `==`, `!=`, `>`, `<`, `>=`, `<=` | Used to compare two values. |
| **Logical** | `&&` (AND), `||` (OR), `!` (NOT) | Used to determine the logic between variables or values. |
| **Assignment** | `=`, `+=`, `-=`, `*=`, `/=` | Used to assign values to variables. |

---

## ✅ Control Flow

### Conditional Statements

- **`if-else-if`**: Executes different blocks of code based on multiple conditions.
  ```java
  int time = 22;
  if (time < 10) {
      System.out.println("Good morning.");
  } else if (time < 18) {
      System.out.println("Good day.");
  } else {
      System.out.println("Good evening.");
  }
  // Outputs "Good evening."
  ```
- **Short Hand If (Ternary Operator)**: A shorthand for the `if-else` statement.
  ```java
  int score = 75;
  String result = (score >= 60) ? "Pass" : "Fail";
  System.out.println(result); // Outputs "Pass"
  ```
- **`switch`**: Selects one of many code blocks to be executed.
  ```java
  int day = 4;
  switch (day) {
      case 1:
          System.out.println("Monday");
          break;
      case 2:
          System.out.println("Tuesday");
          break;
      case 3:
          System.out.println("Wednesday");
          break;
      case 4:
          System.out.println("Thursday");
          break;
      case 5:
          System.out.println("Friday");
          break;
      case 6:
          System.out.println("Saturday");
          break;
      case 7:
          System.out.println("Sunday");
          break;
      default:
          System.out.println("Invalid day");
  }
  // Outputs "Thursday"
  ```

### Loop Statements

- **`for` loop**: Executes a block of code a specified number of times.
  ```java
  for (int i = 0; i < 5; i++) {
      System.out.println(i);
  }
  ```
- **`while` loop**: Loops through a block of code as long as a specified condition is true.
  ```java
  int i = 0;
  while (i < 5) {
      System.out.println(i);
      i++;
  }
  ```
- **Enhanced `for` loop**: Used to iterate through elements in an array or collection.
  ```java
  String[] cars = {"Volvo", "BMW", "Ford"};
  for (String car : cars) {
      System.out.println(car);
  }
  ```

### `break` and `continue`

- **`break`**: Used to jump out of a loop or a `switch` statement.
  ```java
  for (int i = 0; i < 10; i++) {
      if (i == 4) {
          break; // Loop will terminate when i is 4
      }
      System.out.println(i);
  }
  // Outputs: 0, 1, 2, 3
  ```
- **`continue`**: Used to skip one iteration in a loop.
  ```java
  for (int i = 0; i < 10; i++) {
      if (i == 4) {
          continue; // Skips the rest of the code for this iteration when i is 4
      }
      System.out.println(i);
  }
  // Outputs: 0, 1, 2, 3, 5, 6, 7, 8, 9
  ```

---

## ✅ Methods

A method is a block of code which only runs when it is called. Methods are used to perform certain actions, and they are also known as functions.

### Defining a Method

```java
public class MyClass {
    // Method with no parameters and no return value
    public void sayHello() {
        System.out.println("Hello!");
    }

    // Method with parameters and a return value
    public int addNumbers(int a, int b) {
        return a + b;
    }

    // Static method (belongs to the class, not an object)
    public static void staticMethodExample() {
        System.out.println("This is a static method.");
    }
}
```

### Calling a Method

```java
public class Main {
    public static void main(String[] args) {
        MyClass obj = new MyClass(); // Create an object of MyClass
        obj.sayHello(); // Call sayHello method

        int sum = obj.addNumbers(5, 3); // Call addNumbers method and store result
        System.out.println("Sum: " + sum); // Outputs: Sum: 8

        MyClass.staticMethodExample(); // Call static method directly using class name
    }
}
```

### Method Parameters

Information can be passed to methods as parameters. Parameters act as variables inside the method.

```java
public void displayMessage(String message) {
    System.out.println("Message: " + message);
}

// Calling:
// obj.displayMessage("Welcome to Java!");
```

### Return Values

The `void` keyword indicates that the method should not return a value. If you want the method to return a value, you can use a primitive data type (like `int`, `char`, etc.) or a reference data type (like `String`, `Array`, etc.) instead of `void`, and use the `return` keyword inside the method.

```java
public int multiply(int x, int y) {
    return x * y;
}

// Calling:
// int product = obj.multiply(4, 5);
// System.out.println(product); // Outputs: 20
```

---

## 🏷 Tags

`java`, `java-basics`, `sdet`, `programming`, `core-java`