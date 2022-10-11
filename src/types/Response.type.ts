export type Response<T> = {
    error: string | null;
    data: T | null
}

export type Responses<T> = {
    error: string | null,
    data: T[] | null
}