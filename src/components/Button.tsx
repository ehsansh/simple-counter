interface Props {
    children: React.ReactNode;
    action: () => void;
}

function Button({ children, action }: Props) {
    return <button onClick={action}>{children}</button>;
}

export default Button;
