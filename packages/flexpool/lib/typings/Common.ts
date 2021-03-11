/**
 * @private
 * @hidden
 */
export interface BaseResponse {
    result: any;
    error: { code: number; message: string } | string | null;
}
