gdjs.HomeCode = {};
gdjs.HomeCode.localVariables = [];
gdjs.HomeCode.idToCallbackMap = new Map();
gdjs.HomeCode.forEachCount0_2 = 0;

gdjs.HomeCode.forEachCount0_3 = 0;

gdjs.HomeCode.forEachCount1_2 = 0;

gdjs.HomeCode.forEachCount1_3 = 0;

gdjs.HomeCode.forEachCount2_2 = 0;

gdjs.HomeCode.forEachCount2_3 = 0;

gdjs.HomeCode.forEachIndex2 = 0;

gdjs.HomeCode.forEachIndex3 = 0;

gdjs.HomeCode.forEachObjects2 = [];

gdjs.HomeCode.forEachObjects3 = [];

gdjs.HomeCode.forEachTotalCount2 = 0;

gdjs.HomeCode.forEachTotalCount3 = 0;

gdjs.HomeCode.GDBackgroundObjects1= [];
gdjs.HomeCode.GDBackgroundObjects2= [];
gdjs.HomeCode.GDBackgroundObjects3= [];
gdjs.HomeCode.GDLogoObjects1= [];
gdjs.HomeCode.GDLogoObjects2= [];
gdjs.HomeCode.GDLogoObjects3= [];
gdjs.HomeCode.GDItchButtonObjects1= [];
gdjs.HomeCode.GDItchButtonObjects2= [];
gdjs.HomeCode.GDItchButtonObjects3= [];
gdjs.HomeCode.GDCloud1Objects1= [];
gdjs.HomeCode.GDCloud1Objects2= [];
gdjs.HomeCode.GDCloud1Objects3= [];
gdjs.HomeCode.GDCloud2Objects1= [];
gdjs.HomeCode.GDCloud2Objects2= [];
gdjs.HomeCode.GDCloud2Objects3= [];
gdjs.HomeCode.GDCloud3Objects1= [];
gdjs.HomeCode.GDCloud3Objects2= [];
gdjs.HomeCode.GDCloud3Objects3= [];


gdjs.HomeCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) < 750);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ItchButton"), gdjs.HomeCode.GDItchButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.HomeCode.GDLogoObjects2);
{for(var i = 0, len = gdjs.HomeCode.GDLogoObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDLogoObjects2[i].getBehavior("Scale").setScale(0.35);
}
}
{for(var i = 0, len = gdjs.HomeCode.GDItchButtonObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDItchButtonObjects2[i].setY((( gdjs.HomeCode.GDLogoObjects2.length === 0 ) ? 0 :gdjs.HomeCode.GDLogoObjects2[0].getPointY("")) + 320);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) < 1000);
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) > 750);
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ItchButton"), gdjs.HomeCode.GDItchButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.HomeCode.GDLogoObjects2);
{for(var i = 0, len = gdjs.HomeCode.GDLogoObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDLogoObjects2[i].getBehavior("Scale").setScale(0.38);
}
}
{for(var i = 0, len = gdjs.HomeCode.GDItchButtonObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDItchButtonObjects2[i].setY((( gdjs.HomeCode.GDLogoObjects2.length === 0 ) ? 0 :gdjs.HomeCode.GDLogoObjects2[0].getPointY("")) + 320);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) < 2000);
}
if (isConditionTrue_1) {
isConditionTrue_1 = false;
{isConditionTrue_1 = (gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) > 1000);
}
}
isConditionTrue_0 = isConditionTrue_1;
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ItchButton"), gdjs.HomeCode.GDItchButtonObjects2);
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.HomeCode.GDLogoObjects2);
{for(var i = 0, len = gdjs.HomeCode.GDLogoObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDLogoObjects2[i].getBehavior("Scale").setScale(0.45);
}
}
{for(var i = 0, len = gdjs.HomeCode.GDItchButtonObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDItchButtonObjects2[i].setY((( gdjs.HomeCode.GDLogoObjects2.length === 0 ) ? 0 :gdjs.HomeCode.GDLogoObjects2[0].getPointY("")) + 320);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) > 2000);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("ItchButton"), gdjs.HomeCode.GDItchButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.HomeCode.GDLogoObjects1);
{for(var i = 0, len = gdjs.HomeCode.GDLogoObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDLogoObjects1[i].getBehavior("Scale").setScale(0.55);
}
}
{for(var i = 0, len = gdjs.HomeCode.GDItchButtonObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDItchButtonObjects1[i].setY((( gdjs.HomeCode.GDLogoObjects1.length === 0 ) ? 0 :gdjs.HomeCode.GDLogoObjects1[0].getPointY("")) + 320);
}
}
}

}


};gdjs.HomeCode.eventsList1 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
{gdjs.evtTools.window.openURL("https://spintron17.itch.io/wing-delivery", runtimeScene);
}
}

}


};gdjs.HomeCode.asyncCallback10809540 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.HomeCode.localVariables);

