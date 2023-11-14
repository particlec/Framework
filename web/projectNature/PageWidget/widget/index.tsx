import BaseWidget, { WidgetState } from "widgets/BaseWidget";
import { WidgetType } from "constants/WidgetConstants";

import React from "react";
import { contentConfig, styleConfig } from "./propertyConfig";

import PageCustomComponent from "../component";

class PageCustomWidget extends BaseWidget<any, WidgetState> {
  getPageView() {
    // const { tableData } = this.props;
    return <PageCustomComponent />;
  }

  // getTableColumns(){
  //   const {
  //     tableData
  //   } = this.props;

  //   let TableColumns =  tableData.

  //   return []

  // }

  static getWidgetType(): WidgetType {
    return "PageCustom_WIDGET";
  }

  static getPropertyPaneContentConfig() {
    return contentConfig as any;
  }

  static getPropertyPaneStyleConfig() {
    return styleConfig;
  }

  getPropertyPaneStyleConfig() {
    return [];
  }
}

export default PageCustomWidget;
