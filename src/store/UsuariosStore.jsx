import { create } from "zustand";
import { MostrarUsuarios, EditarTemaMonedaUser } from "../index";

export const useUsuariosStore = create((set, get) => (
    {
        dataUsuarios: [],
        mostrarUsuarios: async () => {
          const response = await MostrarUsuarios();
            set({dataUsuarios: response});
            return response;
        },
        editartemamonedauser: async (p) => {
            await EditarTemaMonedaUser(p);
            const response = await MostrarUsuarios();
            set({ dataUsuarios: response });
            
        },

    }
))