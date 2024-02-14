type ServiceItemProps = {
    text: string
}

export const ServiceListItem: React.FC<ServiceItemProps> = ({ text }) => {
    return (
        <li className="flex items-center gap-2 text-xl mb-2">
            <span className="material-symbols-outlined bg-green" style={{ color: 'green' }}>
                check_circle
            </span>
            {text.toUpperCase()}
        </li>
    )
}