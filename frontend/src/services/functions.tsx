export const setToLocalStorage = (data: any) => localStorage.setItem('userData', JSON.stringify(data))
export const getFromLocalStorage = (name: string) => localStorage.getItem(name)
