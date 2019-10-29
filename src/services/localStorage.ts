export default {
  getFromLocalStorage(name: string): any {
    const savedLocal: string | null = localStorage.getItem(name);
    return savedLocal ? JSON.parse(savedLocal) : [];
  },
  setToLocalStorage(data: any, name: string) {
    localStorage.setItem(
      name,
      JSON.stringify(
        data,
      ),
    );
  },
};
