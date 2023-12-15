import React from "react";
import { Property } from "@/components/CharPropreties/property/property";
import {
  upgradeCharisma,
  upgradeDexterity,
  upgradeIntelligence,
  upgradePower,
} from "@/state/character.slice";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { AppState } from "@/state/store";

export const CharBasicProperties = () => {
  const { t, i18n } = useTranslation();
  const basicParams = useSelector(
    (state: AppState) => state.char.charParams.basicParams,
  );
  return (
    <div>
      <Property
        toolTipText={t("main.tooltip.basicParam")}
        propertyTitle={t("main.basicParam.power")}
        propertyValue={basicParams.power}
        upgradeFnc={upgradePower}
      />
      <Property
        toolTipText={t("main.tooltip.basicParam")}
        propertyTitle={t("main.basicParam.dexterity")}
        propertyValue={basicParams.dexterity}
        upgradeFnc={upgradeDexterity}
      />
      <Property
        toolTipText={t("main.tooltip.basicParam")}
        propertyTitle={t("main.basicParam.intelligence")}
        propertyValue={basicParams.intelligence}
        upgradeFnc={upgradeIntelligence}
      />
      <Property
        toolTipText={t("main.tooltip.basicParam")}
        propertyTitle={t("main.basicParam.charisma")}
        propertyValue={basicParams.charisma}
        upgradeFnc={upgradeCharisma}
      />
    </div>
  );
};
