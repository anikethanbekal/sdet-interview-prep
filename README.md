# sdet-interview-prep
This includes interview cheat sheets for SDET/QA Engineers

# MkDocs
    This MkDocs material which is on top of MkDocs which provide more functionality. 
## Pre-requisite
    - Python 3
    - PIP
    - VSCode
    * VSCode extension
      * YAML (redhat)
## To run project locally (mac friendly)
    ```shell script
    python3 -m venv venv
    source venv/bin/activate
    pip install mkdocs-material
    // to start the Mkdocsserver
    mkdocs serve
    ```

# Project Structure

[include] (projectStructure.txt)

## Changes to note
If repo is changes then to host do the following changes in mkdocs.yml
    1. Localhost: repo_name and repo_url to be localhost
    2. To git then change repo_name and repo_url to be as needed.

# Generate projectStructure.txt automatically
```Shell Script
// To install tree in mac
brew install tree

// Run the following command with ignore unwanted files / directories.
tree -L 4 -I 'venv' -I 'temp' > projectStructure_temp.txt

```

# Standard Template
    For writing cheat-sheets refer [text](docs/cheat-sheets/StandardTemplate.md)
# References
Project Structure: https://tree.nathanfriend.io

Mkdocs:
    https://www.youtube.com/watch?v=xlABhbnNrfI&t=385s
    https://jameswillett.dev/getting-started-with-material-for-mkdocs/#initial-installation



## How to Use This Repository

### Local Development

To run this project locally:

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/YourGitHubUsername/coding-practice-hub.git](https://github.com/YourGitHubUsername/coding-practice-hub.git)
    cd coding-practice-hub
    ```
    (Remember to replace `YourGitHubUsername` with your actual GitHub username.)

2.  **Set up a Python virtual environment (recommended):**
    ```bash
    python -m venv .venv
    source .venv/bin/activate # On macOS/Linux
    # .venv\Scripts\activate.bat # On Windows (Command Prompt)
    # .venv\Scripts\Activate.ps1 # On Windows (PowerShell)
    ```

3.  **Install dependencies:**
    ```bash
    pip install mkdocs mkdocs-material pymdown-extensions
    ```

4.  **Serve the site locally:**
    ```bash
    mkdocs serve
    ```
    Open your browser to `http://127.0.0.1:8000` (or the address provided in your terminal).

### Contributing

We welcome contributions! Please follow these steps to contribute:

1.  Fork the repository.
2.  Create a new feature branch (`git checkout -b feature/your-feature-name`).
3.  Make your changes and test them locally (`mkdocs serve`).
4.  Commit your changes (`git commit -m "feat: Add new awesome content"`).
5.  Push your branch to your fork (`git push origin feature/your-feature-name`).
6.  Open a Pull Request to the `main` branch of this repository.

### Deployment

This site is automatically deployed to GitHub Pages using GitHub Actions whenever changes are merged into the `main` branch. You can view the live site at:

`https://YourGitHubUsername.github.io/coding-practice-hub/`
(Remember to replace `YourGitHubUsername` with your actual GitHub username.)

---

**Author:** Your Name
**License:** [MIT License](LICENSE) (if you have one, otherwise remove or update)