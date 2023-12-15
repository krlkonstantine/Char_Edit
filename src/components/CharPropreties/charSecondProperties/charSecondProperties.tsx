import React from "react";
import { Property } from "@/components/CharPropreties/property/property";
import { getDamage } from "@/state/character.slice";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { AppState } from "@/state/store";

export const CharSecondProperties = () => {
  const { t, i18n } = useTranslation();

  const secondParams = useSelector(
    (state: AppState) => state.char.charParams.secondaryParams,
  );

  return (
    <div>
      <Property
        toolTipText={t("main.tooltip.vitalForce")}
        propertyTitle={t("main.secondParam.vitalForce")}
        propertyValue={secondParams.vitalForce}
        isVitalForce={true}
        upgradeFnc={getDamage}
      />
      <Property
        toolTipText={t("main.tooltip.dodging")}
        propertyTitle={t("main.secondParam.dodging")}
        propertyValue={secondParams.dodging}
      />
      <Property
        toolTipText={t("main.tooltip.vigor")}
        propertyTitle={t("main.secondParam.vigor")}
        propertyValue={secondParams.vigor}
      />
    </div>
  );
};
