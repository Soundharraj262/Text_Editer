const btnclick = document.getElementById("btnclick");

btnclick.addEventListener("click", () => {
    let text = document.getElementById('txt').value;
    let clr = document.getElementById('clr').value;
    let size = document.getElementById('size').value;
    let isBold = document.getElementById('bold').checked;
    let isItalic = document.getElementById('italic').checked;
    let align = document.getElementById('align').value;

    let display = document.getElementById('display');
    
    // Update text
    display.innerHTML = text;
    
    // Apply styles
    display.style.fontSize = size + "px";
    display.style.color = clr;
    display.style.textAlign = align;
    
    // Apply bold and italic if selected
    display.style.fontWeight = isBold ? 'bold' : 'normal';
    display.style.fontStyle = isItalic ? 'italic' : 'normal';
});
