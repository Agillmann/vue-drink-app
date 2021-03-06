export default {
  getFromLocalStorage(name: string): any {
    const savedLocal: any | null = localStorage.getItem(name);
    return savedLocal ? JSON.parse(savedLocal) : [];
  },
  setToLocalStorage(data: any, name: string) {
    return localStorage.setItem(
      name,
      JSON.stringify(
        data,
      ),
    );
  },
};
