import axios from 'axios';

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos', {
        headers: {
            Authorization: 'Client-ID sVR0NVsREU7KoeQGgfiVAVkm3zYGk6-hVCzWlPiDHqo',

        },
        params: {
            query: term,
        }
    });
    
    return response.data.results;
};

export default searchImages;