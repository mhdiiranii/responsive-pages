const Router = ({path,children}) => {

    const pathname = window.location.pathname

    if(pathname !== path){
        return null
    }

    return children
}
 
export default Router;