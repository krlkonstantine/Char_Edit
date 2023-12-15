import React from "react";

import s from "./generalInfo.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { AppState } from "@/state/store";
import { ToggleGender } from "@/components/genderSwitcher/genderSwitcher";
import { EditableSpan } from "@/components/utils/editableSpan/EditableSpan";
import { resetUserData, updateName } from "@/state/character.slice";
import { CharacterManagement } from "@/components/utils/exportImport/exportImport";
import { useTranslation } from "react-i18next";
import { ToolTip } from "@/components/utils/toolTip/toolTip";

export const GeneralInfo = () => {
  const dispatch = useDispatch();
  const generalInfo = useSelector((state: AppState) => state.char);
  const { t, i18n } = useTranslation();

  const onNameChangeHandler = (value: string) => {
    dispatch(updateName({ value }));
  };
  const resetHandler = () => {
    dispatch(resetUserData(""));
  };
  return (
    <div className={s.characterWrapper}>
      <div className={s.categoryWrapper}>
        <span className={s.categoryTitle}>{t("main.name")}</span>
        <EditableSpan value={generalInfo.name} onChange={onNameChangeHandler} />
      </div>
      <div className={s.categoryWrapper}>
        <span className={s.categoryTitle}>{t("main.gender")}</span>
        <ToggleGender maleText={t("main.male")} femaleText={t("main.female")} />
      </div>

      <CharacterManagement
        tooltipImportText={t("main.tooltip.importMsg")}
        importText={t("main.importChar")}
        exportText={t("main.exportChar")}
        character={generalInfo}
      />
      <ToolTip
        textForDisplay={t("main.tooltip.resetMsg")}
        isDangerAction={true}
      >
        <button
          style={{ cursor: "help" }}
          className={s.charOptionsBtn}
          onClick={resetHandler}
        >
          {t("main.reset")}
        </button>
      </ToolTip>
    </div>
  );
};
