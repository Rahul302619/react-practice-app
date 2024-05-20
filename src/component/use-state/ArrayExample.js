import { useState } from "react";

function ArrayExample() {
    const [items, setItems] = useState([]);

    const addItem = () => {
        setItems(prevItems => [...prevItems, {
            id: prevItems.length,
            value: Math.floor(Math.random() * 10) + 1
        }]);
    }
    
    return (
        <div>
             <button onClick={addItem}>Add a Item</button>  

             <ul>
                {items.map(item => (
                    <li key={item.id}>{item.value}</li>
                ))}
             </ul>
        </div>
    )
}

export default ArrayExample