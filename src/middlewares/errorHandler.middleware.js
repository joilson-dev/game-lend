export default function errorHandler(err, req, res, next) {

    let statusCode;

    switch (err.type) {
        case 'validationError':
            statusCode = 422;
            break;
        case 'conflict':
            statusCode = 409;
            break;
        case 'notFound':
            statusCode = 404;
            break;
        case 'unprocessableEntity':
            statusCode = 422;
            break;
        default:
            statusCode = 500;
    }
    // console.log(err)
    res.status(statusCode).send({ ERROR: err.message });
};