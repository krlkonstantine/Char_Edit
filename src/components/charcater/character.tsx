import React from 'react';
import Image from 'next/image'

import s from './character.module.scss'
export const Character = () => {
    return (
        <div className={s.characterWrapper}>
            <Image
                className={s.characterImg}
                src="/next.svg"
                alt="Next.js Logo"
                width={180}
                height={37}
                priority
            />
        </div>
    );
}

