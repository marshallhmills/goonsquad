const posts = []; // Temporary in-memory storage (replace with a database for production)

exports.handler = async () => {
    return {
        statusCode: 200,
        body: JSON.stringify(posts), // Return all posts
    };
};
