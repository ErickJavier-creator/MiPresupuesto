import { supabase } from "../index";
export const InsertarUsuarios = async (p) => {
  try {
    const { data } = await supabase.from("usuarios").upsert([p], {
      onConflict: "idauth_supabase",
    }).select();
    return data;
  } catch (error) {}
};