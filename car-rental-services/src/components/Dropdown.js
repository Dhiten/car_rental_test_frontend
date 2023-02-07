import { useState } from "react";

import "../Dropdown.css";

export const Dropdown = ({ placeHolder, options, onChange }) => {
    const [showMenu, setShowMenu] = useState(false);
    const [selected, setSelected] = useState(null);

    useState(() => {
        const handler = () => setShowMenu(false);

        window.addEventListener("click", handler);;
        return () => {
            window.removeEventListener("click", handler);
        };
    });
    const handleInputClick = (e) => {
        e.stopPropagation();
        setShowMenu(!showMenu);
    };

    const getDisplay = () => {
        if (selected) return selected.label;
        return placeHolder;
    };

    const onItemClick = (option) => {
        setSelected(option);
        setShowMenu(false);
        onChange(option);
    };

    const isSelected = (option) => {
        if (!selected) return false;
        return selected.value === option.value;
    };

    return (
        <div className="dropdown-container">
            <div className="dropdown-input" onClick={handleInputClick}>
                <div className="dropdown-selected-value">{getDisplay()}</div>
                <div className="dropdown-tools">
                    <div className="dropdown-tool">
                    </div>
                </div>
            </div>
            {showMenu && (<div className="dropdown-menu">
                {options.map((option) => (
                    <div key={option.id} className={`dropdown-item ${isSelected(option) && 'selected'}`} onClick={()=>onItemClick(option)}>{option.title}
                    </div>
                ))}
            </div>)}
        </div>
    );
};
