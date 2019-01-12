export const isAuthenticated = () => { console.log(localStorage.getItem('Token')); return !!localStorage.getItem('Token'); }
