import React from 'react';
import Image from 'next/image'
import itachiPic from '../../assets/img/itachi_pic.jpg'

import s from './character.module.scss'
export const CharAppearance = () => {
    return (
        <div className={s.characterWrapper}>
            <Image
                className={s.characterImg}
                src={itachiPic}
                alt="Next.js Logo"
                width={380}
                //height={37}
                priority
            />
        </div>
    );
}

