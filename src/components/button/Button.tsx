import { buttonBase, buttonColors, buttonDisabled } from './Button.styles';

interface Props {
    children: React.ReactNode;
    action: () => void;
    color?: 'primary' | 'danger' | 'secondary';
    isDisabled?: boolean;
}

function Button({ children, action, color = 'primary', isDisabled = false }: Props) {
    const className = [buttonBase, buttonColors[color], isDisabled ? buttonDisabled : ''].join(' ');

    return (
        <button onClick={action} className={className} disabled={isDisabled}>
            {children}
        </button>
    );
}

export default Button;
