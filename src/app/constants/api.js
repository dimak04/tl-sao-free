export const API_CALL = "API_CALL";
export const API_ROOT =
    process.env.NODE_ENV === "production"
        ? process.env.REACT_APP_API_URL
        : "http://localhost:3001";