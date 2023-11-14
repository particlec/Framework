import BaseWidget from "../../BaseWidget";
import { ValidationTypes } from "constants/WidgetValidation";

export const contentConfig = [
  {
    sectionName: BaseWidget.getUILangText("Basic"),
    children: [
      {
        propertyName: "text",
        label: BaseWidget.getUILangText("Label"),
        helpText: "Sets the label of the button",
        controlType: "INPUT_TEXT",
        placeholderText: "Submit",
        isBindProperty: true,
        isTriggerProperty: false,
        validation: { type: ValidationTypes.TEXT },
      },
    ],
  },
];

export const styleConfig = [
  {
    sectionName: BaseWidget.getUILangText("Color"),
    children: [
      {
        propertyName: "backgroundColor",
        helpText: "Use a html color name, HEX, RGB or RGBA value",
        placeholderText: "#FFFFFF / Gray / rgb(255, 99, 71)",
        label: BaseWidget.getUILangText("Background_Color"),
        controlType: "COLOR_PICKER",
        isJSConvertible: true,
        isBindProperty: true,
        isTriggerProperty: false,
        validation: { type: ValidationTypes.TEXT },
      },
    ],
  },
];
