import { createContext,useState } from "react";
 const EContext = createContext()

    
 // eslint-disable-next-line react/prop-types
 export const EProvider = ({children}) => {
    const [open, setOpen] = useState(false)
    const handleOpen = () => {
        if(open === false){
            setOpen(true)
        }}
    const handleClose = () => {
        if(open === true){
            setOpen(false)
        }
    }
    return (
        <EContext.Provider value={{ handleOpen, open,handleClose }}>
            {children}
        </EContext.Provider>   
    )
}

export default EContext