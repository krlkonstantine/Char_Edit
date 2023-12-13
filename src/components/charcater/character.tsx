import React from 'react';
import Image from 'next/image'
import itachiPic from '../../assets/img/itachi_new_pic.jpg'
import kaguyaPic from '../../assets/img/kaguya_pic.jpg'

import s from './character.module.scss'
import {useSelector} from "react-redux";
import {AppState} from "@/state/store";
export const CharAppearance = () => {

    const genderInfo = useSelector((state: AppState) => state.char.gender);

    return (
        <div className={s.characterWrapper}>
            <Image
                className={s.characterImg}
                src={genderInfo === 'male' ? itachiPic : kaguyaPic}
                alt="Next.js Logo"
                width={380}
                //height={37}
                priority
            />
        </div>
    );
}

