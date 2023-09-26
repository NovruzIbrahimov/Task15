function handleKeyPress(event) {
    const input = document.getElementById("newInput");
    
    if (event.key === "Backspace") {
       
        event.preventDefault(); 
        input.value = input.value.slice(0, -1);
        
    } else if (event.key === " ") {
        
        event.preventDefault(); 
        input.value += " ";
    }
}