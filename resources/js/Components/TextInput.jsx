import { forwardRef, useEffect, useRef } from 'react';
import PropTypes from "prop-types"


const TextInput = forwardRef(function TextInput({
    type = 'text',
    defaultValue,
    variant = 'primary',
    placeholder,
    isError,
    className = '',
    isFocused = false,
    ...props
}, ref) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            defaultValue={defaultValue}
            className={
                `rounded-2xl bg-form-bg py-[13px] px-7 w-full ${isError && "input-error"} input-${variant} ${className}`
            }
            ref={input}
            placeholder={placeholder}
        />
    );
});

TextInput.propTypes = {
    type: PropTypes.oneOf(["text", "email", "number", "file", "password"]),
    name: PropTypes.string,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    defaultValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    className: PropTypes.string,
    variant: PropTypes.oneOf(["primary", "error", "primary-outline"]),
    autoComplete: PropTypes.string,
    require: PropTypes.bool,
    isFocused: PropTypes.bool,
    handleChange: PropTypes.func,
    placeholder: PropTypes.string,
    isError: PropTypes.bool
}

export default TextInput
