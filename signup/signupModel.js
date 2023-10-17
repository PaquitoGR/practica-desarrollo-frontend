
export const createUser = async (fullName, email, password) => {
  const url = 'http://localhost:8000/auth/register';

  const body = {
    fullName: fullName,
    email: email,
    password: password
  };

  try {
    const response = await fetch(url, {
      method: 'POST',
      body: JSON.stringify(body),
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

};