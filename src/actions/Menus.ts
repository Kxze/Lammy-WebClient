export const setLibraryMenu = (menu: string): any => ({
    menu,
    type: "SET_LIBRARY_MENU",
})

export const setMenu = (menu: string) => ({
    menu,
    type: "SET_MENU",
})

export const setLoading = (isLoading: boolean) => ({
    type: "SET_LOADING",
    isLoading,
})
