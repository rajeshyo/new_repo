import React, {useState, useEffect, useRef} from "react";
import "./styles.css"

export default function Dropdown({options, prop, value, onChange, id, label}) {
    const [open, setOpen] = useState(false);
    const ref = useRef(null)
    const [query, setQuery] = useState('')

    useEffect(() => {
        document.addEventListener('click', close);
        return () => document.removeEventListener('click', close);
    }, [])

    function close(e) {
        setOpen(e && e.target === ref.current)
    }

    function filter(options) {
        return options.filter(
            (option) => 
            option[label].toLowerCase().indexOf(query.toLowerCase()) > -1
        )
    }

  return <div className="dropdown">
    <div className="control" onClick={() => setOpen((prev ) => !prev)}>
      <div className="selected-value">
          <input type="text" ref={ref} placeholder={value ? value[label] : prop} value={value || query} onChange={e => 
          {
              setQuery(e.target.value)
              onChange(null)
          }} onClick={() => setOpen((prev) => !prev)}/>
          </div>
      <div className={`arrow ${open ? 'open' : null}`}></div>
    </div>
    <div className={`options ${open ? 'open' : null}`}>
      {
        filter(options).map((option) => (
          <div key={option[id]} className={`option ${value === option ? 'selected' : null}`} 
          onClick={() => {
              onChange(option)
              setOpen(false)
              setQuery('')
          }}>{option[label]}</div>
        ))
      }
      <option value=""></option>
    </div>
  </div>
}
