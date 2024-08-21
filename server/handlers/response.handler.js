const responseWithData = (res, statusCode, data) => {
    res.status(statusCode).json(data);
};

const error = (res) => responseWithData(res, 500, { 
    status: 500,
    message: 'Internal Server Error' 
});

const badRequest = (res, message) => responseWithData(res, 400, {
    status: 400,
    message
});

const unauthorized = (res) => responseWithData(res, 401, {
    status: 401,
    message: "Unauthorized"
});

const forbidden = (res) => responseWithData(res, 403, {
    status: 403,
    message: "Forbidden"
});

const notFound = (res) => responseWithData(res, 404, {
    status: 404,
    message: "Not Found"
});

const ok = (res, data) => responseWithData(res, 200, data);

const created = (res, data) => responseWithData(res, 201, data);

export default {
    error,
    badRequest,
    unauthorized,
    forbidden,
    notFound,
    ok,
    created,
};
