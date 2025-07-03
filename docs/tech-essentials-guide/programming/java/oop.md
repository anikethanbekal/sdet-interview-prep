# Advanced OOP in Java for SDETs

This guide delves deeper into Object-Oriented Programming (OOP) principles in Java, focusing on how they apply to designing robust and scalable test automation frameworks.

## Topics:

- **Design Patterns:** Singleton, Factory, Builder, etc., and their application in test automation.
- **Abstract Classes vs. Interfaces:** Advanced use cases and best practices.
- **Encapsulation and Access Modifiers:** In-depth look at data hiding and control.
- **Polymorphism in Action:** Real-world examples in Selenium and API testing.

---

## 💡 SDET Perspective on OOP

For SDETs, OOP is not just theoretical; it's the foundation for building maintainable, reusable, and scalable test automation frameworks. Proper application of OOP principles reduces code duplication, simplifies maintenance, and makes the framework easier to understand and extend.

---

## ✅ Encapsulation and Access Modifiers

Encapsulation is the mechanism of wrapping the data (variables) and code acting on the data (methods) together as a single unit. In encapsulation, the variables of a class are hidden from other classes, and can be accessed only through methods of their current class.

### Access Modifiers in Detail

| Modifier | Class | Package | Subclass (same package) | Subclass (different package) | World | SDET Relevance |
|---|---|---|---|---|---|---|
| `private` | ✅ | ❌ | ❌ | ❌ | ❌ | Hiding internal implementation details of Page Objects (e.g., `WebElement` locators). |
| `default` (no modifier) | ✅ | ✅ | ❌ | ❌ | ❌ | Useful for utility methods or helper classes that are only relevant within a specific module/package of the framework. |
| `protected` | ✅ | ✅ | ✅ | ❌ | ❌ | Allowing subclasses (e.g., specific page classes extending a `BasePage`) to access certain methods or variables, but restricting external access. |
| `public` | ✅ | ✅ | ✅ | ✅ | ✅ | Exposing framework APIs (e.g., `clickElement()`, `login()`) that need to be accessible from test cases. |

**SDET Best Practice:**
- **Locators:** Always declare `WebElement` locators (e.g., `By.id("username")`) as `private` within your Page Object classes. This ensures that tests interact with elements only through the Page Object's public methods, promoting maintainability.
- **Helper Methods:** Methods that perform internal logic within a Page Object or a utility class should be `private` or `default`.
- **Framework APIs:** Methods that test cases directly call (e.g., `loginPage.enterUsername("test")`) should be `public`.

---

## ✅ Polymorphism in Action

Polymorphism means "many forms". In Java, it allows objects of different classes to be treated as objects of a common type. This is achieved through method overriding and method overloading.

### Method Overriding (Runtime Polymorphism)

A subclass provides a specific implementation for a method that is already defined in its superclass.

**SDET Example: WebDriver Interface**

```java
// WebDriver is an interface (common type)
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class BrowserFactory {
    public static WebDriver getDriver(String browserType) {
        if (browserType.equalsIgnoreCase("chrome")) {
            // ChromeDriver is a specific implementation
            return new ChromeDriver();
        } else if (browserType.equalsIgnoreCase("firefox")) {
            // FirefoxDriver is another specific implementation
            return new FirefoxDriver();
        }
        throw new IllegalArgumentException("Invalid browser type: " + browserType);
    }
}

// In your test:
// WebDriver driver = BrowserFactory.getDriver("chrome"); // Polymorphism in action
// driver.get("https://www.example.com");
// driver.quit();
```
Here, `WebDriver` is the polymorphic reference. Depending on the `browserType` passed, `driver` can hold an instance of `ChromeDriver`, `FirefoxDriver`, etc. This allows you to write generic test code that works across different browsers.

### Method Overloading (Compile-time Polymorphism)

Multiple methods with the same name but different parameters (number, type, or order of parameters) within the same class.

**SDET Example: Custom Click Method**

