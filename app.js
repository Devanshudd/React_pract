import React from "react";
import ReactDOM  from "react-dom/client";

// const parent = React.createElement("div",{id:"parent"},
// React.createElement("div",{id:"child"}, [React.createElement("h1",{},"H1 tag"),React.createElement("h1",{},"H2 tag")]))

// const heading = React.createElement("h1",{id:"heading"},"hello from React");

const jsxheading = (
<h1>Hi My Name is Devanshu</h1>);


const Heading = () => (
    <div id="Head">
        <h3>HIIIIIIIII MY NAME IIIIS RAM</h3>
    </div>
);
console.log(jsxheading)
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Heading />);


