/**
 * Created by Seven on 2019/5/22.
 * project: Autumn
 * email: fighting20xx@126.com
 */


export function createStyle(styleId, cssText) {
    /* istanbul ignore if */
    if (isServer() || document.getElementById(styleId)) {
        return;
    }

    const head = document.head || doc.getElementsByTagName('head')[0];
    const style = document.createElement('style');

    style.id = styleId;
    style.type = 'text/css';

    /* istanbul ignore if */
    if (style.styleSheet) {
        style.styleSheet.cssText = cssText;
    } else {
        style.appendChild(document.createTextNode(cssText));
    }

    head.appendChild(style);
}



// 创建看板小车动画
export function createAnimate() {
    let allStep = [
        {left:580, top:185, time:0.1},
        {left:720, top:241, time:1},
        {left:772, top:223, time:1},
        {left:873, top:258, time:3},
        {left:827, top:285, time:1},
        {left:1245, top:449, time:4},
        {left:1103, top:558, time:2},
        {left:1179, top:566, time:3},
        {left:1236, top:519, time:1},
        {left:1203, top:486, time:1},
        {left:1345, top:373, time:1},
        {left:1400, top:385, time:2},
        {left:1339, top:462, time:1},
        {left:1471, top:548, time:4},
        {left:1660, top:631, time:1},
        {left:1599, top:710, time:1},
    ];

    let keyFrames =` @keyframes littleCar{ `;

    let len = 0;
    allStep.forEach(function (step) {  len = len + step.time; });

    let process = 0;
    allStep.forEach(function (step,index) {
        process = process + step.time;
        let current = (process)/len * 100 +'%';
        keyFrames = keyFrames+`${current}{ left:${step.left}px; top:${step.top}px; } `;
    });
    keyFrames = keyFrames+ `}`;

    createStyle('littleCar-style', keyFrames);
}




// create slide mode style
export function createSildeModeStyle() {
    const cssText = `
    @-webkit-keyframes loading-rotate {
      to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn);
      }
    }

    @keyframes loading-rotate {
      to {
        -webkit-transform: rotate(1turn);
        transform: rotate(1turn);
      }
    }

    @-webkit-keyframes loading-wipe {
      0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -40px;
      }
      to {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -120px;
      }
    }

    @keyframes loading-wipe {
      0% {
        stroke-dasharray: 1, 200;
        stroke-dashoffset: 0;
      }
      50% {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -40px;
      }
      to {
        stroke-dasharray: 90, 150;
        stroke-dashoffset: -120px;
      }
    }  
  `;

    createStyle('vuescroll-silde-mode-style', cssText);
}
