const storage = {  
    saveStorage: (token) => {
        localStorage.setItem('token', token);
    },

    loadStorage: () => {
        return localStorage.getItem('token');
    },

    clearStorage: () => {
        localStorage.setItem('token', '');
    }

};

export default storage;