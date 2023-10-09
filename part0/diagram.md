# Sequence diagram
In this diagram is depicted a situation where the user creates a new note on the page https://studies.cs.helsinki.fi/exampleapp/notes by writing something in the field and clicking the save button.

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: HTTP POST /new_note
    Note over browser, server: User submits a new note
    server-->>browser: Status Code 302 Found, URL redirect

    browser->>server: HTTP GET /notes
    server-->>browser: HTML code
    browser->>server: HTTP GET /main.css
    server-->>browser: main.css
    browser->>server: HTTP GET /main.js
    server-->>browser: main.js
    browser->>server: HTTP GET /data.json
    server-->>browser: [{content: "HTML is easy", date: "2019-05-23T17:30:31.098Z"}, ...]
    Note over browser, server: Browser fetches data for rendering
