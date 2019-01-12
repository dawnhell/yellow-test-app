export const isAuthenticated = () => !!localStorage.getItem('Token') && (localStorage.getItem('Expires') > new Date().getTime() / 1000);
