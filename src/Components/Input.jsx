import React from "react";

const Input = ({ margin, id, name, type, value, placeholder, disabled, onChange }) => {
    const styles = {
        margin: margin
    }

    return (
        <input
            className="input"
            style={styles}
            id={id}
            name={name}
            type={type}
            value={value}
            placeholder={placeholder}
            disabled={disabled}
            onChange={onChange}
        />
    );
};

export default Input;
