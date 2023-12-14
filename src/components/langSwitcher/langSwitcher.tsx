import React from 'react';
import s from "./langSwitcher.module.scss";
import i18n from 'i18next';
import * as ToggleGroup from '@radix-ui/react-toggle-group';

export const LangSwitcher = () => {

    const handleChange = (value: 'en' | 'ru') => {
        i18n.changeLanguage(`${value}`)

    };

    return (<ToggleGroup.Root
        className={s.ToggleGroup}
        type="single"
        defaultValue="center"
        aria-label="Text alignment"
        onValueChange={handleChange}
    >
        <ToggleGroup.Item className={s.ToggleGroupItem} value="en" aria-label="Left aligned">
            en
        </ToggleGroup.Item>
        <ToggleGroup.Item className={s.ToggleGroupItem} value="ru" aria-label="Right aligned">
            ru
        </ToggleGroup.Item>
    </ToggleGroup.Root>)
};
