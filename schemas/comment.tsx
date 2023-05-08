import {defineField, defineType} from 'sanity'

export default defineType({
    name: "comment",
    title: "Comment",
    type: "document",
  fields: [
    defineField({
        name: "name",
        title: "Name",
        type: "string",
    }),
    defineField({
        name: "email",
        title: "Email",
        type: "string",
    }),
    defineField({
        name: "comment",
      title: "Comment",
      type: "string",
    }),

    defineField({
        name: "active",
        title: "Active",
        type: "boolean",
      
        }),
  ],
})
