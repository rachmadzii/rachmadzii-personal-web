import config from './config';

export const createBlog = async (title, content) => {
  const data = JSON.stringify({
    title,
    content,
  });

  const requestOptions = {
    method: 'POST',
    body: data,
    headers: {
      Authorization: `Bearer ${config.TOKEN}`,
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(
    `${config.SISTECH_API_URL}/blog`,
    requestOptions
  ).then((data) => data.json());

  return response;
};

export const getListAllBlog = async () => {
  const requestOptions = {
    headers: {
      Authorization: `Bearer ${config.TOKEN}`,
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(
    `${config.SISTECH_API_URL}/blog`,
    requestOptions
  ).then((data) => data.json());

  return response;
};

export const updateBlog = async (title, content, id) => {
  const data = JSON.stringify({
    title,
    content,
    id,
  });

  const requestOptions = {
    method: 'PUT',
    body: data,
    headers: {
      Authorization: `Bearer ${config.TOKEN}`,
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(
    `${config.SISTECH_API_URL}/blog`,
    requestOptions
  ).then((data) => data.json());

  return response;
};

export const likeBlog = async (id) => {
  const data = JSON.stringify({
    id,
  });

  const requestOptions = {
    method: 'POST',
    body: data,
    headers: {
      Authorization: `Bearer ${config.TOKEN}`,
      'Content-Type': 'application/json',
    },
  };

  const response = await fetch(
    `${config.SISTECH_API_URL}/blog/like`,
    requestOptions
  ).then((data) => data.json());

  return response;
};
