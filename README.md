# interview-cheatsheet
This includes interview cheat sheets for SDET/QA Engineers

This is mkdocs + github pages publish demo from https://www.youtube.com/watch?v=xlABhbnNrfI&t=385s
Ref Notes: https://jameswillett.dev/getting-started-with-material-for-mkdocs/#initial-installation
Difference b/w MkDocs and MkDocs Material is MkDocs is core which provides functionality for building static sites whereas MkDocs Material provides on top MkDocs with nice cleaner UI and builtin functionality etc.

Pre-requiete
    Python 3
    PIP
    vscode

Terminal Commands (mac friendly)
    python3 -m venv venv
    source venv/bin/activate

    pip install mkdocs-material

    //To create sample framework for mkdocs in the current project
    mkdocs new .

    // Change mkdocs.yml to test and run
    mkdocs serve

To check yml syntax add extensions
    yaml (redhat)
    VSCode settings -> click on open settings json icon -> add parameter (refer note website and copy paste)
    To verify when you mousehover on the mkdocs.yml there is a link or extra info you get.

To host
in yml
    repo_name and repo_url to be mentioned