export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    //change token to null after development 
    //token: 'BQDo0m-ZE2Ptp5iF_MnF6oEF_GpuR8s3OFSmH9XOj7i9IsF8-rJraWcnxeNUeSGeDNR6U6BTBmYphMJLJm0yeBtw6se0FDIIfbZhdAge-KQRb6OgkPtR4FPniDKlliAZPPQJh8hkLlw52dVnDUE7HBC5gCOVqOvMkA'
};

const reducer = (state, action) => {
    console.log(action);
    
    switch (action.type) {
        case 'SET_USER': return {
            ...state,
            user: action.user
        }
        case 'SET_TOKEN': return {
            ...state,
            token: action.token
        }
        case 'SET_PLAYLISTS' : return {
            ...state,
            playlists: action.playlists            
        }
        default: return state;
    }
};

export default reducer;