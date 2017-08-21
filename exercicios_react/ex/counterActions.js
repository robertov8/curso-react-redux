export function inc() {
    return { type: 'INC' };
}

export function dec() {
    return { type: 'DEC' };
}

export function stepChange(e) {
    return {
        type: 'STEP_CHANGE',
        payload: e.target.value
    };
}
