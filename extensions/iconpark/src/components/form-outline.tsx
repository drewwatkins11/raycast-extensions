import { Form, LocalStorage } from "@raycast/api";
import { IIconConfig } from "@icon-park/svg/lib/runtime";
import { LocalStorageKey } from "../utils/constants";
import * as d3 from "d3-color";
import { Dispatch, SetStateAction } from "react";

export function FormOutline(props: { iconConfig: IIconConfig; setRefresh: Dispatch<SetStateAction<number>> }) {
  const { iconConfig, setRefresh } = props;
  return (
    <Form.TextField
      id={"Stroke Color"}
      title={"Stroke Color"}
      defaultValue={iconConfig.colors.outline.fill}
      onChange={async (newValue) => {
        const config = { ...iconConfig };
        config.theme = "outline";
        config.colors.outline.fill = d3.rgb(newValue.replaceAll(" ", "")).formatHex();
        await LocalStorage.setItem(LocalStorageKey.ICON_CONFIG, JSON.stringify(config));
        setRefresh(Date.now());
      }}
    ></Form.TextField>
  );
}
