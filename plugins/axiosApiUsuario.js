import axios from 'axios'

export default defineNuxtPlugin((nuxtApp) => {
    const defaultUrl = { value: '' }
    
    const config = useRuntimeConfig()
    console.log('config.public', config.public)

    config.public.TIPO_PROYECTO === 'prod' ? 
    defaultUrl.value = '' : ''
    
    config.public.TIPO_PROYECTO === 'dev' && process.env.NODE_ENV === 'production' ? 
    defaultUrl.value = 'https://southamerica-east1-vilab-dev.cloudfunctions.net/service_usuario' : ''
    
    config.public.TIPO_PROYECTO === 'dev' && process.env.NODE_ENV === 'development' ? 
    defaultUrl.value = 'http://127.0.0.1:7000/vilab-dev/southamerica-east1/service_usuario' : ''

    config.public.TIPO_PROYECTO === 'test' ? 
    defaultUrl.value = 'https://southamerica-east1-vilab-test.cloudfunctions.net/service_usuario' : ''

    const apiUsuario = axios.create({ baseURL: defaultUrl.value })
    // nuxtApp.vueApp.provide('apiUsuario', apiUsuario)
    nuxtApp.provide('apiUsuario', apiUsuario)
})