import {create} from "zustand";

type StoreState = {
    balance: number; 
    updateBalance: (newBalance:number) => void;
}

export const useStore = create<StoreState>((set)=>({
    balance: 0,
    updateBalance: (newBalance:number) => set({balance: newBalance})
}))