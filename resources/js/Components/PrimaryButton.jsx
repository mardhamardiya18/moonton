import PropTypes from "prop-types";

PrimaryButton.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    variant: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "light-outline",
        "white-outline",
    ]),
    className: PropTypes.string,
    processing: PropTypes.bool,
    children: PropTypes.node,
};

export default function PrimaryButton({
    className = '',
    variant = "primary",
    processing,
    children,
    type = "submit"
}) {
    return (
        <button
            type={type}
            className={`${className} rounded-2xl py-[13px] text-center w-full btn-${variant} ${processing && "opacity-30"} `}
            disabled={processing}
        >
            {children}
        </button>
    );
}