{ //Subevents
gdjs.HomeCode.eventsList1(runtimeScene, asyncObjectsList);} //End of subevents
gdjs.HomeCode.localVariables.length = 0;
}
gdjs.HomeCode.idToCallbackMap.set(10809540, gdjs.HomeCode.asyncCallback10809540);
gdjs.HomeCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.HomeCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.HomeCode.asyncCallback10809540(runtimeScene, asyncObjectsList)), 10809540, asyncObjectsList);
}
}

}


};gdjs.HomeCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("ItchButton"), gdjs.HomeCode.GDItchButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDItchButtonObjects2.length;i<l;++i) {
    if ( gdjs.HomeCode.GDItchButtonObjects2[i].getBehavior("ButtonFSM").IsHovered(null) ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDItchButtonObjects2[k] = gdjs.HomeCode.GDItchButtonObjects2[i];
        ++k;
    }
}
gdjs.HomeCode.GDItchButtonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.HomeCode.GDItchButtonObjects2 */
{for(var i = 0, len = gdjs.HomeCode.GDItchButtonObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDItchButtonObjects2[i].getBehavior("Animation").setAnimationName("selected");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ItchButton"), gdjs.HomeCode.GDItchButtonObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDItchButtonObjects2.length;i<l;++i) {
    if ( !(gdjs.HomeCode.GDItchButtonObjects2[i].getBehavior("ButtonFSM").IsHovered(null)) ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDItchButtonObjects2[k] = gdjs.HomeCode.GDItchButtonObjects2[i];
        ++k;
    }
}
gdjs.HomeCode.GDItchButtonObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.HomeCode.GDItchButtonObjects2 */
{for(var i = 0, len = gdjs.HomeCode.GDItchButtonObjects2.length ;i < len;++i) {
    gdjs.HomeCode.GDItchButtonObjects2[i].getBehavior("Animation").setAnimationName("idle");
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("ItchButton"), gdjs.HomeCode.GDItchButtonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDItchButtonObjects1.length;i<l;++i) {
    if ( gdjs.HomeCode.GDItchButtonObjects1[i].getBehavior("ButtonFSM").IsPressed(null) ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDItchButtonObjects1[k] = gdjs.HomeCode.GDItchButtonObjects1[i];
        ++k;
    }
}
gdjs.HomeCode.GDItchButtonObjects1.length = k;
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10809180);
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.HomeCode.GDItchButtonObjects1 */
{for(var i = 0, len = gdjs.HomeCode.GDItchButtonObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDItchButtonObjects1[i].getBehavior("Animation").setAnimationName("pressed");
}
}

{ //Subevents
gdjs.HomeCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.HomeCode.mapOfGDgdjs_9546HomeCode_9546GDCloud1Objects2Objects = Hashtable.newFrom({"Cloud1": gdjs.HomeCode.GDCloud1Objects2});
gdjs.HomeCode.mapOfGDgdjs_9546HomeCode_9546GDCloud1Objects2Objects = Hashtable.newFrom({"Cloud1": gdjs.HomeCode.GDCloud1Objects2});
gdjs.HomeCode.mapOfGDgdjs_9546HomeCode_9546GDCloud2Objects2Objects = Hashtable.newFrom({"Cloud2": gdjs.HomeCode.GDCloud2Objects2});
gdjs.HomeCode.mapOfGDgdjs_9546HomeCode_9546GDCloud2Objects2Objects = Hashtable.newFrom({"Cloud2": gdjs.HomeCode.GDCloud2Objects2});
gdjs.HomeCode.mapOfGDgdjs_9546HomeCode_9546GDCloud3Objects2Objects = Hashtable.newFrom({"Cloud3": gdjs.HomeCode.GDCloud3Objects2});
gdjs.HomeCode.mapOfGDgdjs_9546HomeCode_9546GDCloud3Objects2Objects = Hashtable.newFrom({"Cloud3": gdjs.HomeCode.GDCloud3Objects2});
gdjs.HomeCode.eventsList4 = function(runtimeScene) {

};gdjs.HomeCode.eventsList5 = function(runtimeScene) {

};gdjs.HomeCode.eventsList6 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtsExt__RepeatEveryXSeconds__Repeat.func(runtimeScene, "SpawnCloud", gdjs.randomInRange(7, 12), null);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10811132);
}
}
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(gdjs.randomInRange(1, 6));
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 1);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10812220);
}
}
if (isConditionTrue_0) {
gdjs.HomeCode.GDCloud1Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.HomeCode.mapOfGDgdjs_9546HomeCode_9546GDCloud1Objects2Objects, -200, 50, "");
}
{for(var i = 0, len = gdjs.HomeCode.GDCloud1Objects2.length ;i < len;++i) {
    gdjs.HomeCode.GDCloud1Objects2[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.HomeCode.GDCloud1Objects2.length ;i < len;++i) {
    gdjs.HomeCode.GDCloud1Objects2[i].setY(50);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 2);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10813396);
}
}
if (isConditionTrue_0) {
gdjs.HomeCode.GDCloud1Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.HomeCode.mapOfGDgdjs_9546HomeCode_9546GDCloud1Objects2Objects, -200, 100, "");
}
{for(var i = 0, len = gdjs.HomeCode.GDCloud1Objects2.length ;i < len;++i) {
    gdjs.HomeCode.GDCloud1Objects2[i].setZOrder(-10);
}
}
{for(var i = 0, len = gdjs.HomeCode.GDCloud1Objects2.length ;i < len;++i) {
    gdjs.HomeCode.GDCloud1Objects2[i].setY(100);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 3);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10814268);
}
}
if (isConditionTrue_0) {
gdjs.HomeCode.GDCloud2Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.HomeCode.mapOfGDgdjs_9546HomeCode_9546GDCloud2Objects2Objects, -200, 150, "");
}
{for(var i = 0, len = gdjs.HomeCode.GDCloud2Objects2.length ;i < len;++i) {
    gdjs.HomeCode.GDCloud2Objects2[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.HomeCode.GDCloud2Objects2.length ;i < len;++i) {
    gdjs.HomeCode.GDCloud2Objects2[i].setY(150);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 4);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10815724);
}
}
if (isConditionTrue_0) {
gdjs.HomeCode.GDCloud2Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.HomeCode.mapOfGDgdjs_9546HomeCode_9546GDCloud2Objects2Objects, -200, 200, "");
}
{for(var i = 0, len = gdjs.HomeCode.GDCloud2Objects2.length ;i < len;++i) {
    gdjs.HomeCode.GDCloud2Objects2[i].setZOrder(-10);
}
}
{for(var i = 0, len = gdjs.HomeCode.GDCloud2Objects2.length ;i < len;++i) {
    gdjs.HomeCode.GDCloud2Objects2[i].setY(200);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 5);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10816620);
}
}
if (isConditionTrue_0) {
gdjs.HomeCode.GDCloud3Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.HomeCode.mapOfGDgdjs_9546HomeCode_9546GDCloud3Objects2Objects, -200, 115, "");
}
{for(var i = 0, len = gdjs.HomeCode.GDCloud3Objects2.length ;i < len;++i) {
    gdjs.HomeCode.GDCloud3Objects2[i].setZOrder(-10);
}
}
{for(var i = 0, len = gdjs.HomeCode.GDCloud3Objects2.length ;i < len;++i) {
    gdjs.HomeCode.GDCloud3Objects2[i].setY(115);
}
}
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(0).getAsNumber() == 6);
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(10818100);
}
}
if (isConditionTrue_0) {
gdjs.HomeCode.GDCloud3Objects2.length = 0;

{gdjs.evtTools.object.createObjectOnScene(runtimeScene, gdjs.HomeCode.mapOfGDgdjs_9546HomeCode_9546GDCloud3Objects2Objects, -200, 165, "");
}
{for(var i = 0, len = gdjs.HomeCode.GDCloud3Objects2.length ;i < len;++i) {
    gdjs.HomeCode.GDCloud3Objects2[i].setZOrder(10);
}
}
{for(var i = 0, len = gdjs.HomeCode.GDCloud3Objects2.length ;i < len;++i) {
    gdjs.HomeCode.GDCloud3Objects2[i].setY(165);
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cloud1"), gdjs.HomeCode.GDCloud1Objects2);
gdjs.copyArray(runtimeScene.getObjects("Cloud2"), gdjs.HomeCode.GDCloud2Objects2);
gdjs.copyArray(runtimeScene.getObjects("Cloud3"), gdjs.HomeCode.GDCloud3Objects2);

gdjs.HomeCode.forEachTotalCount3 = 0;
gdjs.HomeCode.forEachObjects3.length = 0;
gdjs.HomeCode.forEachCount0_3 = gdjs.HomeCode.GDCloud1Objects2.length;
gdjs.HomeCode.forEachTotalCount3 += gdjs.HomeCode.forEachCount0_3;
gdjs.HomeCode.forEachObjects3.push.apply(gdjs.HomeCode.forEachObjects3,gdjs.HomeCode.GDCloud1Objects2);
gdjs.HomeCode.forEachCount1_3 = gdjs.HomeCode.GDCloud2Objects2.length;
gdjs.HomeCode.forEachTotalCount3 += gdjs.HomeCode.forEachCount1_3;
gdjs.HomeCode.forEachObjects3.push.apply(gdjs.HomeCode.forEachObjects3,gdjs.HomeCode.GDCloud2Objects2);
gdjs.HomeCode.forEachCount2_3 = gdjs.HomeCode.GDCloud3Objects2.length;
gdjs.HomeCode.forEachTotalCount3 += gdjs.HomeCode.forEachCount2_3;
gdjs.HomeCode.forEachObjects3.push.apply(gdjs.HomeCode.forEachObjects3,gdjs.HomeCode.GDCloud3Objects2);
for (gdjs.HomeCode.forEachIndex3 = 0;gdjs.HomeCode.forEachIndex3 < gdjs.HomeCode.forEachTotalCount3;++gdjs.HomeCode.forEachIndex3) {
gdjs.HomeCode.GDCloud1Objects3.length = 0;

gdjs.HomeCode.GDCloud2Objects3.length = 0;

gdjs.HomeCode.GDCloud3Objects3.length = 0;


if (gdjs.HomeCode.forEachIndex3 < gdjs.HomeCode.forEachCount0_3) {
    gdjs.HomeCode.GDCloud1Objects3.push(gdjs.HomeCode.forEachObjects3[gdjs.HomeCode.forEachIndex3]);
}
else if (gdjs.HomeCode.forEachIndex3 < gdjs.HomeCode.forEachCount0_3+gdjs.HomeCode.forEachCount1_3) {
    gdjs.HomeCode.GDCloud2Objects3.push(gdjs.HomeCode.forEachObjects3[gdjs.HomeCode.forEachIndex3]);
}
else if (gdjs.HomeCode.forEachIndex3 < gdjs.HomeCode.forEachCount0_3+gdjs.HomeCode.forEachCount1_3+gdjs.HomeCode.forEachCount2_3) {
    gdjs.HomeCode.GDCloud3Objects3.push(gdjs.HomeCode.forEachObjects3[gdjs.HomeCode.forEachIndex3]);
}
let isConditionTrue_0 = false;
if (true) {
{for(var i = 0, len = gdjs.HomeCode.GDCloud1Objects3.length ;i < len;++i) {
    gdjs.HomeCode.GDCloud1Objects3[i].addPolarForce(0, 55, 0);
}
for(var i = 0, len = gdjs.HomeCode.GDCloud2Objects3.length ;i < len;++i) {
    gdjs.HomeCode.GDCloud2Objects3[i].addPolarForce(0, 55, 0);
}
for(var i = 0, len = gdjs.HomeCode.GDCloud3Objects3.length ;i < len;++i) {
    gdjs.HomeCode.GDCloud3Objects3[i].addPolarForce(0, 55, 0);
}
}
}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Cloud1"), gdjs.HomeCode.GDCloud1Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cloud2"), gdjs.HomeCode.GDCloud2Objects1);
gdjs.copyArray(runtimeScene.getObjects("Cloud3"), gdjs.HomeCode.GDCloud3Objects1);

gdjs.HomeCode.forEachTotalCount2 = 0;
gdjs.HomeCode.forEachObjects2.length = 0;
gdjs.HomeCode.forEachCount0_2 = gdjs.HomeCode.GDCloud1Objects1.length;
gdjs.HomeCode.forEachTotalCount2 += gdjs.HomeCode.forEachCount0_2;
gdjs.HomeCode.forEachObjects2.push.apply(gdjs.HomeCode.forEachObjects2,gdjs.HomeCode.GDCloud1Objects1);
gdjs.HomeCode.forEachCount1_2 = gdjs.HomeCode.GDCloud2Objects1.length;
gdjs.HomeCode.forEachTotalCount2 += gdjs.HomeCode.forEachCount1_2;
gdjs.HomeCode.forEachObjects2.push.apply(gdjs.HomeCode.forEachObjects2,gdjs.HomeCode.GDCloud2Objects1);
gdjs.HomeCode.forEachCount2_2 = gdjs.HomeCode.GDCloud3Objects1.length;
gdjs.HomeCode.forEachTotalCount2 += gdjs.HomeCode.forEachCount2_2;
gdjs.HomeCode.forEachObjects2.push.apply(gdjs.HomeCode.forEachObjects2,gdjs.HomeCode.GDCloud3Objects1);
for (gdjs.HomeCode.forEachIndex2 = 0;gdjs.HomeCode.forEachIndex2 < gdjs.HomeCode.forEachTotalCount2;++gdjs.HomeCode.forEachIndex2) {
gdjs.HomeCode.GDCloud1Objects2.length = 0;

gdjs.HomeCode.GDCloud2Objects2.length = 0;

gdjs.HomeCode.GDCloud3Objects2.length = 0;


if (gdjs.HomeCode.forEachIndex2 < gdjs.HomeCode.forEachCount0_2) {
    gdjs.HomeCode.GDCloud1Objects2.push(gdjs.HomeCode.forEachObjects2[gdjs.HomeCode.forEachIndex2]);
}
else if (gdjs.HomeCode.forEachIndex2 < gdjs.HomeCode.forEachCount0_2+gdjs.HomeCode.forEachCount1_2) {
    gdjs.HomeCode.GDCloud2Objects2.push(gdjs.HomeCode.forEachObjects2[gdjs.HomeCode.forEachIndex2]);
}
else if (gdjs.HomeCode.forEachIndex2 < gdjs.HomeCode.forEachCount0_2+gdjs.HomeCode.forEachCount1_2+gdjs.HomeCode.forEachCount2_2) {
    gdjs.HomeCode.GDCloud3Objects2.push(gdjs.HomeCode.forEachObjects2[gdjs.HomeCode.forEachIndex2]);
}
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDCloud1Objects2.length;i<l;++i) {
    if ( gdjs.HomeCode.GDCloud1Objects2[i].getX() > 2500 ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDCloud1Objects2[k] = gdjs.HomeCode.GDCloud1Objects2[i];
        ++k;
    }
}
gdjs.HomeCode.GDCloud1Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDCloud2Objects2.length;i<l;++i) {
    if ( gdjs.HomeCode.GDCloud2Objects2[i].getX() > 2500 ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDCloud2Objects2[k] = gdjs.HomeCode.GDCloud2Objects2[i];
        ++k;
    }
}
gdjs.HomeCode.GDCloud2Objects2.length = k;
for (var i = 0, k = 0, l = gdjs.HomeCode.GDCloud3Objects2.length;i<l;++i) {
    if ( gdjs.HomeCode.GDCloud3Objects2[i].getX() > 2500 ) {
        isConditionTrue_0 = true;
        gdjs.HomeCode.GDCloud3Objects2[k] = gdjs.HomeCode.GDCloud3Objects2[i];
        ++k;
    }
}
gdjs.HomeCode.GDCloud3Objects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.HomeCode.GDCloud1Objects2.length ;i < len;++i) {
    gdjs.HomeCode.GDCloud1Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.HomeCode.GDCloud2Objects2.length ;i < len;++i) {
    gdjs.HomeCode.GDCloud2Objects2[i].deleteFromScene(runtimeScene);
}
for(var i = 0, len = gdjs.HomeCode.GDCloud3Objects2.length ;i < len;++i) {
    gdjs.HomeCode.GDCloud3Objects2[i].deleteFromScene(runtimeScene);
}
}
}
}

}


};gdjs.HomeCode.eventsList7 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Background"), gdjs.HomeCode.GDBackgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("ItchButton"), gdjs.HomeCode.GDItchButtonObjects1);
gdjs.copyArray(runtimeScene.getObjects("Logo"), gdjs.HomeCode.GDLogoObjects1);
{for(var i = 0, len = gdjs.HomeCode.GDLogoObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDLogoObjects1[i].setX((( gdjs.HomeCode.GDBackgroundObjects1.length === 0 ) ? 0 :gdjs.HomeCode.GDBackgroundObjects1[0].getPointX("")));
}
}
{for(var i = 0, len = gdjs.HomeCode.GDItchButtonObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDItchButtonObjects1[i].setX((( gdjs.HomeCode.GDBackgroundObjects1.length === 0 ) ? 0 :gdjs.HomeCode.GDBackgroundObjects1[0].getPointX("")));
}
}
{gdjs.evtTools.camera.setCameraX(runtimeScene, (( gdjs.HomeCode.GDBackgroundObjects1.length === 0 ) ? 0 :gdjs.HomeCode.GDBackgroundObjects1[0].getPointX("")), "", 0);
}
{for(var i = 0, len = gdjs.HomeCode.GDBackgroundObjects1.length ;i < len;++i) {
    gdjs.HomeCode.GDBackgroundObjects1[i].getBehavior("Scale").setScale(1.15);
}
}
{/* Unknown object - skipped. */}
}

}


