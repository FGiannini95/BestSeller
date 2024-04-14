export const getLocalStorage = (item: string) => {
  return localStorage.getItem(item)
}

export const saveLocalStorage = (item: string, data: string) => {
  localStorage.setItem(item, data)
  return true
}

export const delLocalStorage = (item: string) => {
  localStorage.removeItem(item)
  return true
}