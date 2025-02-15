import cx from "classnames";
import { forwardRef } from "react";

import { FullWidthContainer } from "metabase/styled-components/layout/FullWidthContainer";
import type { BoxProps } from "metabase/ui";

import { FixedWidthContainer } from "./Dashboard/DashboardComponents";
import S from "./DashboardHeaderView.module.css";

export const HeaderFixedWidthContainer = (
  props: BoxProps & { isNavBarOpen?: boolean; children?: React.ReactNode },
) => {
  const { isNavBarOpen, className, ...rest } = props;

  return (
    <FixedWidthContainer
      className={cx(
        S.HeaderFixedWidthContainer,
        {
          [S.isNavBarOpen]: isNavBarOpen,
        },
        className,
      )}
      {...rest}
    />
  );
};

// eslint-disable-next-line react/display-name
export const HeaderRow = forwardRef<
  HTMLDivElement,
  BoxProps & { children?: React.ReactNode }
>((props, ref) => {
  return <FullWidthContainer ref={ref} className={S.HeaderRow} {...props} />;
});
