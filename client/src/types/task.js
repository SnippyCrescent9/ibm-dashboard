/**
 * @typedef {Object} Task
 * @property {number} id
 * @property {string} title
 */

/**
 * Creates a new Task object
 * @param {string} title
 * @returns {Task}
 */

export function createTask(title) {
    return {
        id: Date.now(),
        title,
        completed: false
    };
}