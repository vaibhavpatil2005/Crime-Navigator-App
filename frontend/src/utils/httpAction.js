import toast from 'react-hot-toast';

const httpAction = async (data) => {
    try {
        const response = await fetch(data.url, {
            method: data.method || 'GET',
            body: data.formData || (data.body ? data.body : null),
            headers: data.formData ? {} : { 'Content-Type': 'application/json' },
            credentials: 'include',
        });

        const result = await response.json();

        if (!response.ok) {
            // If the response is not OK, throw an error with the message from the server
            throw new Error(result.message || 'Something went wrong');
        }

        return result;
    } catch (error) {
        // If an error occurs, log it and show an error toast
        console.error('API Error:', error);
        
        throw error; // Re-throw the error for further handling if needed
    }
};

export default httpAction;