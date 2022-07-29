import{createContext, useState} from"react"


export const UserContext = createContext();

export const UserProvider =(props) =>{
   
    const [user,setUser] = useState(JSON.parse(localStorage.getItem("user")));

    const storeUser =(dataUser)=>{
        localStorage.setItem("user", JSON.stringify(dataUser))
        setUser(dataUser)
    }


    return(
        <UserContext.Provider value={{user,storeUser}}>
            {props.children}
        </UserContext.Provider>
    )
}