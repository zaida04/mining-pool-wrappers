/* istanbul ignore file */

import fetch, { Response } from 'node-fetch';
import { BaseResponse } from '../typings/Common';

import APIError from './APIError';
import { HTTPMethods } from './MethodEnum';

export class Rest {
    public constructor(public apiURL: string) {}
    public get<T extends BaseResponse>(path: string): Promise<T> {
        return this.make({ path, method: HTTPMethods.GET }).then(x => (x[1] as T).result);
    }
    public post<T extends BaseResponse, D extends Record<string, any>>(path: string, body: D): Promise<T> {
        return this.make({ path, method: HTTPMethods.POST, body }).then(x => (x[1] as T).result);
    }
    public put<T extends BaseResponse, D extends Record<string, any>>(path: string, body: D): Promise<T> {
        return this.make({ path, method: HTTPMethods.PUT, body }).then(x => (x[1] as T).result);
    }
    public patch<T extends BaseResponse, D extends Record<string, any>>(path: string, body: D): Promise<T> {
        return this.make({ path, method: HTTPMethods.PATCH, body }).then(x => (x[1] as T).result);
    }
    public delete<T extends BaseResponse, D extends Record<string, any>>(path: string, body: D): Promise<T> {
        return this.make({ path, method: HTTPMethods.DELETE, body }).then(x => (x[1] as T).result);
    }

    private async make({
        body,
        path,
        method,
    }: {
        body?: Record<string, any>;
        path: string;
        query?: Record<string, string>;
        method: HTTPMethods;
    }): Promise<[Response, Record<string, any>]> {
        let request;

        try {
            request = await fetch(`${this.apiURL}${path}`, {
                method,
                body: JSON.stringify(body),
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            if (!request.ok) {
                const error_body = await request.json().catch(() => ({}));

                throw new APIError(path, method, request.status, error_body.message ?? error_body ?? '');
            }

            return [request, request.json()];
        } catch (e) {
            throw e;
        }
    }
}