```java
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class ElementActions {
    private WebDriver driver;

    public ElementActions(WebDriver driver) {
        this.driver = driver;
    }

    // Overloaded method 1: Click by By locator
    public void clickElement(By locator) {
        driver.findElement(locator).click();
        System.out.println("Clicked element with locator: " + locator);
    }

    // Overloaded method 2: Click by WebElement
    public void clickElement(WebElement element) {
        element.click();
        System.out.println("Clicked element: " + element.getTagName());
    }

    // Overloaded method 3: Click by By locator with wait
    public void clickElement(By locator, long timeoutInSeconds) {
        // Add explicit wait logic here
        // WebDriverWait wait = new WebDriverWait(driver, Duration.ofSeconds(timeoutInSeconds));
        // wait.until(ExpectedConditions.elementToBeClickable(locator)).click();
        System.out.println("Clicked element with locator: " + locator + " after waiting for " + timeoutInSeconds + " seconds.");
    }
}
```
This allows your test framework to provide flexible ways to interact with elements based on the context.

---

## ✅ Abstract Classes vs. Interfaces

Both are used to achieve abstraction, but they have key differences and different use cases in framework design.

| Feature | Abstract Class | Interface | SDET Relevance |
|---|---|---|---|
| **Purpose** | Defines a common base for related classes, providing both abstract (unimplemented) and concrete (implemented) methods. Represents an "is-a" relationship. | Defines a contract for behavior. All methods are implicitly public and abstract (before Java 8). Since Java 8, can have `default` and `static` methods. Represents a "can-do" relationship. | |
| **Inheritance** | A class can `extend` only one abstract class. | A class can `implement` multiple interfaces. | |
| **Constructors** | Can have constructors. | Cannot have constructors. | |
| **Variables** | Can have instance variables (final, non-final, static, non-static). | Variables are implicitly `public static final`. | |
| **Access Modifiers** | Can have `public`, `protected`, `default`, `private` members. | All members are implicitly `public` (before Java 9, private methods in interfaces are allowed). | |

**SDET Best Practice:**

- **Abstract Class Use Case:**
    - **`BaseTest` Class:** An abstract `BaseTest` class can contain common setup (`@BeforeMethod`, `@BeforeSuite`) and teardown (`@AfterMethod`, `@AfterSuite`) logic, WebDriver initialization, and reporting setup. Specific test classes then `extend` this `BaseTest` class.
    ```java
    public abstract class BaseTest {
        protected WebDriver driver;

        @BeforeMethod
        public void setup() {
            driver = new ChromeDriver(); // Or get from config
            driver.manage().window().maximize();
            // ... common setup
        }

        @AfterMethod
        public void teardown() {
            if (driver != null) {
                driver.quit();
            }
            // ... common teardown
        }

        // Abstract method for specific test initialization
        public abstract void initializeTest();
    }

    public class LoginTest extends BaseTest {
        @Override
        public void initializeTest() {
            // Specific initialization for LoginTest
            System.out.println("Initializing Login Test");
        }

        @Test
        public void testValidLogin() {
            // ... test steps
        }
    }
    ```

- **Interface Use Case:**
    - **`IWebDriverManager` Interface:** Define an interface for managing WebDriver instances (e.g., `initDriver()`, `quitDriver()`). Different implementations (e.g., `LocalWebDriverManager`, `RemoteWebDriverManager`) can then implement this interface.
    ```java
    public interface IWebDriverManager {
        WebDriver initDriver();
        void quitDriver(WebDriver driver);
    }

    public class LocalWebDriverManager implements IWebDriverManager {
        @Override
        public WebDriver initDriver() {
            // Setup local Chrome driver
            return new ChromeDriver();
        }

        @Override
        public void quitDriver(WebDriver driver) {
            driver.quit();
        }
    }

    public class RemoteWebDriverManager implements IWebDriverManager {
        @Override
        public WebDriver initDriver() {
            // Setup remote driver for Selenium Grid/Cloud
            // DesiredCapabilities caps = new DesiredCapabilities();
            // caps.setBrowserName("chrome");
            // return new RemoteWebDriver(new URL("http://localhost:4444/wd/hub"), caps);
            return null; // Placeholder
        }

        @Override
        public void quitDriver(WebDriver driver) {
            driver.quit();
        }
    }
    ```
    This allows you to easily switch between local and remote execution without changing your core test logic.

