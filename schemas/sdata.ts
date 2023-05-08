import {defineField, defineType} from 'sanity'

export default defineType({
  name: "sdata",
    title: "Student Data",
    type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name of students",
      type: "string",
    }),
    defineField({
      name: "simg",
        title: "Student  image",
        type: "image",
        options: {
          hotspot: true,
        },
    }),
    defineField({
      name: "position",
      title: "Position",
      type: "string",
    }),
    defineField({
     
      name: "package",
      title: "Package",
      type: "string",
    }),
    defineField({
      name: "year",
        title: "Year Of Placed",
        type: "string",
    }),
    defineField({
      name: "linkedln",
        title: "Linkedln Links",
        type: "string",
    }),


  ],
})
