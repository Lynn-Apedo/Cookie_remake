export function addElementCookie () {
  
    const addDiv = document.getElementById('bakery');
    const elementDiv = document.createElement('div');
        elementDiv.innerHTML = `
        <div id="Cookie"></div>
        `;
    addDiv.appendChild(elementDiv);
    console.log(addDiv);  
}
document.body.onload = addElementCookie;    