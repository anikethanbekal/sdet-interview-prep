# Java Programming Concepts: Object-Oriented Programming (OOP)

> **📚 Learning Resources:**
> - [Oracle Java Documentation](https://docs.oracle.com/javase/tutorial/)
> - [Java OOP Tutorial](https://www.w3schools.com/java/java_oop.asp)
> - [Practice OOP Concepts](https://www.geeksforgeeks.org/object-oriented-programming-oops-concept-in-java/)

---

## ⚙️ 5. Object-Oriented Programming (OOP)

Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects", which can contain data and code that manipulates the data. Java is a pure object-oriented language where everything is an object.

### 🎯 OOP Principles Overview

The four fundamental principles of OOP are:

| Principle | Definition | Key Benefits |
|-----------|------------|--------------|
| **Encapsulation** | Bundling data and methods that operate on the data into a single unit, restricting direct access | Data hiding, security, maintainability |
| **Inheritance** | Mechanism where one class acquires properties and behaviors of another class | Code reusability, hierarchical organization |
| **Polymorphism** | Ability of an object to take on many forms; methods do different things based on object type | Flexibility, extensibility |
| **Abstraction** | Hiding complex implementation details and showing only essential features | Simplicity, reduced complexity |

### 🏗️ Defining Classes and Objects

#### Class Definition
A **class** is a blueprint or template from which objects are created. It defines common properties (attributes) and behaviors (methods).

**Syntax:**
```java
[access_modifier] class ClassName {
    // Instance variables (attributes)
    [access_modifier] dataType variableName;
    
    // Constructors
    [access_modifier] ClassName() { }
    
    // Methods (behaviors)
    [access_modifier] returnType methodName() { }
}
```

**Example:**
```java
public class Car {
    // Instance variables (attributes/state)
    private String make;
    private String model;
    private int year;
    private double speed;
    private boolean isRunning;
    
    // Static variable (class variable)
    public static final int MAX_SPEED = 200;
    
    // Constructor
    public Car(String make, String model, int year) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.speed = 0;
        this.isRunning = false;
    }
    
    // Instance methods (behaviors)
    public void start() {
        if (!isRunning) {
            isRunning = true;
            System.out.println(make + " " + model + " is starting...");
        } else {
            System.out.println("Car is already running!");
        }
    }
    
    public void accelerate(double amount) {
        if (isRunning && speed + amount <= MAX_SPEED) {
            speed += amount;
            System.out.println(make + " " + model + " is accelerating. Speed: " + speed);
        } else {
            System.out.println("Cannot accelerate. Check if car is running or speed limit.");
        }
    }
    
    public void brake(double amount) {
        if (speed - amount >= 0) {
            speed -= amount;
            System.out.println(make + " " + model + " is braking. Speed: " + speed);
        } else {
            speed = 0;
            System.out.println("Car has stopped.");
        }
    }
    
    public void stop() {
        isRunning = false;
        speed = 0;
        System.out.println(make + " " + model + " has stopped.");
    }
    
    // Getter methods
    public String getMake() { return make; }
    public String getModel() { return model; }
    public int getYear() { return year; }
    public double getSpeed() { return speed; }
    public boolean isRunning() { return isRunning; }
    
    // Static method
    public static void displayMaxSpeed() {
        System.out.println("Maximum speed for all cars: " + MAX_SPEED);
    }
    
    // Override toString method
    @Override
    public String toString() {
        return "Car{" +
                "make='" + make + '\'' +
                ", model='" + model + '\'' +
                ", year=" + year +
                ", speed=" + speed +
                ", isRunning=" + isRunning +
                '}';
    }
}
```

#### Object Creation and Usage
An **object** is an instance of a class. It's a real-world entity with state and behavior.

**Syntax:**
```java
ClassName objectName = new ClassName(parameters);
```

**Example:**
```java
public class Main {
    public static void main(String[] args) {
        // Creating objects (instantiating the Car class)
        Car myCar = new Car("Toyota", "Camry", 2023);
        Car anotherCar = new Car("Honda", "Civic", 2022);
        
        // Using object methods
        myCar.start();
        myCar.accelerate(50);
        myCar.brake(20);
        
        anotherCar.start();
        anotherCar.accelerate(30);
        
        // Accessing object state
        System.out.println("My car speed: " + myCar.getSpeed());
        System.out.println("Another car: " + anotherCar.toString());
        
        // Using static method
        Car.displayMaxSpeed();
        
        // Object comparison
        System.out.println("Are cars equal? " + myCar.equals(anotherCar));
    }
}
```

### 📊 Attributes and Behavior

#### Attributes (State)
- **Instance Variables**: Belong to each object instance
- **Static Variables**: Belong to the class, shared by all instances
- **Final Variables**: Cannot be changed after initialization

**Example:**
```java
public class Student {
    // Instance variables (each object has its own copy)
    private String name;
    private int age;
    private String studentId;
    
    // Static variable (shared by all Student objects)
    public static int totalStudents = 0;
    
    // Final variable (constant)
    public static final String SCHOOL_NAME = "Java Academy";
    
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
        this.studentId = generateStudentId();
        totalStudents++; // Increment static counter
    }
    
    private String generateStudentId() {
        return "STU" + System.currentTimeMillis();
    }
}
```

#### Behavior (Methods)
- **Instance Methods**: Operate on instance variables
- **Static Methods**: Operate on static variables or utility functions
- **Getter/Setter Methods**: Access and modify private variables

**Example:**
```java
public class Calculator {
    private double result;
    private static int operationCount = 0;
    
    // Instance method
    public void add(double number) {
        result += number;
        operationCount++;
        System.out.println("Added " + number + ". Result: " + result);
    }
    
    public void subtract(double number) {
        result -= number;
        operationCount++;
        System.out.println("Subtracted " + number + ". Result: " + result);
    }
    
    // Getter method
    public double getResult() {
        return result;
    }
    
    // Static method
    public static int getOperationCount() {
        return operationCount;
    }
    
    // Static utility method
    public static double calculateAverage(double[] numbers) {
        if (numbers.length == 0) return 0;
        
        double sum = 0;
        for (double num : numbers) {
            sum += num;
        }
        return sum / numbers.length;
    }
}
```

### 🔧 Constructor (Default, Parameterized, Constructor Overloading)

A **constructor** is a special method used to initialize objects. It has the same name as the class and no return type.

#### Default Constructor
If no constructor is defined, Java provides a public, no-argument constructor.

```java
public class Dog {
    private String name;
    private int age;
    
    // Java automatically provides: public Dog() { }
    // Instance variables get default values: null, 0, false
}
```

#### Parameterized Constructor
A constructor with parameters to initialize instance variables.

```java
public class Dog {
    private String name;
    private int age;
    private String breed;
    
    // Parameterized constructor
    public Dog(String name, int age, String breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    
    // Usage: Dog myDog = new Dog("Buddy", 5, "Golden Retriever");
}
```

#### Constructor Overloading
Multiple constructors with different parameter lists.

```java
public class Dog {
    private String name;
    private int age;
    private String breed;
    
    // Constructor 1: Default-like
    public Dog() {
        this("Unknown", 0, "Mixed");
    }
    
    // Constructor 2: Name and age only
    public Dog(String name, int age) {
        this(name, age, "Mixed");
    }
    
    // Constructor 3: All parameters
    public Dog(String name, int age, String breed) {
        this.name = name;
        this.age = age;
        this.breed = breed;
    }
    
    // Constructor 4: Copy constructor
    public Dog(Dog otherDog) {
        this.name = otherDog.name;
        this.age = otherDog.age;
        this.breed = otherDog.breed;
    }
}

// Usage examples:
// Dog dog1 = new Dog();                    // Uses Constructor 1
// Dog dog2 = new Dog("Lucy", 3);          // Uses Constructor 2
// Dog dog3 = new Dog("Max", 7, "Golden"); // Uses Constructor 3
// Dog dog4 = new Dog(dog3);               // Uses Constructor 4
```

### 🔑 Key OOP Concepts

#### 1. Encapsulation
**Definition**: Wrapping data and methods together as a single unit, hiding internal state and requiring all interaction through methods.

**Benefits:**
- Data hiding and security
- Control over data access
- Flexibility to change implementation
- Maintainability and modularity

**Example:**
```java
public class BankAccount {
    private String accountNumber;
    private double balance;
    private String accountHolder;
    private static int accountCounter = 0;
    
    public BankAccount(String accountHolder, double initialBalance) {
        this.accountHolder = accountHolder;
        this.accountNumber = generateAccountNumber();
        if (initialBalance >= 0) {
            this.balance = initialBalance;
        } else {
            this.balance = 0;
            System.out.println("Initial balance cannot be negative. Set to 0.");
        }
        accountCounter++;
    }
    
    private String generateAccountNumber() {
        return "ACC" + System.currentTimeMillis();
    }
    
    // Getter methods (read-only access)
    public String getAccountNumber() {
        return accountNumber;
    }
    
    public double getBalance() {
        return balance;
    }
    
    public String getAccountHolder() {
        return accountHolder;
    }
    
    // Controlled modification methods
    public void deposit(double amount) {
        if (amount > 0) {
            this.balance += amount;
            System.out.println("Deposited: " + amount + ". New balance: " + balance);
        } else {
            System.out.println("Deposit amount must be positive.");
        }
    }
    
    public boolean withdraw(double amount) {
        if (amount > 0 && balance >= amount) {
            this.balance -= amount;
            System.out.println("Withdrew: " + amount + ". New balance: " + balance);
            return true;
        } else {
            System.out.println("Invalid withdrawal amount or insufficient balance.");
            return false;
        }
    }
    
    public void transfer(BankAccount recipient, double amount) {
        if (this.withdraw(amount)) {
            recipient.deposit(amount);
            System.out.println("Transferred " + amount + " to " + recipient.getAccountHolder());
        }
    }
    
    // Static method
    public static int getTotalAccounts() {
        return accountCounter;
    }
    
    @Override
    public String toString() {
        return "BankAccount{" +
                "accountNumber='" + accountNumber + '\'' +
                ", balance=" + balance +
                ", accountHolder='" + accountHolder + '\'' +
                '}';
    }
}
```

#### 2. Inheritance
**Definition**: Mechanism where one class acquires properties and behaviors of another class.

**Keywords**: `extends` (for classes), `implements` (for interfaces)

**Benefits:**
- Code reusability
- Method overriding
- Hierarchical classification

**Example:**
```java
// Superclass (Parent class)
public class Animal {
    protected String name;
    protected int age;
    protected String species;
    
    public Animal(String name, int age, String species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
    
    public void eat() {
        System.out.println(name + " is eating.");
    }
    
    public void sleep() {
        System.out.println(name + " is sleeping.");
    }
    
    public void makeSound() {
        System.out.println(name + " makes a sound.");
    }
    
    public void displayInfo() {
        System.out.println("Name: " + name + ", Age: " + age + ", Species: " + species);
    }
}

// Subclass (Child class)
public class Dog extends Animal {
    private String breed;
    private boolean isVaccinated;
    
    public Dog(String name, int age, String breed) {
        super(name, age, "Dog"); // Call superclass constructor
        this.breed = breed;
        this.isVaccinated = false;
    }
    
    // Method overriding
    @Override
    public void makeSound() {
        System.out.println(name + " barks: Woof! Woof!");
    }
    
    // Additional methods specific to Dog
    public void fetch() {
        System.out.println(name + " is fetching the ball.");
    }
    
    public void wagTail() {
        System.out.println(name + " is wagging its tail.");
    }
    
    public void vaccinate() {
        if (!isVaccinated) {
            isVaccinated = true;
            System.out.println(name + " has been vaccinated.");
        } else {
            System.out.println(name + " is already vaccinated.");
        }
    }
    
    // Override displayInfo to include breed
    @Override
    public void displayInfo() {
        super.displayInfo(); // Call superclass method
        System.out.println("Breed: " + breed + ", Vaccinated: " + isVaccinated);
    }
}

// Another subclass
public class Cat extends Animal {
    private boolean isIndoor;
    
    public Cat(String name, int age, boolean isIndoor) {
        super(name, age, "Cat");
        this.isIndoor = isIndoor;
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " meows: Meow! Meow!");
    }
    
    public void purr() {
        System.out.println(name + " is purring.");
    }
    
    public void climb() {
        System.out.println(name + " is climbing.");
    }
}

// Usage
public class InheritanceDemo {
    public static void main(String[] args) {
        Animal genericAnimal = new Animal("Generic", 5, "Unknown");
        Dog myDog = new Dog("Buddy", 3, "Golden Retriever");
        Cat myCat = new Cat("Whiskers", 2, true);
        
        // Polymorphic behavior
        Animal[] animals = {genericAnimal, myDog, myCat};
        
        for (Animal animal : animals) {
            animal.makeSound(); // Different behavior for each type
        }
        
        // Specific dog behaviors
        myDog.fetch();
        myDog.vaccinate();
        
        // Specific cat behaviors
        myCat.purr();
        myCat.climb();
    }
}
```

#### 3. Polymorphism (Compile-time & Run-time)

**Definition**: The ability of an object to take on many forms.

##### Compile-time Polymorphism (Method Overloading)
Multiple methods with the same name but different parameters.

```java
public class Calculator {
    // Method overloading examples
    
    public int add(int a, int b) {
        return a + b;
    }
    
    public int add(int a, int b, int c) {
        return a + b + c;
    }
    
    public double add(double a, double b) {
        return a + b;
    }
    
    public String add(String a, String b) {
        return a + b; // String concatenation
    }
    
    public int add(int[] numbers) {
        int sum = 0;
        for (int num : numbers) {
            sum += num;
        }
        return sum;
    }
}

// Usage
Calculator calc = new Calculator();
System.out.println(calc.add(5, 10));           // 15
System.out.println(calc.add(5, 10, 15));       // 30
System.out.println(calc.add(5.5, 10.5));       // 16.0
System.out.println(calc.add("Hello", "World")); // HelloWorld
System.out.println(calc.add(new int[]{1,2,3,4,5})); // 15
```

##### Run-time Polymorphism (Method Overriding)
Subclass provides specific implementation for superclass method.

```java
public class Shape {
    protected double area;
    
    public void calculateArea() {
        System.out.println("Calculating area of generic shape.");
    }
    
    public void displayInfo() {
        System.out.println("This is a shape with area: " + area);
    }
}

public class Circle extends Shape {
    private double radius;
    
    public Circle(double radius) {
        this.radius = radius;
    }
    
    @Override
    public void calculateArea() {
        this.area = Math.PI * radius * radius;
        System.out.println("Calculating area of circle: " + area);
    }
    
    @Override
    public void displayInfo() {
        System.out.println("This is a circle with radius: " + radius + " and area: " + area);
    }
}

public class Rectangle extends Shape {
    private double length;
    private double width;
    
    public Rectangle(double length, double width) {
        this.length = length;
        this.width = width;
    }
    
    @Override
    public void calculateArea() {
        this.area = length * width;
        System.out.println("Calculating area of rectangle: " + area);
    }
    
    @Override
    public void displayInfo() {
        System.out.println("This is a rectangle with length: " + length + 
                         ", width: " + width + " and area: " + area);
    }
}

// Polymorphism demonstration
public class PolymorphismDemo {
    public static void main(String[] args) {
        Shape shape1 = new Shape();
        Shape shape2 = new Circle(5);
        Shape shape3 = new Rectangle(4, 6);
        
        // Run-time polymorphism
        shape1.calculateArea(); // Shape's method
        shape2.calculateArea(); // Circle's method
        shape3.calculateArea(); // Rectangle's method
        
        // Array of shapes demonstrating polymorphism
        Shape[] shapes = {shape1, shape2, shape3};
        
        for (Shape shape : shapes) {
            shape.calculateArea(); // Different behavior based on actual object type
        }
    }
}
```

#### 4. Abstraction
**Definition**: Hiding complex implementation details and showing only essential features.

**Achieved through**: Abstract classes and interfaces (detailed in section 6)

```java
// Abstract class example
public abstract class Vehicle {
    protected String brand;
    protected String model;
    protected int year;
    
    public Vehicle(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
    }
    
    // Abstract method (must be implemented by subclasses)
    public abstract void start();
    
    // Concrete method (has implementation)
    public void displayInfo() {
        System.out.println("Brand: " + brand + ", Model: " + model + ", Year: " + year);
    }
}

public class Car extends Vehicle {
    public Car(String brand, String model, int year) {
        super(brand, model, year);
    }
    
    @Override
    public void start() {
        System.out.println("Car starts with a key ignition.");
    }
}

public class Motorcycle extends Vehicle {
    public Motorcycle(String brand, String model, int year) {
        super(brand, model, year);
    }
    
    @Override
    public void start() {
        System.out.println("Motorcycle starts with a kick start.");
    }
}
```

### 🔑 Keywords: `this`, `super`, `final`, `static`, `instanceof`

#### `this` Keyword
Refers to the current instance of the class.

```java
public class Person {
    private String name;
    private int age;
    
    public Person(String name, int age) {
        this.name = name; // Refers to instance variable
        this.age = age;   // Refers to instance variable
    }
    
    public Person() {
        this("Unknown", 0); // Calls parameterized constructor
    }
    
    public void setAge(int age) {
        this.age = age; // Distinguishes instance variable from parameter
    }
    
    public void displayInfo() {
        System.out.println("Name: " + this.name + ", Age: " + this.age);
    }
}
```

#### `super` Keyword
Refers to the immediate parent (superclass) instance.

```java
public class Parent {
    protected String name;
    protected int value = 10;
    
    public Parent(String name) {
        this.name = name;
        System.out.println("Parent constructor called");
    }
    
    public void display() {
        System.out.println("Parent display method");
    }
}

public class Child extends Parent {
    private int value = 20;
    
    public Child(String name) {
        super(name); // Calls Parent constructor
        System.out.println("Child constructor called");
    }
    
    public void showValues() {
        System.out.println("Child value: " + this.value);      // 20
        System.out.println("Parent value: " + super.value);    // 10
        super.display(); // Calls Parent's display method
    }
    
    @Override
    public void display() {
        System.out.println("Child display method");
        super.display(); // Calls Parent's display method
    }
}
```

#### `final` Keyword
- **`final` variable**: Constant, cannot be changed
- **`final` method**: Cannot be overridden
- **`final` class**: Cannot be inherited

```java
public class FinalExample {
    // Final variable (constant)
    public static final double PI = 3.14159;
    public final String constantValue = "This cannot be changed";
    
    public void demonstrateFinal() {
        // PI = 3.14; // Compile-time error
        // constantValue = "New value"; // Compile-time error
    }
}

public class BaseClass {
    public final void finalMethod() {
        System.out.println("This method cannot be overridden");
    }
}

// This would cause compile-time error:
// public class DerivedClass extends BaseClass {
//     public void finalMethod() { } // Cannot override final method
// }

final class ImmutableClass {
    private final String data;
    
    public ImmutableClass(String data) {
        this.data = data;
    }
    
    public String getData() {
        return data;
    }
}

// This would cause compile-time error:
// class AnotherClass extends ImmutableClass { } // Cannot extend final class
```

#### `static` Keyword
- **`static` variable**: Belongs to class, shared by all instances
- **`static` method**: Belongs to class, can be called without object
- **`static` block**: Executed once when class is loaded

```java
public class StaticExample {
    // Static variable (class variable)
    public static int counter = 0;
    public static final String APP_NAME = "Static Demo";
    
    // Instance variable
    private String name;
    
    public StaticExample(String name) {
        this.name = name;
        counter++; // Increment static counter
    }
    
    // Static method (class method)
    public static void displayCounter() {
        System.out.println("Total objects created: " + counter);
        // System.out.println(this.name); // ERROR: static method cannot use 'this'
    }
    
    // Static utility method
    public static int calculateSum(int a, int b) {
        return a + b;
    }
    
    // Static block (executed once when class is loaded)
    static {
        System.out.println("Static block executed - Class loaded");
        System.out.println("Application: " + APP_NAME);
    }
    
    // Instance method
    public void displayInfo() {
        System.out.println("Name: " + name + ", Counter: " + counter);
    }
}

// Usage
StaticExample obj1 = new StaticExample("Object 1");
StaticExample obj2 = new StaticExample("Object 2");
StaticExample.displayCounter(); // Call static method
System.out.println(StaticExample.calculateSum(5, 10)); // Static utility method
```

#### `instanceof` Operator
Tests if an object is an instance of a particular class or interface.

```java
public class InstanceOfDemo {
    public static void main(String[] args) {
        Object obj1 = "Hello";
        Object obj2 = 42;
        Object obj3 = new ArrayList<>();
        
        // Using instanceof
        System.out.println(obj1 instanceof String);    // true
        System.out.println(obj1 instanceof Integer);   // false
        System.out.println(obj2 instanceof Integer);   // true
        System.out.println(obj3 instanceof List);      // true
        
        // Safe casting with instanceof
        if (obj1 instanceof String) {
            String str = (String) obj1;
            System.out.println("String length: " + str.length());
        }
        
        // Pattern matching (Java 14+)
        if (obj2 instanceof Integer number) {
            System.out.println("Number: " + number);
        }
    }
}
```

### 🔒 Access Modifiers (`public`, `private`, `protected`, default)

Access modifiers control the visibility of classes, fields, methods, and constructors.

| Modifier | Same Class | Same Package | Subclass (different package) | Anywhere |
|----------|------------|--------------|------------------------------|----------|
| `private` | ✅ | ❌ | ❌ | ❌ |
| `default` | ✅ | ✅ | ❌ | ❌ |
| `protected` | ✅ | ✅ | ✅ | ❌ |
| `public` | ✅ | ✅ | ✅ | ✅ |

```java
package com.example.access;

public class AccessModifiersDemo {
    // Public - accessible from anywhere
    public String publicField = "Public field";
    
    // Protected - accessible in same package and subclasses
    protected String protectedField = "Protected field";
    
    // Default (package-private) - accessible only in same package
    String defaultField = "Default field";
    
    // Private - accessible only within this class
    private String privateField = "Private field";
    
    // Public method
    public void publicMethod() {
        System.out.println("Public method");
    }
    
    // Protected method
    protected void protectedMethod() {
        System.out.println("Protected method");
    }
    
    // Default method
    void defaultMethod() {
        System.out.println("Default method");
    }
    
    // Private method
    private void privateMethod() {
        System.out.println("Private method");
    }
}

// Subclass in same package
class SubClass extends AccessModifiersDemo {
    public void testAccess() {
        // Can access public, protected, and default members
        System.out.println(publicField);
        System.out.println(protectedField);
        System.out.println(defaultField);
        // System.out.println(privateField); // Compile-time error
        
        publicMethod();
        protectedMethod();
        defaultMethod();
        // privateMethod(); // Compile-time error
    }
}
```

### 📦 Packages and Imports

#### Packages
Used to organize related classes and avoid naming conflicts.

```java
// File: com/example/banking/BankAccount.java
package com.example.banking;

public class BankAccount {
    private String accountNumber;
    private double balance;
    
    public BankAccount(String accountNumber, double balance) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    
    // Methods...
}

// File: com/example/banking/Customer.java
package com.example.banking;

public class Customer {
    private String name;
    private String email;
    
    public Customer(String name, String email) {
        this.name = name;
        this.email = email;
    }
    
    // Methods...
}
```

#### Imports
Used to bring classes or packages into current scope.

```java
package com.example.app;

// Import specific class
import java.util.ArrayList;
import java.util.HashMap;

// Import all classes from package
import java.io.*;

// Import static members
import static java.lang.Math.PI;
import static java.lang.Math.sqrt;

// Import your own classes
import com.example.banking.BankAccount;
import com.example.banking.Customer;

public class MainApp {
    public static void main(String[] args) {
        // Using imported classes
        ArrayList<String> list = new ArrayList<>();
        HashMap<String, Integer> map = new HashMap<>();
        
        // Using static imports
        double radius = 5.0;
        double area = PI * radius * radius;
        double side = sqrt(area);
        
        // Using your own classes
        BankAccount account = new BankAccount("12345", 1000.0);
        Customer customer = new Customer("John Doe", "john@example.com");
    }
}
```

---

## 📚 Practice Exercises

### 🔧 Exercise 1: Create a Library Management System
Create classes for `Book`, `Author`, `Library`, and `Member` with proper OOP principles.

### 🔧 Exercise 2: Design a Shape Hierarchy
Create an abstract `Shape` class with subclasses `Circle`, `Rectangle`, `Triangle` implementing area and perimeter calculations.

### 🔧 Exercise 3: Implement a Bank Account System
Create `Account`, `SavingsAccount`, `CheckingAccount` classes with inheritance and proper encapsulation.

### 🔧 Exercise 4: Design a Vehicle Rental System
Create interfaces `Rentable`, `Insurable` and classes `Car`, `Motorcycle`, `Bicycle` implementing these interfaces.

---

## 🔗 Additional Resources

- [Java OOP Tutorial](https://www.w3schools.com/java/java_oop.asp)
- [Java Access Modifiers](https://docs.oracle.com/javase/tutorial/java/javaOO/accesscontrol.html)
- [Java Packages Tutorial](https://docs.oracle.com/javase/tutorial/java/package/index.html)

---

*Last Updated: 2024 | Java Version: 17+*