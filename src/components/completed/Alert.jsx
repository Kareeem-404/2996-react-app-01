function Alert(props) {

    console.log('props', props)

    let bg = '';
    let borderColor = '';

    switch (props.type) {
        case 'success':
            bg = 'bg-green-200';
            borderColor = 'border-green-800';
            break;
        case 'error':
            bg = 'bg-red-200';
            borderColor = 'border-red-800';
            break;
        case 'warn':
            bg = 'bg-yellow-200';
            borderColor = 'border-yellow-800';
            break;
        default:
            bg = 'bg-gray-100';
            borderColor = 'border-gray-800';
            break;
    }

    let style = `p-3 max-w-lg m-auto my-6 ${bg}`;

    if (props.rounded) style += ' rounded-s-xl';

    if (props.border) style += ` border-s-4 ${borderColor}`;

    return (
        <div className={style}>
            {props.children}
        </div>
    )
}

export default Alert;   