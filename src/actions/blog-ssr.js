import axios, { endpoints } from 'src/utils/axios';

// ----------------------------------------------------------------------

export async function getPosts() {
  try {
    const res = await axios.get(endpoints.post.list);
    const {data} = res;
   console.log(data);
    if (!Array.isArray(data.posts)) {
      throw new Error('Invalid posts data');
    }

    return data;
  } catch (error) {
    console.error('Error fetching posts:', error);
    return { posts: [] }; // Return a fallback value
  }
}

// ----------------------------------------------------------------------

export async function getPost(title) {
  const URL = title ? `${endpoints.post.details}?title=${title}` : '';

  const res = await axios.get(URL);

  return res.data;
}

// ----------------------------------------------------------------------

export async function getLatestPosts(title) {
  const URL = title ? `${endpoints.post.latest}?title=${title}` : '';

  const res = await axios.get(URL);

  return res.data;
}
