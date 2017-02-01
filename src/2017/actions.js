// @flow
export const RESIZE = 'RESIZE';

export function resize(width: number, height: number) {
    return {
        type: RESIZE,
        value: { width, height }
    }
}
