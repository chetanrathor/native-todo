export const getApiBaseUrl = ()=>import.meta.env.VITE_APP_API_BASE_URL ?? ''
export const getNodeEnv = import.meta.env.NODE_ENV ?? 'development'
