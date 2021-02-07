import api from './axiosConfig'
import apiUrl from '../constants/apiUrl'

const postNewMovementFile = async (data) => {
  try {
    const response = await api({
      method: 'POST',
      url: apiUrl.apis[0],
      data,
    })

    return response.data
  } catch (error) {
    throw error
  }
}

export default {
  postNewMovementFile,
}
