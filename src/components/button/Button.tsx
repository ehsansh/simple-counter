import { getButtonClasses } from './Button.styles';

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
    return (
        <button
            onClick={action}
            className={getButtonClasses(color, isDisabled)}
            disabled={isDisabled}
            aria-disabled={isDisabled}
            aria-label={ariaLabel}
        >
            {children}
        </button>
    );
}

export default Button;