---

## ✅ Design Patterns in Test Automation

Design patterns are reusable solutions to common problems in software design. Applying them in test automation leads to more robust, flexible, and maintainable frameworks.

### 1. Page Object Model (POM)

**Definition:** A design pattern that creates an object repository for UI elements. Each web page in the application is represented as a class, and the elements on the page are defined as variables within the class. Interactions with these elements are defined as methods.

**SDET Relevance:**
- **Separation of Concerns:** Separates test logic from page interaction logic.
- **Readability:** Makes tests easier to read and understand.
- **Maintainability:** If the UI changes, only the Page Object needs to be updated, not every test case that uses that element.

**Example:**

```java
// LoginPage.java (Page Object)
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

public class LoginPage {
    private WebDriver driver;

    // Locators (private for encapsulation)
    private By usernameField = By.id("username");
    private By passwordField = By.id("password");
    private By loginButton = By.id("loginButton");

    public LoginPage(WebDriver driver) {
        this.driver = driver;
    }

    // Actions (public methods)
    public void enterUsername(String username) {
        driver.findElement(usernameField).sendKeys(username);
    }

    public void enterPassword(String password) {
        driver.findElement(passwordField).sendKeys(password);
    }

    public HomePage clickLoginButton() {
        driver.findElement(loginButton).click();
        return new HomePage(driver); // Returns the next page object
    }

    public String getErrorMessage() {
        // Assuming there's an error message element
        return driver.findElement(By.id("errorMessage")).getText();
    }
}

// LoginTest.java (Test Class)
// import org.testng.annotations.Test; // Example with TestNG
// import org.testng.annotations.BeforeMethod;
// import org.testng.annotations.AfterMethod;
// import org.openqa.selenium.WebDriver;
// import org.openqa.selenium.chrome.ChromeDriver;

// public class LoginTest {
//     private WebDriver driver;
//     private LoginPage loginPage;

//     @BeforeMethod
//     public void setup() {
//         driver = new ChromeDriver();
//         driver.get("http://example.com/login");
//         loginPage = new LoginPage(driver);
//     }

//     @Test
//     public void testValidLogin() {
//         loginPage.enterUsername("validUser");
//         loginPage.enterPassword("validPass");
//         HomePage homePage = loginPage.clickLoginButton();
//         // Assertions on homePage
//     }

//     @Test
//     public void testInvalidLogin() {
//         loginPage.enterUsername("invalidUser");
//         loginPage.enterPassword("invalidPass");
//         loginPage.clickLoginButton();
//         // Assertions on error message
//         // Assert.assertEquals(loginPage.getErrorMessage(), "Invalid credentials");
//     }

//     @AfterMethod
//     public void teardown() {
//         if (driver != null) {
//             driver.quit();
//         }
//     }
// }
```

### 2. Singleton Pattern

**Definition:** Ensures that a class has only one instance and provides a global point of access to that instance.

**SDET Relevance:**
- **WebDriver Instance:** Managing a single instance of `WebDriver` across multiple test classes or threads (though often better handled by dependency injection or ThreadLocal for parallel execution).
- **Configuration Manager:** A single instance of a class that loads and provides access to test configuration properties.

**Example: WebDriver Singleton (Basic, for sequential execution)**

```java
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

public class WebDriverSingleton {
    private static WebDriver driver;

    private WebDriverSingleton() {
        // Private constructor to prevent instantiation
    }

    public static WebDriver getDriver() {
        if (driver == null) {
            driver = new ChromeDriver();
            // Add implicit waits, maximize window etc.
        }
        return driver;
    }

    public static void quitDriver() {
        if (driver != null) {
            driver.quit();
            driver = null; // Reset for next use
        }
    }
}

// Usage in test:
// WebDriver driver = WebDriverSingleton.getDriver();
// driver.get("http://example.com");
// WebDriverSingleton.quitDriver();
```
**Note:** For parallel test execution, `ThreadLocal` is generally preferred over a simple Singleton for WebDriver instances to ensure each thread gets its own independent driver.

