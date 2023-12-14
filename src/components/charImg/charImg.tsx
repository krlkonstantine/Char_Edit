import React from 'react';
import Image from 'next/image'
import itachiPic from '../../assets/img/itachi_pic.jpg'
import kaguyaPic from '../../assets/img/kaguya_pic.jpg'

import s from './charImg.module.scss'
import {useSelector} from "react-redux";
import {AppState} from "@/state/store";

export const CharAppearance = () => {

    const genderInfo = useSelector((state: AppState) => state.char.gender);
    const charImg = genderInfo === 'male' ? itachiPic : kaguyaPic

    return (
        <div className={s.characterWrapper}>
            <Image
                className={s.characterImg}
                src={charImg}
                alt="Next.js Logo"
                width={300}
                priority
            />
        </div>
    );
}

