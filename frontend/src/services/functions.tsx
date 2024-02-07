export const setToLocalStorage = (data) => localStorage.setItem('userData', JSON.stringify(data))
export const getFromLocalStorage = (name) => localStorage.getItem(name)
