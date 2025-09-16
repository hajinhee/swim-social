import "./pre-error-catch";
import { initRuntimeErrorCollector } from "./runtime-error";
import { initEventHandler } from "./event-handler";
import { initLinkManager } from "./link-manager";
import { initRouteManager } from "./router-manager";


const isPreviewBuild = __IS_PREVIEW__;

console.log("Is preview build:", isPreviewBuild);

async function init() {
  if (!isPreviewBuild) {
    return;
  }
  initRuntimeErrorCollector();
  initLinkManager();
  initEventHandler();
  initRouteManager();
  
}

init()