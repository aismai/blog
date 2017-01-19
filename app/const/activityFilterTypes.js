const filters = [
  {
    name:     'blog',
    isActive: true,
    types:    ['blog-create', 'blog-edit', 'blog-delete']
  },
  {
    name:  'post',
    isActive: true,
    types: ['post-create', 'post-edit', 'post-delete']
  },
  {
    name:  'comment',
    isActive: true,
    types: ['comment-create', 'comment-edit', 'comment-delete']
  }
];

export default filters;
