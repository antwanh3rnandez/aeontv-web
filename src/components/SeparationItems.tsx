
export function SeparatorWithIcon ({ icon: Icon, iconSize, color }) {
    return (
        <div className='py-6 flex flex-row items-center justify-center'>
            <hr className="w-[25%] border-greenprimary border-t-4" /> 
            <div className='mx-4'>
                <Icon size={iconSize} className={`text-${color}`}/>
            </div>
            <hr className="w-[25%] border-greenprimary border-t-4" /> 
        </div>
    )
}

export function SeparatorSectionUp ({color}) {
    return (
        <div className='flex flex-row items-center justify-center'>
            <div className={`w-[75%] h-24 bg-${color}`} style={{ clipPath: 'polygon(0 100%, 100% 100%, 0% 0%)' }}>
            </div>
            <div className={`w-[25%] h-24 bg-${color}`} style={{ clipPath: 'polygon(100% 100%, 0% 100%, 100% 0%)' }}>
            </div>
        </div>
    )
}