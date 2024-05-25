import axios from 'axios'
import { notify } from 'notiwind'
import type { AxiosResponse, AxiosRequestConfig, AxiosInstance, AxiosError } from 'axios'

export interface ResponseModel<T = any> {
  code?: number
  data: T
}

// set code cofig
export enum HttpCodeConfig {
  success = 200,
  notFound = 404,
  noPermission = 403
}

class HttpRequest {
  service: AxiosInstance

  constructor() {
    this.service = axios.create({
      baseURL: '/api',
      timeout: 5 * 1000
    })

    this.service.interceptors.response.use(
      (response: AxiosResponse<ResponseModel>): AxiosResponse['data'] => {
        const { data } = response
        if (data.code != 0 && data.code != HttpCodeConfig.success) {
          console.log('1231312')
        } else {
          return data
        }
      },
      (error: AxiosError<ResponseModel>) => {
        if (error.response?.status === 401) {
          window.location.href = '/'
          return
        }

        if (error.response?.data) {
          console.log('1231312')
        } else {
          if (error.response?.status === 401) {
            window.location.href = '/'
            return
          }
          console.log('12131231221')
        }
        return Promise.reject(error)
      }
    )
  }

  request<T = any>(config: AxiosRequestConfig): Promise<ResponseModel<T>> {
    /**
     * TODO: execute other methods according to config
     */
    return new Promise((resolve, reject) => {
      try {
        this.service
          .request<ResponseModel<T>>(config)
          .then((res: AxiosResponse['data']) => {
            resolve(res as ResponseModel<T>)
          })
          .catch((err) => {
            // do something
            reject(err)
          })
      } catch (err) {
        return Promise.reject(err)
      }
    })
  }

  get<T = any>(config: AxiosRequestConfig): Promise<ResponseModel<T>> {
    return this.request({ method: 'GET', ...config })
  }
  post<T = any>(config: AxiosRequestConfig): Promise<ResponseModel<T>> {
    return this.request({ method: 'POST', ...config })
  }
  put<T = any>(config: AxiosRequestConfig): Promise<ResponseModel<T>> {
    return this.request({ method: 'PUT', ...config })
  }
  delete<T = any>(config: AxiosRequestConfig): Promise<ResponseModel<T>> {
    return this.request({ method: 'DELETE', ...config })
  }
}

const httpRequest = new HttpRequest()
export default httpRequest
