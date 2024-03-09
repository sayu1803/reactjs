function customRender(reactElement,container){
    /*const domElement= document.createElement(reactElement.type)
    domElement.innerHTML= reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)

    container.appendChild(domElement)
    */
    //version2 
    const domElemenet=document.createElement(reactElement.type)
    domElemenet.innerHTML=reactElement.children
    for (const prop in reactElement.props) {
        if (prop==='children')continue;
        domElemenet.setAttribute(prop,reactElement.props[prop])
    }
    container.appendChild(domElemenet)

}


const reactElement ={
    type:'a',
    props:{
        href:"http://google.com",
        target: "_blank"
    },
    children:'click me to visit google'
}
const mainContainer= document.querySelector( '#root' );

customRender(reactElement,mainContainer);