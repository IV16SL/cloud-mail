import http from '@/axios/index.js';

export function loginUserInfo() {
    return http.get('/my/loginUserInfo')
}

export function resetPassword(password) {
    return http.put('/my/resetPassword', {password})
}

export function verifyPassword(password) {
    return http.post('/verify-password', {password})
}

export function userDelete() {
    return http.delete('/my/delete')
}

