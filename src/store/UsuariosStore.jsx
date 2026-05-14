import { create } from "zustand";
import { MostrarUsuarios } from "../index";

export const useUsuariosStore = create((set, get) => (
    {
        dataUsuarios: [],
        mostrarUsuarios: async () => {
          const response = await MostrarUsuarios();
            set({dataUsuarios: response});
            return response;
        },

    }
))