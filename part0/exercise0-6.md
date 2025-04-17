```mermaid
sequenceDiagram
    participant browser
    participant server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server

    server-->>browser: HTTP status code 201, Javascript code.
    deactivate server

    Note right of browser: The instructions to rerender and to send the application/json to the server is derived from the Javascript code from the HTTP status code 201.

    Note right of browser: notes.push(note) adds the new item at the end of the array, e.target.elements[0].value = '' removes the value of the form, the method redrawNotes() rerenders the client side, and sendToServer(note) sends the new note to the server.

    Note right of browser: the variable note, is then processed as a post request. the method .open() is to initialize the request, .setRequestHeader() sets custom headers, lastly,  xhttpForPost.send(JSON.stringify(note)) the data is sent as a JSON string.