import React from 'react'

const Logo = (props: any) => {

    const { renderDefault, title } = props

    return (
        <div className='flex items-center'>
            <img src="/profile-pic.png" alt="tpo gecp" className='rounded-full object-cover' width={50} />
            {renderDefault && <>{renderDefault(props)}</>}
        </div>
    )
}

export default Logo
