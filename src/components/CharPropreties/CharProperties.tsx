import React from "react";

import s from "./charPropreties.module.scss";
import { useSelector } from "react-redux";
import { AppState } from "@/state/store";

import { PointsInfo } from "@/components/CharPropreties/PointsInfo/PointsInfo";
import { useTranslation } from "react-i18next";
import { CharBasicProperties } from "@/components/CharPropreties/charBasicProperties/charBasicProperties";
import { CharSecondProperties } from "@/components/CharPropreties/charSecondProperties/charSecondProperties";
import { CharSkills } from "@/components/CharPropreties/charSkills/charSkills";

export const CharProperties = () => {
  const points = useSelector((state: AppState) => state.char.charParams.points);
  const { t, i18n } = useTranslation();

  return (
    <div className={s.skillsandPropertiesWrapper}>
      <div className={s.propertiesWrapper}>
        <div className={s.mainPropertiesWrapper}>
          <div className={s.pointsInfoWrapper}>
            <PointsInfo
              points={points}
              displayText={t("main.pointsChar")}
              noPointsText={t("main.noPoints")}
            />
          </div>
          <CharBasicProperties />
        </div>
        <div className={s.secondaryPropertiesWrapper}>
          <CharSecondProperties />
        </div>
      </div>
      <div className={s.skillsWrapper}>
        <CharSkills />
      </div>
    </div>
  );
};
