import { useState } from 'react'

function SearchDropDownList({ dropDownData }) {
  const [selectedOption, setSelectedOption] = useState('')
  const [dropdownOpen, setDropdownOpen] = useState(false)

  const handleInputChange = event => {
    // console.log("input change run")
    setSelectedOption(event.target.value)
    setDropdownOpen(true)
  }

  const handleOptionClick = option => {
    console.log('option clicked')
    setSelectedOption(option)
    setDropdownOpen(false)
  }

  return (
    <div className='input-with-dropdown'>
      <input
        type='text'
        placeholder='Type here'
        value={selectedOption}
        onChange={handleInputChange}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setTimeout(() => setDropdownOpen(false))}
      />
      {dropdownOpen && (
        <div className='dropdown-list'>
          {dropDownData.map((item, index) => (
            <div key={index} className='dropdown-option' onClick={() => handleOptionClick(item)}>
              {item}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default SearchDropDownList
