import { create } from "zustand";

type Product = {
    title?: string;
    description?: string;
    quantity?: number;
    id?: number;
}

type CartStore = {
    items: Array<Product>;
    addToCart: (item: Product) => void;
    getCart: () => void;
    count: number;
}

export const useCartStore = create<CartStore>((set) => {
    return {
        items: [],
        addToCart: (item) => {
            set((state) => {
                const index = state.items.findIndex(x => x.id === item.id);
                if (index === -1) {
                    item.quantity = 1;
                    return {
                        items: [...state.items, item],
                        count: state.count + 1
                    }
                }
                let quantity = state.items[index]?.quantity || 1;
                (state.items[index] as any).quantity = quantity++;
                return {
                    items: [...state.items.slice(0, index), { ...state.items[index], quantity: quantity++ }, ...state.items.slice(index + 1)],
                    count: state.count + 1
                }
            })
        },
        count: 0,
        getCart: () => {
            set((state) => {
                console.log(state);
                return {
                    count: state.count++
                }
            })
        }
    }
});