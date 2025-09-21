import { buttonBase, buttonColors, buttonDisabled } from './Button.styles';

interface Props {
    children: React.ReactNode;
    action: () => void;
    color?: 'primary' | 'danger' | 'secondary';
    isDisabled?: boolean;
    'aria-label'?: string;
}

function Button({
    children,
    action,
    color = 'primary',
    isDisabled = false,
    'aria-label': ariaLabel,
}: Props) {
    const className = [buttonBase, buttonColors[color], isDisabled ? buttonDisabled : ''].join(' ');

    return (
        <button
            onClick={action}
            className={className}
            disabled={isDisabled}
            aria-disabled={isDisabled}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
}

export default Button;
