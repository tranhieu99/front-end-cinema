const isActive = (history,path,activeClass, noneActiveClass) =>{
    if(history.location.pathname === path){
        return activeClass

    }
    else return noneActiveClass
}
export {
    isActive
}