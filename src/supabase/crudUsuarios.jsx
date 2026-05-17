import { supabase, ObtenerIdAuthSupabase } from "../index";
export const InsertarUsuarios = async (p) => {
  try {
    const { data } = await supabase.from("usuarios").upsert([p], {
      onConflict: "idauth_supabase",
    }).select();
    return data;
  } catch (error) {}
};
export const MostrarUsuarios = async () => {
  try {
    const idAuthSupabase = await ObtenerIdAuthSupabase();
    if (!idAuthSupabase) {
      return null;
    }
    const { error, data } = await supabase
      .from("usuarios")
      .select("*")
      .eq("idauth_supabase", idAuthSupabase);
    if (error) {
      throw error;
    }
    return Array.isArray(data) ? data[0] ?? null : data ?? null;
  } catch (error) {
    const msg =
      error?.message ||
      error?.error_description ||
      error?.details ||
      String(error);
    alert(`MostrarUsuarios: ${msg}`);
    throw error;
  }
};

export async function EditarTemaMonedaUser(p) {
  try {
    const {error} = await supabase.from("usuarios").update(p).eq("idauth_supabase", p.idAuthSupabase);
    if(error){
      alert(`error al editar usuario: ${error.message || String(error)}`);
      
    }
  } catch (error) {
    alert(`EditarTemaMonedaUser: ${error.message || String(error)}`);
  }
}