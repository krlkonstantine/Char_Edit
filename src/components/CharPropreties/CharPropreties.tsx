import React from 'react';
import Image from 'next/image'

import s from './charPropreties.module.scss'
import {Property} from "@/components/CharPropreties/property/property";
export const CharPropreties = () => {
    return (
        <div className={s.characterWrapper}>
          <div className={s.mainPropertiesWrapper}>
              <Property propertyTitle={'power'} propertyValue={0}/>
              <Property propertyTitle={'dexterity'} propertyValue={0}/>
              <Property propertyTitle={'inteligence'} propertyValue={0}/>
              <Property propertyTitle={'charisma'} propertyValue={0}/>
          </div>
          <div className={s.secondaryPropertiesWrapper}>
              <Property propertyTitle={'vitalForce'} propertyValue={0}/>
              <Property propertyTitle={'dodging'} propertyValue={0}/>
              <Property propertyTitle={'vigor'} propertyValue={0}/>
          </div>
          <div className={s.skillsWrapper}>
              <Property propertyTitle={'strike'} propertyValue={0}/>
              <Property propertyTitle={'stealth'} propertyValue={0}/>
              <Property propertyTitle={'archery'} propertyValue={0}/>
              <Property propertyTitle={'trainability'} propertyValue={0}/>
              <Property propertyTitle={'survival'} propertyValue={0}/>
              <Property propertyTitle={'healing'} propertyValue={0}/>
              <Property propertyTitle={'harassment'} propertyValue={0}/>
              <Property propertyTitle={'discernment'} propertyValue={0}/>
              <Property propertyTitle={'appearance'} propertyValue={0}/>
              <Property propertyTitle={'manipulation'} propertyValue={0}/>
          </div>
        </div>
    );
}

