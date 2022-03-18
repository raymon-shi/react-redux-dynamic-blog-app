/* eslint-disable no-shadow */

export const HEADER_TYPES = {
  EDITING: 'EDITING',
}

export const BLOG_TYPES = {
  ADD_BLOG_POST: 'ADD_BLOG_POST',
  EDITING_BLOG_POST: 'EDITING_BLOG_POST',
  DELETING_BLOG_POST: 'DELETING_BLOG_POST',
}

let id = 1

export const editingHeader = (image, description) => ({
  type: HEADER_TYPES.EDITING,
  image,
  description,
})

export const addBlogPost = (title, image, description) => ({
  type: BLOG_TYPES.ADD_BLOG_POST,
  title,
  image,
  description,
  id: id++,
})

export const editingBlogPost = (title, image, description, id) => ({
  type: BLOG_TYPES.EDITING_BLOG_POST,
  title,
  image,
  description,
  id,
})

export const deletingBlogPost = id => ({
  type: BLOG_TYPES.DELETING_BLOG_POST,
  id,
})
