import React, { useState } from 'react';

function App() {

  const [selectedList, setSelectedList] = useState([]);

  const handleChange = e => {
    let { options } = e.target;
    options = Array.apply(null, options)
    const selectedValues = options.filter(x => x.selected).map(x => x.value);
    setSelectedList(selectedValues);
  }

  return (
    <div className="App">
      <h3>React multiselect listbox component - <a href="https://cluemediator.com" target="_blank">Clue Mediator</a></h3>
      <select
        multiple
        name="list-box"
        onChange={handleChange}>
        <option value="Value 1">Option 1</option>
        <option value="Value 2">Option 2</option>
        <option value="Value 3">Option 3</option>
        <option value="Value 4">Option 4</option>
        <option value="Value 5">Option 5</option>
        <option value="Value 6">Option 6</option>
        <option value="Value 7">Option 7</option>
        <option value="Value 8">Option 8</option>
      </select>
      <br /><br />
      <b>Output:</b>
      <pre>{JSON.stringify(selectedList)}</pre>
    </div>
  );
}

export default App;