{


gdjs.HomeCode.eventsList0(runtimeScene);
}


{


gdjs.HomeCode.eventsList3(runtimeScene);
}


{


gdjs.HomeCode.eventsList6(runtimeScene);
}


};

gdjs.HomeCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.HomeCode.GDBackgroundObjects1.length = 0;
gdjs.HomeCode.GDBackgroundObjects2.length = 0;
gdjs.HomeCode.GDBackgroundObjects3.length = 0;
gdjs.HomeCode.GDLogoObjects1.length = 0;
gdjs.HomeCode.GDLogoObjects2.length = 0;
gdjs.HomeCode.GDLogoObjects3.length = 0;
gdjs.HomeCode.GDItchButtonObjects1.length = 0;
gdjs.HomeCode.GDItchButtonObjects2.length = 0;
gdjs.HomeCode.GDItchButtonObjects3.length = 0;
gdjs.HomeCode.GDCloud1Objects1.length = 0;
gdjs.HomeCode.GDCloud1Objects2.length = 0;
gdjs.HomeCode.GDCloud1Objects3.length = 0;
gdjs.HomeCode.GDCloud2Objects1.length = 0;
gdjs.HomeCode.GDCloud2Objects2.length = 0;
gdjs.HomeCode.GDCloud2Objects3.length = 0;
gdjs.HomeCode.GDCloud3Objects1.length = 0;
gdjs.HomeCode.GDCloud3Objects2.length = 0;
gdjs.HomeCode.GDCloud3Objects3.length = 0;

