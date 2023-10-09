# Single page app sequence diagram
In this diagram is depicted a situation where the user cgoes to the single-page app version of the notes app at https://studies.cs.helsinki.fi/exampleapp/spa.

```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: Request /spa
    server-->>browser: HTML code

    browser->>server: Request /main.css
    server-->>browser: main.css

    browser->>server: Request /spa.js
    server-->>browser: spa.js

    browser->>server: Request /data.json
    server-->>browser: JSON Data
    Note over browser, server: Data includes items like: {content: "HTML is easy", date: "2019-05-23T17:30:31.098Z"}