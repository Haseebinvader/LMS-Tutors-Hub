/* eslint-disable react/prop-types */

const Button = ({ type, title }) => {
    return (
        <>
            <button type={type} style={{ textAlign: 'center' }}>{title}</button>
        </>
    )
}

export default Button