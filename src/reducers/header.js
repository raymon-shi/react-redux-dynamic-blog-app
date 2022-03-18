import { HEADER_TYPES } from '../actions'

const default_state = {
  image: '',
  description: '',
}

const header = (state = default_state, action) => {
  const { type, image, description } = action
  switch (type) {
    case HEADER_TYPES.EDITING:
      return { image, description }
    default:
      return state
  }
}

export default header
