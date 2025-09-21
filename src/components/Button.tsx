import { buttonStyles } from '@/components/Button.styles';

interface Props {
    children: React.ReactNode;
    action: () => void;
    color?: 'primary' | 'danger' | 'secondary';
}

function Button({ children, action, color = 'primary' }: Props) {
    return (
        <button onClick={action} className={buttonStyles[color]}>
            {children}
        </button>
    );
}

export default Button;
