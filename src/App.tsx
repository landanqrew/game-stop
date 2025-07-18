import Message from "./Message";
import ListGroup from "./components/ListGroup";

export function App() {
  return (
    <div >
      {/* call components within HTML carrots ` />` will self close */}
      <Message />
      <ListGroup items={["New York", "San Francisco", "Tokyo", "London", "Paris"]} heading="Cities" onSelectItem={(item) => console.log(item)} />
    </div>
  );
}

export default App;
