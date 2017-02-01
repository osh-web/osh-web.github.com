// @flow
export const RESIZE = 'RESIZE';
export const SPEAKER_DETAIL = 'SPEAKE_DETAIL';

export function resize(width: number, height: number) {
    return {
        type: RESIZE,
        value: { width, height }
    }
}

export function speakerDetail(speaker: string) {
  return {
    type: SPEAKER_DETAIL,
    value: speaker
  }
}
