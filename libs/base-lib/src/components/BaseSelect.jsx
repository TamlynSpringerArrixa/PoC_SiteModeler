import React, { useState, useEffect } from 'react';

const BaseSelect = (props) => {
  const [selectedValue, setSelectedValue] = useState(null);

  const handleChange = (value) => {
    setSelectedValue(value);
    props.onSelect(value);
  };

  return (
    <div className="tile sm-12 md-12 lg-12">
      <div className="content">
        <label className="light">
          {props.label}
          {props.mandatory && <span style={{ color: "red" }}>*</span>}
        </label>
        <Select
          items={props.optionsList}
          onChange={(e) => handleChange(e.value)}
          placeholder={props.placeholder}
          value={selectedValue}
        />
      </div>
    </div>
  );
};



const BaseDependentSelect = (props) => {
  const [selectBoxes, setSelectBoxes] = useState([]);
  const [optionsList, setOptionsList] = useState(props.optionsList || []);

  useEffect(() => {
    if (props.optionsList) {
      setOptionsList(props.optionsList);
    }
  }, [props.optionsList]);

  const handleAddSelectBox = () => {
    setSelectBoxes([...selectBoxes, {}]);
  };

  const handleRemoveSelectBox = (index) => {
    setSelectBoxes(selectBoxes.filter((_, i) => i !== index));
  };

  const handleSelectChange = (value) => {
    console.log("Selected value:", value);
  };

  return (
    <div>
      {selectBoxes.map((item, index) => (
        <div key={index}>
          <BaseSelect
            optionsList={optionsList}
            label="RAT with dependent dropdown"
            placeholder="Select a RAT"
            mandatory={true}
            onSelect={handleSelectChange}
          />
          <button onClick={() => handleRemoveSelectBox(index)}>Remove</button>
        </div>
      ))}
      <button onClick={handleAddSelectBox}>Add Select Box</button>
    </div>
  );
};

export default BaseDependentSelect;
