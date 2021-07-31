import React, { useState } from 'react';
import "./App.css";

const data = [
  { groupId: "CB12210304", groupName: "Indofood", idGroupCategory: 1 },
  { groupId: "CB12210301", groupName: "Astra International Group", idGroupCategory: 1 },
  { groupId: "CB12210302", groupName: "Semen Indonesia Group", idGroupCategory: 2 }
]

function App() {
  const [isCheck, setIsCheck] = useState([]);
  const [isCheckAll, setIsCheckAll] = useState(false);
  const [isShow, setIsShow] = useState(false);
  const [valueFilter, setvalueFilter] = useState("");
  const test = data.map((obj, index) => ({
    ...obj,
    status: isCheck[index]
  }));

  console.log('testtttttttttttttttt', test);
  console.log('isCheck', isCheck);
  console.log('isShow', isShow);

  const handleClick = e => {
    const { id, checked } = e.target;
    setIsCheck([...isCheck, id]);
    // setIsCheck([id]); // ini pilih satu
    if (!checked) {
      setIsCheck(isCheck.filter(item => item !== id));
    }
  };

  const handleSelectAll = e => {
    setIsCheckAll(!isCheckAll);
    console.log('isCheckAll luar if ', isCheckAll);
    setIsCheck(data.map(li => li.groupId));
    if (isCheckAll) {
      console.log('isCheckAll dalam if ', isCheckAll);
      setIsCheck([]);
    }
  };

  const Checkbox = ({ id, type, handleClick, isChecked }) => {
    return (
      <input
        id={id}
        type={type}
        onChange={handleClick}
        checked={isChecked}
      />
    );
  };

  function getFilterUserByName(rows) {
    return rows.filter(
      (row) =>
        row.groupName
          .toLowerCase()
          .indexOf(valueFilter.toLowerCase()) > -1
    );
  }

  return (
    <>
      <div style={{ margin: "20px 200px", position: "relative", height: '100vh' }}
        onClick={(e) => {
          // e.stopPropagation();
          setIsShow(false);
        }}
      >
        <div style={{ margin: "20px 0px" }}>
          coba-coba di weekend
        </div>
        <div style={{ position: 'absolute', zIndex: 10, top: '20px' }}
          onClick={(e) => {
            e.stopPropagation();
            setIsShow(true)
          }}
        >
          <input type="text" placeholder="ayo pilih dulu" onChange={(e) => setvalueFilter(e.target.value)} />
          <div>
            {
              isShow === true && (
                <>
                  <Checkbox
                    type="checkbox"
                    name="selectAll"
                    id="selectAll"
                    handleClick={handleSelectAll}
                    isChecked={isCheckAll}
                    value={valueFilter}
                  />
                  Select all group
                  {
                    getFilterUserByName(data || []).map(({ groupId, groupName }) => {
                      return (
                        <div style={{ display: 'flex' }} key={groupId}>
                          <Checkbox
                            id={groupId}
                            type="checkbox"
                            handleClick={handleClick}
                            isChecked={isCheck.includes(groupId)}
                          />
                          <div style={{ margin: '4px 0px' }}>
                            {groupName}
                          </div>
                        </div>
                      );
                    })
                  }
                </>
              )
            }
          </div>
        </div>
      </div>
    </>
  )

}

export default App;