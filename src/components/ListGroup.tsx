// React components cannot return multiple elements
// Wrap them in a parent element or FRAGMENT (Preferred) (accomplished with <> )
import { MouseEvent, useState } from "react";

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: Props) {
    // Hook (var, function to set var) - useState is an async function so it will not update the state immediately
    const [selectedIndex, setSelectedIndex] = useState(-1)

    // Event handler
    const handleClick = (event: MouseEvent, item: string, index: number ) => {
        setSelectedIndex(index);
        /*console.log(index)
        console.log(selectedIndex);*/
        onSelectItem(item);
    }


    // Array of items
    const message = () => {
        if (items.length === 0) {
            return <li className="list-group-item">No items found</li>;
        }
        return items.map((item, index) => <li className={selectedIndex === index ? "list-group-item active" : "list-group-item"} key={item} onClick={(event) => handleClick(event, item, index)}>{item}</li>);
    }

    

    // return JSX
  return (
    <>
        <h1>{heading}</h1>
        <ul className="list-group">
            {message()}
        </ul>
    </>
  );
}

export default ListGroup;
