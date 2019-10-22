/* Helper function for generating ids incrementally */

function _generateId(): () => number {
    let count = 0;
    return function innerFunction(): number {
        return count++;
    }
}

export const generateId = _generateId()