const nodeTypes = {
    //  HTML节点类型
    "HTML":"HTML",
    //  文本类型
    "TEXT":"TEXT",
    //  组件类型
    "COMPONENT":"COMPONENT"
};

const childNumber = {
    //  为空
    "EMPTY":"EMPTY",
    //  单个
    "SINGLE":"SINGLE",
    //  多个
    "MULTIPLE":"MULTIPLE"
};


class Element{
    constructor(tag,props,children){
        this.type=tag;
        this.props=props;
        this.children=children;
    }
}

function createElement(tag, props, children) {
    return new Element(tag, props, children);
}

// 先为每个节点判断添加类型
// 然后为每个子节点添加数量
// 遍历其所有子节点

function returns (vDom){
    if(typeof vDom.tag==="string" ){
        // flag:"div" 代表普通html
        vDom.flag=nodeTypes.HTML
    }else if (typeof vDom.tag ==="function"){
        vDom.flag=nodeTypes.COMPONENT
    }else {
        //一般 vDom.flag：null 就是txt
        vDom.flag=nodeTypes.TEXT
    }

    if (vDom.children===null){
        vDom.childrenNumber=childNumber.EMPTY;
    }else if (Array.isArray(vDom.children)){
        const lenght = vDom.children.length
        if (lenght === 0) {
            vDom.childrenNumber = childNumber.EMPTY
        } else {
            vDom.childrenNumber = childNumber.MULTIPLE
            returns(vDom.children)
        }
    }else {
        vDom.childrenNumber = childNumber.SINGLE
        vDom.children = document.createTextNode(vDom.children + '')
    }
}


// function render(vDom) {
//     let flagNodeTypes;
//
//     if (typeof vDom === "string") {
//         vDom.
//         return document.createTextNode(vDom);
//     }
//     const el = document.createElement(vDom.type);
//     setAttrs(el, vDom.props);
//     vDom.children.forEach((child) => {
//         el.appendChild(render(child));
//     });
//     return el;
// }
//
// function setAttrs(el, props) {
//     Object.keys(props).forEach((key) => {
//         el.setAttribute(key, props[key]);
//     });
// }

export { Element, createElement, returns };