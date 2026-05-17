import { supabase, ObtenerIdAuthSupabase } from "../index";
import Swal from "sweetalert2";
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
    // if (error) {
    //   // throw error;
    // }
    return Array.isArray(data) ? data[0] ?? null : data ?? null;
  } catch (error) {
    // const msg =
    //   error?.message ||
    //   error?.error_description ||
    //   error?.details ||
    //   String(error);
    // alert(`MostrarUsuarios: ${msg}`);
    // throw error;
  }
};

export async function EditarTemaMonedaUser(p) {
  try {
    const idAuthSupabase = await ObtenerIdAuthSupabase();
    if (!idAuthSupabase) {
      alert("No hay sesión activa");
      return;
    }
    const { tema, moneda, pais } = p;
    const { error } = await supabase
      .from("usuarios")
      .update({ tema, moneda, pais })
      .eq("idauth_supabase", idAuthSupabase);
    if (error) {
      alert(`error al editar usuario: ${error.message || String(error)}`);
      return;
    }
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Datos actualizados",
      showConfirmButton: false,
      timer: 1500,
    });
  } catch (error) {
    alert(`EditarTemaMonedaUser: ${error.message || String(error)}`);
  }
}