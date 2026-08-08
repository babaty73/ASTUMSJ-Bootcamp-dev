import axios from 'axios';

const api = axios.create({
  baseURL: '/api',
  headers: {
    'Content-Type': 'application/json',
  },
});

// Structural Interceptor rule to attach bearer verification headers on the fly
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Automatic session clearing on unauthorized (401) error triggers
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && error.response.status === 401) {
      localStorage.clear();
      window.location.href = '/login';
    }
    return Promise.reject(error);
  }
);

export const authService = {
  signup: (payload) => api.post('/auth/signup', payload),
  login: (payload) => api.post('/auth/login', payload),
};

export const memberService = {
  getAll: () => api.get('/members'),
  getById: (id) => api.get(`/members/${id}`),
  create: (payload) => api.post('/members', payload),
  update: (id, payload) => api.put(`/members/${id}`, payload),
  delete: (id) => api.delete(`/members/${id}`),
};

export const attendanceService = {
  getAll: () => api.get('/attendance'),
  create: (payload) => api.post('/attendance', payload),
  update: (id, payload) => api.put(`/attendance/${id}`, payload),
};

export default api;
