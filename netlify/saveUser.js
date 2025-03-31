const users = []; // Temporary in-memory storage (replace with a database for production)

exports.handler = async (event) => {
    if (event.httpMethod === 'POST') {
        const user = JSON.parse(event.body);
        users.push(user); // Save user to the array
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'User saved successfully!' }),
        };
    }
    return { statusCode: 405, body: 'Method Not Allowed' };
};
