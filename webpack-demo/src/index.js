import myName from './myName';

function component() {
    const element = document.createElement('div');
  
    element.textContent = myName('Sam');
    return element;
  }
  
  document.body.appendChild(component());