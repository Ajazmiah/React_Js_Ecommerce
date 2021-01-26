import * as actionTypes from './actionTypes'

export const displayImage = (url)=>{
  return{
    type:actionTypes.MAIN_IMAGE_DISPLAY,
    imgURL:url
  }
}
