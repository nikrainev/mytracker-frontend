export const required = value => (value || typeof value === 'number' ? undefined : 'Обязательно')

export const checkLogin = value => (value && /^[a-z]+([-_]?[a-z0-9]+){0,2}$/i.test(value) ? undefined : 'Некорректный логин')

export const checkEmail = value => (value && /^[0-9a-z._-]+@[0-9a-z_-]+\.[a-z]{2,5}$/i.test(value) ? undefined : 'Почта некорректная')

export const checkPassword = value => (value && /^[0-9a-z#!_-]/i.test(value) ? undefined : 'Пароль некорректный')

export const passwordsMatch = (value, allValues) =>
        value !== allValues.password ? 'Пароли не совпадают' : undefined;
export const minLength = (value) => (value && value.length > 1 ? undefined : 'Минимум 2 символа')
