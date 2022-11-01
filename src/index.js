import React from 'react';
import ReactDOM from 'react-dom';

// output jsx to react root
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<h1>This is root</h1>);

// JSX is a syntax extension of JS. Best used to describe what the UI looks like.
const helloWorld = <h1>Hello world!</h1>;

const showHelloWorld = ReactDOM.createRoot(document.getElementById('showHelloWorld'));
showHelloWorld.render(helloWorld);

// Embedding expressions in JSX. Aka using variables in JSX.
const name = 'Mario Mario';
const nameElement = <h1>Hello {name}</h1>;

const showName = ReactDOM.createRoot(document.getElementById('showName'));
showName.render(nameElement);

// The above extends into function calls.
function formatName(user) {
    let fullName = user.firstName + ' ' + user.lastName;
    return fullName;
}

const person = {
    firstName: 'John',
    lastName: 'McLean'
};

const formatNameElement = (
    <h1>
        Hello {formatName(person)}
    </h1>
);

const showFormatName = ReactDOM.createRoot(document.getElementById('showFormatName'));
showFormatName.render(formatNameElement);

// jsx can also be the output of a function.
function getGreeting(user) {
    if (user) {
        return <h1>Hello, {formatName(user)}!</h1>;
    }
    return <h1>Hello, Stranger.</h1>;
}

const showFunctionName = ReactDOM.createRoot(document.getElementById('showFunctionName'));
showFunctionName.render(getGreeting());

// // create new element for html. use either element option
// const element00 = React.createElement(
//     'h1',
//     { className: 'greeting' },
//     'Hello World'
// );

// const element = (
//     <h1 className="greeting">
//         Hello, world!
//     </h1>
// );