import React from 'react';
import * as ToggleGroup from '@radix-ui/react-toggle-group';
import s from './tabSwitcher.module.scss';
import {useDispatch} from "react-redux";
import {choseGender} from "@/state/character.slice";

export const ToggleGroupDemo = () => {

    const dispatch = useDispatch();

    const handleChange = (value: 'male' | 'female') => {
        dispatch(choseGender({value}));
    };
    return (<ToggleGroup.Root
        className={s.ToggleGroup}
        type="single"
        defaultValue="center"
        aria-label="Text alignment"
        onValueChange={handleChange}
    >
        <ToggleGroup.Item className={s.ToggleGroupItem} value="male" aria-label="Left aligned">
            male
        </ToggleGroup.Item>
        <ToggleGroup.Item className={s.ToggleGroupItem} value="female" aria-label="Right aligned">
            female
        </ToggleGroup.Item>
    </ToggleGroup.Root>)


}

