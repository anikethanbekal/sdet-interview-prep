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

- **`if-else`**: Executes a block of code if a specified condition is true.
  ```java
  if (age > 18) {
      System.out.println("Adult");
  } else {
      System.out.println("Minor");
  }
  ```
- **`switch`**: Selects one of many code blocks to be executed.
  ```java
  switch (day) {
      case 1:
          System.out.println("Monday");
          break;
      case 2:
          System.out.println("Tuesday");
          break;
      default:
          System.out.println("Weekend");
  }
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

---

## ✅ Methods

A method is a block of code which only runs when it is called.

```java
// Defining a method
public void myMethod() {
    System.out.println("I just got executed!");
}

// Calling a method
myMethod();
```

---

## 🏷 Tags

`java`, `java-basics`, `sdet`, `programming`, `core-java`
