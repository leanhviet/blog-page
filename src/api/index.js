// Libs
import { create } from 'apisauce'

// Constants
import { USER_KEY } from '../constants/localStorage'

// Utils
import { getStorage } from '../utils/storage'

const dataStorage = getStorage(USER_KEY) || null
let headers = {}

if (dataStorage) {
  headers = {
    Authorization: `Bearer ${dataStorage.Zi.access_token}`,
    Accept: 'application/json',
    'Content-Type': 'application/json',
  }
}

const API = create({
  baseURL: process.env.REACT_APP_API_URL,
  headers,
})

export const getAPI = (url, params = {}) => API.get(url, params)
