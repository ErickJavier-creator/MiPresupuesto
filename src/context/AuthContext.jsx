import {createContext, useContext, useEffect, useState} from "react"
import {supabase, insertarUsuarios} from "../index";
const AuthContext = createContext();
export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState([]);
    useEffect(()=>{
        const {data: authListener} = supabase.auth.onAuthStateChange(
            async (event, session) =>{
                if(session==null){
                    setUser(null)
                }else {
                    setUser(session?.user.user_metadata)
                 await persistirUsuarioSesion(
                   session?.user.user_metadata,
                   session?.user.id,
                 );
                    console.log("session: ",session?.user.user_metadata)
                    console.log("event:", event)
                }
            }
        )
        return () => {
            authListener.subscription;
        }
    }, []);
    const persistirUsuarioSesion = async (dataProvider, idAuthSupabase) => {
        const p = {
            nombres: dataProvider.name,
            foto: dataProvider.picture,
            idauth_supabase: idAuthSupabase,
        };
        await insertarUsuarios(p);
    };
    return (
      <AuthContext.Provider value={{ user }}>{children}</AuthContext.Provider>
    );

}

export const UserAuth=() => {
    return useContext(AuthContext)
}