### 3. Factory Pattern

**Definition:** Provides an interface for creating objects in a superclass, but allows subclasses to alter the type of objects that will be created.

**SDET Relevance:**
- **Browser/Driver Factory:** Creating different WebDriver instances (Chrome, Firefox, Edge) based on a configuration parameter.
- **API Client Factory:** Providing different API client implementations (e.g., for different API versions or authentication types).

**Example: Browser Factory (as seen in Polymorphism section)**

```java
// Interface for browser creation
public interface Browser {
    WebDriver createDriver();
}

// Concrete Chrome Browser
public class ChromeBrowser implements Browser {
    @Override
    public WebDriver createDriver() {
        // WebDriverManager.chromedriver().setup(); // Using WebDriverManager library
        return new ChromeDriver();
    }
}

// Concrete Firefox Browser
public class FirefoxBrowser implements Browser {
    @Override
    public WebDriver createDriver() {
        // WebDriverManager.firefoxdriver().setup();
        return new FirefoxDriver();
    }
}

// Factory Class
public class WebDriverFactory {
    public static WebDriver getDriver(String browserName) {
        Browser browser;
        if (browserName.equalsIgnoreCase("chrome")) {
            browser = new ChromeBrowser();
        } else if (browserName.equalsIgnoreCase("firefox")) {
            browser = new FirefoxBrowser();
        } else {
            throw new IllegalArgumentException("Unsupported browser: " + browserName);
        }
        return browser.createDriver();
    }
}

// Usage in test:
// WebDriver driver = WebDriverFactory.getDriver("chrome");
// driver.get("http://example.com");
// driver.quit();
```

### 4. Builder Pattern

**Definition:** Separates the construction of a complex object from its representation, allowing the same construction process to create different representations.

**SDET Relevance:**
- **Complex Test Data Generation:** Building complex test data objects (e.g., a user with many attributes, an order with multiple items).
- **API Request Body Construction:** Creating JSON or XML request bodies with many optional parameters.

**Example: Building a User Object for Test Data**

```java
public class User {
    private String firstName;
    private String lastName;
    private String email;
    private String password;
    private boolean isActive;
    private String role;

    // Private constructor to force use of Builder
    private User(UserBuilder builder) {
        this.firstName = builder.firstName;
        this.lastName = builder.lastName;
        this.email = builder.email;
        this.password = builder.password;
        this.isActive = builder.isActive;
        this.role = builder.role;
    }

    // Getters (no setters to maintain immutability after build)
    public String getFirstName() { return firstName; }
    public String getLastName() { return lastName; }
    public String getEmail() { return email; }
    public String getPassword() { return password; }
    public boolean isActive() { return isActive; }
    public String getRole() { return role; }

    public static class UserBuilder {
        private String firstName;
        private String lastName;
        private String email;
        private String password;
        private boolean isActive = true; // Default value
        private String role = "user"; // Default value

        public UserBuilder(String email, String password) {
            this.email = email;
            this.password = password;
        }

        public UserBuilder withFirstName(String firstName) {
            this.firstName = firstName;
            return this;
        }

        public UserBuilder withLastName(String lastName) {
            this.lastName = lastName;
            return this;
        }

        public UserBuilder withActiveStatus(boolean isActive) {
            this.isActive = isActive;
            return this;
        }

        public UserBuilder withRole(String role) {
            this.role = role;
            return this;
        }

        public User build() {
            // Add validation here if needed
            return new User(this);
        }
    }
}

// Usage in test:
// User adminUser = new User.UserBuilder("admin@example.com", "adminPass")
//                         .withFirstName("Admin")
//                         .withLastName("User")
//                         .withRole("admin")
//                         .build();

// User regularUser = new User.UserBuilder("user@example.com", "userPass")
//                           .build(); // Uses default values for isActive and role
```
This pattern makes object creation more readable and less error-prone, especially when dealing with objects that have many optional parameters.

---

## 🏷 Tags

`java`, `oop`, `design-patterns`, `sdet`, `programming`, `core-java`, `selenium`, `test-automation`