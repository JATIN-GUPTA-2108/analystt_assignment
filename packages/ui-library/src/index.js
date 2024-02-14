
const { init } = require('snabbdom');
const { h } = require('snabbdom/h');
const { Props, State, TemplateFunction } = require('./types');


const patch = init([]);


let currentState = { ...State };

let vnode;

// Render function to render the template with props and current state
const render = (template, props) => {
  // Patch the virtual DOM node or create a new one
  vnode = patch(vnode || document.getElementById('app'), template(props, currentState));
};

// Function to update the state
const updateState = (newState) => {
  // Log state change
  console.log('State changed:', newState);

  currentState = { ...currentState, ...newState };
  te
  render(defaultTemplate, {});
};

// Default template function
const defaultTemplate = (props, state) => TemplateFunction(props, state);

// Event handler for button click
const handleClick = () => {
  // Log button click
  console.log('Button clicked');
  // Update the state by incrementing the count
  updateState({ count: currentState.count + 1 });
};

// Log component mount
console.log('Component mounted');


render(defaultTemplate, {});


const { proxy } = require('snabbdom/h');

// Handler for Proxy to observe state changes
const nextHandler = {
  set(target, property, value) {
    // If the property being set is 'count', log the state change
    if (property === 'count') {
      console.log('State changed:', { count: value });
    }

    target[property] = value;

    return true;
  },
};

// Create a Proxy object to observe state changes
currentState = new Proxy(currentState, nextHandler);

