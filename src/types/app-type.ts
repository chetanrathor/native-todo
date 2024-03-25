import { store } from "stores/app.store"

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export type ApiCallOptions<P = {}, D = {}> = {
    endpoint: string,
    params?: P,
    data?: D
}

