import { getButtonClasses } from './Button.styles';

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    color?: 'primary' | 'danger' | 'secondary';
    isLoading?: boolean;
};

function Button({
    children,
    color = 'primary',
    disabled = false,
    'aria-label': ariaLabel,
    ...rest
}: ButtonProps) {
    return (
        <button
            className={getButtonClasses(color, disabled)}
            disabled={disabled}
            aria-disabled={disabled}
            aria-label={ariaLabel}
            {...rest}
        >
            {children}
        </button>
    );
}

export default Button;
