# New note spa sequence diagram
In this diagram is depicted a situation where the user creates a new note using the single-page version of the app https://studies.cs.helsinki.fi/exampleapp/spa.

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: HTTP POST /new_note_spa
    Note over browser: Browser sends JSON data to server in POST request

    server-->>browser: Status Code: 201 Created
    Note over browser: Event handler renders the note on the page