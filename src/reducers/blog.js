import { BLOG_TYPES } from '../actions'

const default_state = []

const blog = (state = default_state, action) => {
  const {
    type, title, image, description, id,
  } = action
  switch (type) {
    case BLOG_TYPES.ADD_BLOG_POST:
      return [...state, {
        title, image, description, id,
      }]
    case BLOG_TYPES.EDITING_BLOG_POST:
      return state.map(blogPost => (blogPost.id === id ? {
        title, image, description, id,
      } : blogPost))
    case BLOG_TYPES.DELETING_BLOG_POST:
      return state.filter(blogPost => blogPost.id !== id)
    default:
      return state
  }
}

export default blog
