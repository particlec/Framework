import IconSVG from "./icon.svg";
import Widget from "./widget";

export const CONFIG = {
  type: Widget.getWidgetType(),
  name: "Page Custom",
  searchTags: ["页面"],
  iconSVG: IconSVG,

  // columns\rows 如何自定义

  defaults: {
    // useSourceData: false,
    // animateLoading: true,
    backgroundColor: "#fff",
    columns: 25,
    // disabledWhenInvalid: true,
    // fixedFooter: true,
    rows: 45,
    // schema: {},
    // scrollContents: true,
    // showReset: true,
    // title: "Form",
    // version: 1,
    // borderWidth: "1",

    widgetName: "PageCustom",

    // autoGenerateForm: true,
    // fieldLimitExceeded: false,
    // sourceData: {
    //     name: "John",
    //     date_of_birth: "20/02/1990",
    //     employee_id: 1001,
    //   },
    // submitButtonLabel: "Submit",
    // resetButtonLabel: "Reset",
  },

  properties: {
    derived: Widget.getDerivedPropertiesMap(),
    default: Widget.getDefaultPropertiesMap(),
    meta: Widget.getMetaPropertiesMap(),
    config: Widget.getPropertyPaneConfig(),
    contentConfig: Widget.getPropertyPaneContentConfig(),
    styleConfig: Widget.getPropertyPaneStyleConfig(),
    stylesheetConfig: Widget.getStylesheetConfig(),
  },
};

export default Widget;
