const posts = []; // Temporary in-memory storage (replace with a database for production)

exports.handler = async (event) => {
    if (event.httpMethod === 'POST') {
        const post = JSON.parse(event.body);
        posts.push(post); // Save post to the array
        return {
            statusCode: 200,
            body: JSON.stringify({ message: 'Post saved successfully!' }),
        };
    }
    return { statusCode: 405, body: 'Method Not Allowed' };
};
