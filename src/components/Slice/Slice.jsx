import React, { useState } from 'react'

function Slice() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="relative w-full h-[500px]">
            <div
                className="relative w-full h-full overflow-hidden"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                {/* Left Part of the Image */}
                <div
                    className={`absolute top-0 left-0 h-full transition-all duration-500 ease-in-out ${
                        isHovered ? 'w-1/2' : 'w-full'
                    }`}
                    style={{
                        backgroundImage: `url('/images/mika.jpeg')`,
                        backgroundPosition: 'left',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
                {/* Right Part of the Image */}
                <div
                    className={`absolute top-0 right-0 h-full transition-all duration-500 ease-in-out ${
                        isHovered ? 'w-1/2' : 'w-0'
                    }`}
                    style={{
                        backgroundImage: `url('/images/mika.jpeg')`,
                        backgroundPosition: 'right',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                    }}
                />
            </div>
        </div>
    );
}

export default Slice;