gdjs.HomeCode.eventsList7(runtimeScene);
gdjs.HomeCode.GDBackgroundObjects1.length = 0;
gdjs.HomeCode.GDBackgroundObjects2.length = 0;
gdjs.HomeCode.GDBackgroundObjects3.length = 0;
gdjs.HomeCode.GDLogoObjects1.length = 0;
gdjs.HomeCode.GDLogoObjects2.length = 0;
gdjs.HomeCode.GDLogoObjects3.length = 0;
gdjs.HomeCode.GDItchButtonObjects1.length = 0;
gdjs.HomeCode.GDItchButtonObjects2.length = 0;
gdjs.HomeCode.GDItchButtonObjects3.length = 0;
gdjs.HomeCode.GDCloud1Objects1.length = 0;
gdjs.HomeCode.GDCloud1Objects2.length = 0;
gdjs.HomeCode.GDCloud1Objects3.length = 0;
gdjs.HomeCode.GDCloud2Objects1.length = 0;
gdjs.HomeCode.GDCloud2Objects2.length = 0;
gdjs.HomeCode.GDCloud2Objects3.length = 0;
gdjs.HomeCode.GDCloud3Objects1.length = 0;
gdjs.HomeCode.GDCloud3Objects2.length = 0;
gdjs.HomeCode.GDCloud3Objects3.length = 0;


return;

}

gdjs['HomeCode'] = gdjs.HomeCode;
