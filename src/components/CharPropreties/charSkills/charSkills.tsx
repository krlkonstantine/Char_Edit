import React from "react";
import { Property } from "@/components/CharPropreties/property/property";
import { upgradeSkill } from "@/state/character.slice";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { AppState } from "@/state/store";

export const CharSkills = () => {
  const { t, i18n } = useTranslation();
  const skills = useSelector((state: AppState) => state.char.charParams.skills);

  return (
    <div>
      <Property
        toolTipText={t("main.tooltip.strike")}
        propertyTitle={t("main.skills.strike")}
        propertyValue={skills.strike}
        skillKey={"strike"}
        upgradeFnc={upgradeSkill}
        isSkill={true}
      />
      <Property
        toolTipText={t("main.tooltip.stealth")}
        propertyTitle={t("main.skills.stealth")}
        propertyValue={skills.stealth}
        skillKey={"stealth"}
        upgradeFnc={upgradeSkill}
        isSkill={true}
      />
      <Property
        toolTipText={t("main.tooltip.archery")}
        propertyTitle={t("main.skills.archery")}
        propertyValue={skills.archery}
        skillKey={"archery"}
        upgradeFnc={upgradeSkill}
        isSkill={true}
      />
      <Property
        toolTipText={t("main.tooltip.trainability")}
        propertyTitle={t("main.skills.trainability")}
        propertyValue={skills.trainability}
        skillKey={"trainability"}
        upgradeFnc={upgradeSkill}
        isSkill={true}
      />
      <Property
        toolTipText={t("main.tooltip.survival")}
        propertyTitle={t("main.skills.survival")}
        propertyValue={skills.survival}
        skillKey={"survival"}
        upgradeFnc={upgradeSkill}
        isSkill={true}
      />
      <Property
        toolTipText={t("main.tooltip.healing")}
        propertyTitle={t("main.skills.healing")}
        propertyValue={skills.healing}
        skillKey={"healing"}
        upgradeFnc={upgradeSkill}
        isSkill={true}
      />
      <Property
        toolTipText={t("main.tooltip.harassment")}
        propertyTitle={t("main.skills.harassment")}
        propertyValue={skills.harassment}
        skillKey={"harassment"}
        upgradeFnc={upgradeSkill}
        isSkill={true}
      />
      <Property
        toolTipText={t("main.tooltip.discernment")}
        propertyTitle={t("main.skills.discernment")}
        propertyValue={skills.discernment}
        skillKey={"discernment"}
        upgradeFnc={upgradeSkill}
        isSkill={true}
      />
      <Property
        toolTipText={t("main.tooltip.appearance")}
        propertyTitle={t("main.skills.appearance")}
        propertyValue={skills.appearance}
        skillKey={"appearance"}
        upgradeFnc={upgradeSkill}
        isSkill={true}
      />
      <Property
        toolTipText={t("main.tooltip.manipulation")}
        propertyTitle={t("main.skills.manipulation")}
        propertyValue={skills.manipulation}
        skillKey={"manipulation"}
        upgradeFnc={upgradeSkill}
        isSkill={true}
      />
    </div>
  );
};
