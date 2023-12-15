import React, { ReactNode } from "react";
import s from "./toolTip.module.scss";
import * as Tooltip from "@radix-ui/react-tooltip";

type PropsType = {
  children: ReactNode;
  textForDisplay: string;
  isDangerAction?: boolean;
};
export const ToolTip = (props: PropsType) => {
  return (
    <Tooltip.Provider>
      <Tooltip.Root>
        <Tooltip.Trigger asChild>{props.children}</Tooltip.Trigger>
        <Tooltip.Portal>
          <Tooltip.Content
            className={`${s.tooltipContent} ${
              props.isDangerAction ? s.danger : ""
            }`}
            sideOffset={5}
          >
            {props.textForDisplay}
            <Tooltip.Arrow className={s.tooltipArrow} />
          </Tooltip.Content>
        </Tooltip.Portal>
      </Tooltip.Root>
    </Tooltip.Provider>
  );
};
