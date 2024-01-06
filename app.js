const parent = React.createElement("div",{id:"parent"},
React.createElement("div",{id:"child"}, [React.createElement("h1",{},"H1 tag"),React.createElement("h1",{},"H2 tag")]))

const heading = React.createElement("h1",{id:"heading"},"hello from React");
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


