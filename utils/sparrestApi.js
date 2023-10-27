
export const sparrest = () => {
  const baseUrl = 'http://localhost:8000/';

  const get = async (endpoint) => {
    const url = baseUrl + endpoint;

    try {
      const response = await fetch(url);
      let data;
      if (response.ok) {
        data = await response.json();
        return data;
      } else {
        const message = data.message || 'Something went wrong.';
        throw new Error(message);
      }
    } catch(error) {      
      if (error.message) {
        throw error.message;
      } else {
        throw error;
      }
    }
  }

  const loginUser = async (endpoint, userData) => {
    const url = baseUrl + endpoint;

    let response;
    try {
      response = await fetch(url, {
        method: "POST",
        body: JSON.stringify(userData),
        headers: {
          'Content-type': 'application/json'
        }
      });
      const data = await response.json();
    
      if (!response.ok) {
        throw new Error(data.message);
      }
      if (response.ok) {
        return data.accessToken;
      }
      
    } catch (error) {
      if (error.message) {
        throw error.message;
      } else {
        throw error;
      }
    }
  }

  const signupUser = async (endpoint, userData) => {
    const url = baseUrl + endpoint;

    try {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(userData),
        headers: {
          'content-type': 'application/json'
        }
      });
      
      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.massage);
      }
    } catch (error) {
      if (error.message) {
        throw error.message;
      } else {
        throw error;
      }
    }
  }

  const postAd = async (endpoint, ad) => {
    const url = baseUrl + endpoint;
    const token = localStorage.getItem('token');

    let response;
    try {
      response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(ad),
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });
  
      if (!response.ok) {
        const data = await response.json();
        const message = data.message || "Sorry, ad couldn't be created.";
        throw new Error(message);
      }
  
    } catch (error) {
      if (error.message) {
        throw error.message;
      } else {
        throw error;
      }
    }
  }  

  const removeAd = async (endpoint) => {
    const url = baseUrl + endpoint;
    const token = localStorage.getItem('token');

    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          'Content-type': 'application/json',
          'Authorization': `Bearer ${token}`
        }
      });

      if (!response.ok) {
        const data = await response.json();
        const message = data.message || "Sorry, ad couldn't be deleted";
        throw new Error(message);
      }
    } catch (error) {
      if (error.message) {
        throw error.message;
      } else {
        throw error;
      }
    }
  }

  return {
    get,
    loginUser,
    signupUser,
    postAd,
    removeAd
  }
}