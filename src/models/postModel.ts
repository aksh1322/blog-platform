export interface Post {
    id: number;
    title: string;
    content: string;
    author: string;
  }
  
  let posts: Post[] = [];
  
  export const getPosts = (): Post[] => posts;
  
  export const getPostById = (id: number): Post | undefined =>
    posts.find(post => post.id === id);
  
  export const createPost = (post: Post): void => {
    posts.push(post);
  };
  
  export const updatePost = (id: number, updatedPost: Partial<Post>): void => {
    posts = posts.map(post => (post.id === id ? { ...post, ...updatedPost } : post));
  };
  
  export const deletePost = (id: number): void => {
    posts = posts.filter(post => post.id !== id);
  };
  