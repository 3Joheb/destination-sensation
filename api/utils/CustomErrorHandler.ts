/**
 * Class representing a custom error handler.
 */
export default class CustomErrorHandler {
    /**
     * Object to store error information.
     */
    private errorObj: { code?: number, message?: string, data?: {}, error?: string } = {};

    /**
     * Creates an instance of CustomErrorHandler.
     */
    constructor() {
        // Initialize error object
        this.errorObj = {};
    }

    /**
     * Sets a custom error object.
     * @param {object} error - The custom error object to set.
     * @throws {Error} Throws an error.
     */
    public setCustomError(error: { code?: number, message?: string, data?: {}, error?: string }): void {
        this.errorObj = error;
        throw new Error();
    }

    /**
     * Checks if the fetch response is okay.
     * @param {Response} response - The fetch response object.
     * @throws {Error} Throws an error if the response is not ok.
     */
    public checkResponse(response: Response): void {
        if (!response.ok) {
            this.errorObj = { code: response.status, message: response.statusText };
            throw new Error();
        }
    }

    /**
     * Ensures that specified keys exist on an object.
     * @param {object} obj - The object to check.
     * @param {string[]} keys - The keys to check.
     * @throws {Error} Throws an error if any of the keys do not exist in the object.
     */
    public checkKeys(obj: {}, keys: string[]): void {
        const undefinedKeys = keys.filter((key) => !(key in obj));

        if (undefinedKeys.length >= 1) {
            this.errorObj = {
                message: "Keys not found",
                data: {
                    all_keys_found: false,
                    keys: undefinedKeys
                }
            };

            throw new Error();
        }
    }

    /**
     * Logs an error message along with the error object.
     * @param {string} message - The error message to log.
     * @param {string} [error] - Pass "try...catch error" to include stack & scope errors.
     */
    public logError(message: string, error?: string): void {
        this.errorObj.error = error;
        console.error(message, this.errorObj);
    }
}
