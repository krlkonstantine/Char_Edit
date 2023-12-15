import React from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import s from './genderSwitcher.module.scss';
import {useDispatch} from "react-redux";
import {choseGender} from "@/state/character.slice";

type PropsType = {
    maleText: string
    femaleText: string
}
export const ToggleGender = (props: PropsType) => {
    //TODO this one can be made reusable (for gender and language)
    const dispatch = useDispatch();

    const handleChange = (value: 'male' | 'female') => {
        dispatch(choseGender({value}));
    };
    return (<ToggleGroup.Root
        className={s.toggleGroup}
        type="single"
        defaultValue="male"
        aria-label="Text alignment"
        onValueChange={handleChange}
    >
        <ToggleGroup.Item className={s.toggleGroupItem} value="male" aria-label="Left aligned">
            {props.maleText}
        </ToggleGroup.Item>
        <ToggleGroup.Item className={s.toggleGroupItem} value="female" aria-label="Right aligned">
            {props.femaleText}
        </ToggleGroup.Item>
    </ToggleGroup.Root>)


}

