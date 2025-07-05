# Java Programming Concepts: Interfaces and Abstract Classes

> **📚 Learning Resources:**
> - [Java Interfaces Tutorial](https://docs.oracle.com/javase/tutorial/java/IandI/index.html)
> - [Java Abstract Classes Tutorial](https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html)
> - [Java Enums Tutorial](https://docs.oracle.com/javase/tutorial/java/javaOO/enum.html)
> - [Functional Interfaces](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html)

---

## 🎭 6. Interfaces and Abstract Classes

Both interfaces and abstract classes are used to achieve abstraction in Java and define a contract, but they serve different purposes and have different capabilities.

### 📋 Defining and Using Interfaces

**Definition**: An interface is a blueprint of a class that defines a set of methods that implementing classes must provide.

**Key Characteristics:**
- Cannot be instantiated directly
- Methods are implicitly `public abstract` (before Java 8)
- Variables are implicitly `public static final`
- A class can implement multiple interfaces

#### Basic Interface Example

```java
// Interface definition
public interface Drawable {
    // Constants (implicitly public static final)
    int MAX_WIDTH = 1000;
    int MAX_HEIGHT = 1000;
    
    // Abstract methods (implicitly public abstract)
    void draw();
    void resize(int percentage);
    void setColor(String color);
    
    // Default method (Java 8+)
    default void displayInfo() {
        System.out.println("This is a drawable object");
    }
    
    // Static method (Java 8+)
    static void showMaxDimensions() {
        System.out.println("Max dimensions: " + MAX_WIDTH + "x" + MAX_HEIGHT);
    }
}

// Implementing class
public class Circle implements Drawable {
    private int radius;
    private String color;
    
    public Circle(int radius) {
        this.radius = radius;
        this.color = "Black";
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a circle with radius " + radius);
    }
    
    @Override
    public void resize(int percentage) {
        radius = (int)(radius * (1 + percentage / 100.0));
        System.out.println("Circle resized by " + percentage + "%. New radius: " + radius);
    }
    
    @Override
    public void setColor(String color) {
        this.color = color;
        System.out.println("Circle color set to: " + color);
    }
    
    // Can override default method
    @Override
    public void displayInfo() {
        System.out.println("This is a circle with radius " + radius + " and color " + color);
    }
}

public class Square implements Drawable {
    private int side;
    private String color;
    
    public Square(int side) {
        this.side = side;
        this.color = "Black";
    }
    
    @Override
    public void draw() {
        System.out.println("Drawing a square with side " + side);
    }
    
    @Override
    public void resize(int percentage) {
        side = (int)(side * (1 + percentage / 100.0));
        System.out.println("Square resized by " + percentage + "%. New side: " + side);
    }
    
    @Override
    public void setColor(String color) {
        this.color = color;
        System.out.println("Square color set to: " + color);
    }
}

// Usage
public class InterfaceDemo {
    public static void main(String[] args) {
        Drawable circle = new Circle(5);
        Drawable square = new Square(4);
        
        // Polymorphic behavior
        circle.draw();
        square.draw();
        
        // Using default method
        circle.displayInfo();
        square.displayInfo();
        
        // Using static method
        Drawable.showMaxDimensions();
    }
}
```

### 🔄 Interface vs Abstract Class

| Feature | Interface | Abstract Class |
|---------|-----------|----------------|
| **Purpose** | Defines a contract (what a class *can do*) | Provides blueprint with partial implementation (what a class *is*) |
| **Methods** | Pre-Java 8: Only abstract methods<br>Post-Java 8: Abstract, Default, Static<br>Post-Java 9: Private | Can have abstract and concrete methods |
| **Variables** | Only `public static final` variables | Can have `final`, `non-final`, `static`, `non-static` variables |
| **Instantiation** | Cannot be instantiated directly | Cannot be instantiated directly |
| **Inheritance** | A class `implements` an interface | A class `extends` an abstract class |
| **Multiple** | A class can `implement` multiple interfaces | A class can `extend` only one abstract class |
| **Constructor** | Cannot have constructors | Can have constructors |
| **Access Modifiers** | Members are implicitly `public` | Can have any access modifier |
| **`extends`/`implements`** | An interface can `extend` multiple interfaces | An abstract class can `implement` interfaces and `extend` one class |

### 🎯 Functional Interfaces

**Definition**: An interface with exactly one abstract method, primarily used for lambda expressions.

```java
// Functional interface
@FunctionalInterface
public interface Calculator {
    int operate(int a, int b);
    
    // Can have default methods
    default void displayResult(int result) {
        System.out.println("Result: " + result);
    }
    
    // Can have static methods
    static Calculator getDefaultCalculator() {
        return (a, b) -> a + b;
    }
}

// Built-in functional interfaces
import java.util.function.*;

public class FunctionalInterfaceDemo {
    public static void main(String[] args) {
        // Custom functional interface
        Calculator adder = (x, y) -> x + y;
        Calculator multiplier = (x, y) -> x * y;
        
        System.out.println("Sum: " + adder.operate(10, 5));
        System.out.println("Product: " + multiplier.operate(10, 5));
        
        // Built-in functional interfaces
        Predicate<String> isLong = s -> s.length() > 5;
        Function<String, Integer> getLength = String::length;
        Consumer<String> printer = System.out::println;
        Supplier<String> greeting = () -> "Hello, World!";
        
        System.out.println(isLong.test("Hello World")); // true
        System.out.println(getLength.apply("Hello")); // 5
        printer.accept("Hello from Consumer");
        System.out.println(greeting.get());
    }
}
```

### 🔧 Default and Static Methods in Interfaces

#### Default Methods
Methods with implementation in interfaces (Java 8+).

```java
public interface Logger {
    void log(String message);
    
    default void logInfo(String message) {
        System.out.println("[INFO] " + message);
    }
    
    default void logError(String message) {
        System.err.println("[ERROR] " + message);
    }
    
    default void logWarning(String message) {
        System.out.println("[WARNING] " + message);
    }
}

public class FileLogger implements Logger {
    @Override
    public void log(String message) {
        System.out.println("Logging to file: " + message);
    }
    // No need to implement default methods
}

public class ConsoleLogger implements Logger {
    @Override
    public void log(String message) {
        System.out.println("Logging to console: " + message);
    }
    
    @Override
    public void logInfo(String message) {
        System.out.println("Console INFO: " + message);
    }
}
```

#### Static Methods
Methods that belong to the interface itself (Java 8+).

```java
public interface MathUtils {
    static int add(int a, int b) {
        return a + b;
    }
    
    static int multiply(int a, int b) {
        return a * b;
    }
    
    static double calculateAverage(double[] numbers) {
        if (numbers.length == 0) return 0;
        
        double sum = 0;
        for (double num : numbers) {
            sum += num;
        }
        return sum / numbers.length;
    }
}

// Usage
public class StaticMethodDemo {
    public static void main(String[] args) {
        System.out.println(MathUtils.add(5, 3)); // 8
        System.out.println(MathUtils.multiply(4, 6)); // 24
        
        double[] numbers = {1.0, 2.0, 3.0, 4.0, 5.0};
        System.out.println(MathUtils.calculateAverage(numbers)); // 3.0
    }
}
```

### 🏷️ Marker Interfaces

**Definition**: Empty interfaces that mark classes for special behavior.

```java
import java.io.Serializable;
import java.lang.Cloneable;

// Serializable marker interface
public class Student implements Serializable {
    private String name;
    private int age;
    
    public Student(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // No methods required for Serializable
}

// Custom marker interface
public interface Validatable {
    // Empty interface - just marks the class as validatable
}

public class User implements Validatable {
    private String username;
    private String email;
    
    public User(String username, String email) {
        this.username = username;
        this.email = email;
    }
    
    public boolean isValid() {
        return username != null && !username.trim().isEmpty() &&
               email != null && email.contains("@");
    }
}
```

### 🎲 Enums

**Definition**: Special class representing a fixed set of named constants.

```java
// Basic enum
public enum DayOfWeek {
    MONDAY, TUESDAY, WEDNESDAY, THURSDAY, FRIDAY, SATURDAY, SUNDAY
}

// Enum with attributes and methods
public enum TrafficLight {
    RED("Stop", 30),
    YELLOW("Prepare to stop", 5),
    GREEN("Go", 45);
    
    private final String action;
    private final int duration;
    
    // Enum constructor is implicitly private
    TrafficLight(String action, int duration) {
        this.action = action;
        this.duration = duration;
    }
    
    public String getAction() {
        return action;
    }
    
    public int getDuration() {
        return duration;
    }
    
    public TrafficLight next() {
        return values()[(ordinal() + 1) % values().length];
    }
}

// Enum with abstract methods
public enum Operation {
    ADD {
        @Override
        public double apply(double a, double b) {
            return a + b;
        }
    },
    SUBTRACT {
        @Override
        public double apply(double a, double b) {
            return a - b;
        }
    },
    MULTIPLY {
        @Override
        public double apply(double a, double b) {
            return a * b;
        }
    },
    DIVIDE {
        @Override
        public double apply(double a, double b) {
            if (b == 0) {
                throw new ArithmeticException("Division by zero");
            }
            return a / b;
        }
    };
    
    public abstract double apply(double a, double b);
}

// Usage
public class EnumDemo {
    public static void main(String[] args) {
        // Basic enum
        DayOfWeek today = DayOfWeek.MONDAY;
        System.out.println("Today is " + today);
        
        // Enum with attributes
        TrafficLight current = TrafficLight.RED;
        System.out.println("Current light: " + current + 
                         ", Action: " + current.getAction() + 
                         ", Duration: " + current.getDuration() + " seconds");
        
        // Enum with abstract methods
        Operation op = Operation.ADD;
        System.out.println("5 + 3 = " + op.apply(5, 3));
        
        // Iterating through enum values
        for (DayOfWeek day : DayOfWeek.values()) {
            System.out.println(day);
        }
        
        // Enum comparison
        if (today == DayOfWeek.MONDAY) {
            System.out.println("It's Monday!");
        }
    }
}
```

### 🔗 Multiple Interface Implementation

```java
public interface Flyable {
    void fly();
    default void land() {
        System.out.println("Landing...");
    }
}

public interface Swimmable {
    void swim();
    default void dive() {
        System.out.println("Diving...");
    }
}

public interface Walkable {
    void walk();
    default void run() {
        System.out.println("Running...");
    }
}

// Class implementing multiple interfaces
public class Duck implements Flyable, Swimmable, Walkable {
    @Override
    public void fly() {
        System.out.println("Duck is flying");
    }
    
    @Override
    public void swim() {
        System.out.println("Duck is swimming");
    }
    
    @Override
    public void walk() {
        System.out.println("Duck is walking");
    }
    
    // Can override default methods
    @Override
    public void land() {
        System.out.println("Duck is landing gracefully");
    }
}

// Usage
public class MultipleInterfaceDemo {
    public static void main(String[] args) {
        Duck duck = new Duck();
        
        // Using methods from all interfaces
        duck.fly();
        duck.swim();
        duck.walk();
        duck.land();
        duck.dive();
        duck.run();
        
        // Polymorphic references
        Flyable flyable = duck;
        Swimmable swimmable = duck;
        Walkable walkable = duck;
        
        flyable.fly();
        swimmable.swim();
        walkable.walk();
    }
}
```

### 📋 Abstract Classes

**Definition**: A class that cannot be instantiated and may contain abstract methods that must be implemented by subclasses.

```java
// Abstract class example
public abstract class Vehicle {
    protected String brand;
    protected String model;
    protected int year;
    protected double fuelLevel;
    
    public Vehicle(String brand, String model, int year) {
        this.brand = brand;
        this.model = model;
        this.year = year;
        this.fuelLevel = 100.0;
    }
    
    // Abstract method (must be implemented by subclasses)
    public abstract void start();
    public abstract void stop();
    
    // Concrete method (has implementation)
    public void displayInfo() {
        System.out.println("Brand: " + brand + ", Model: " + model + ", Year: " + year);
    }
    
    public void refuel(double amount) {
        if (amount > 0) {
            fuelLevel = Math.min(100.0, fuelLevel + amount);
            System.out.println("Refueled. Current fuel level: " + fuelLevel + "%");
        }
    }
    
    public double getFuelLevel() {
        return fuelLevel;
    }
}

public class Car extends Vehicle {
    private boolean isAutomatic;
    
    public Car(String brand, String model, int year, boolean isAutomatic) {
        super(brand, model, year);
        this.isAutomatic = isAutomatic;
    }
    
    @Override
    public void start() {
        System.out.println("Car starts with a key ignition.");
    }
    
    @Override
    public void stop() {
        System.out.println("Car stops by turning off the engine.");
    }
    
    public void shiftGear() {
        if (isAutomatic) {
            System.out.println("Automatic transmission - no manual shifting needed.");
        } else {
            System.out.println("Manual transmission - driver shifts gears.");
        }
    }
}

public class Motorcycle extends Vehicle {
    private boolean hasSidecar;
    
    public Motorcycle(String brand, String model, int year, boolean hasSidecar) {
        super(brand, model, year);
        this.hasSidecar = hasSidecar;
    }
    
    @Override
    public void start() {
        System.out.println("Motorcycle starts with a kick start.");
    }
    
    @Override
    public void stop() {
        System.out.println("Motorcycle stops by applying brakes.");
    }
    
    public void wheelie() {
        System.out.println("Motorcycle performs a wheelie!");
    }
}

// Usage
public class AbstractClassDemo {
    public static void main(String[] args) {
        Vehicle car = new Car("Toyota", "Camry", 2023, true);
        Vehicle motorcycle = new Motorcycle("Honda", "CBR", 2022, false);
        
        // Polymorphic behavior
        car.start();
        car.stop();
        motorcycle.start();
        motorcycle.stop();
        
        // Specific behaviors
        ((Car) car).shiftGear();
        ((Motorcycle) motorcycle).wheelie();
    }
}
```

### 🔄 Interface vs Abstract Class - When to Use Which?

#### Use Interfaces When:
- You want to define a contract that multiple unrelated classes can implement
- You need multiple inheritance of type
- You want to provide default implementations (Java 8+)
- You're defining a simple contract with no shared state

#### Use Abstract Classes When:
- You want to share code among several closely related classes
- You expect that classes that extend your abstract class have many common methods or fields
- You want to declare non-public members
- You want to define constructors

### 📚 Practice Exercises

### 🔧 Exercise 1: Create a Payment System
Create interfaces `PaymentMethod`, `Refundable` and abstract class `Payment` with concrete implementations like `CreditCard`, `PayPal`, `BankTransfer`.

### 🔧 Exercise 2: Design a Notification System
Create interface `Notifiable` and abstract class `Notification` with subclasses `EmailNotification`, `SMSNotification`, `PushNotification`.

### 🔧 Exercise 3: Implement a Database Connection System
Create interface `DatabaseConnection` and abstract class `AbstractDatabase` with implementations for `MySQL`, `PostgreSQL`, `SQLite`.

### 🔧 Exercise 4: Design a Plugin System
Create interface `Plugin` and abstract class `BasePlugin` for a modular application architecture.

---

## 🔗 Additional Resources

- [Java Interfaces Tutorial](https://docs.oracle.com/javase/tutorial/java/IandI/index.html)
- [Java Abstract Classes Tutorial](https://docs.oracle.com/javase/tutorial/java/IandI/abstract.html)
- [Java Enums Tutorial](https://docs.oracle.com/javase/tutorial/java/javaOO/enum.html)
- [Functional Interfaces](https://docs.oracle.com/javase/tutorial/java/javaOO/lambdaexpressions.html)

---

*Last Updated: 2024 | Java Version: 17+* 