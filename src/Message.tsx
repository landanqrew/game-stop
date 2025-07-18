// Use PascalCase for Component function names
function Message() {
    const name = "Landan"
    // JSX: JavaScript XML (compiles to React.createElement)
    if (name) {
        return <h1>Hello {name}</h1>;
    }
    return <h1>Hello World</h1>;    
}

export default Message;