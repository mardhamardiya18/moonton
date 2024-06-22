import { Link } from '@inertiajs/react'
import React from 'react'

const MenuItem = ({ link, isActive, icon, text, method = 'get' }) => {
    return (
        <Link
            href={link ? route(link) : null}
            className={`side-link ${isActive && 'active'}`}
            method={method}
            {...(method === 'post' ? { as: 'button' } : {})}>
            {icon}
            {text}
        </Link>
    )
}

export default MenuItem