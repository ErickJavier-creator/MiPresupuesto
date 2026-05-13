import { supabase } from "./supabase.config";

export const InsertarUsuario = async (p) => {
    try {
      const {data} =  await supabase.from("usuarios").insert(p).select();
        return data;
    } catch (error) {

    }
}