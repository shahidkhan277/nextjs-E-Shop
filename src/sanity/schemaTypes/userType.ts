import {defineField, defineType} from 'sanity'

export const userType = defineType({
    name: 'user',
    title: 'User',
    type: 'document',
    fields: [
        defineField({
        name: 'name',
        type: 'string',
        }),
        defineField({
        name: 'email',
        type: 'string',
        }),
        defineField({
        name: 'password',
        type: 'string',
        }),
        defineField({
        name: 'role',
        type: 'string',
        }),
    ],
    })