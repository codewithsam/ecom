import { create } from "zustand";

type SheetStore = {
    open: boolean;
    setOpen: (openState: boolean) => void;
}

export const useSheetStore = create<SheetStore>((set) => {
    return {
        open: false,
        setOpen: (openState) => {
            set(() => {
                return {
                    open: openState
                }
            })
        }
    }
})