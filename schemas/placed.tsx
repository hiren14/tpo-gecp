import {defineField, defineType} from 'sanity'

export default defineType({
    name: "placed",
    title: "Placed Student Data",
    type: "document",
  fields: [
    defineField({
        name: "companyname",
        title: "Company Name",
        type: "string",
    }),
    defineField({
        name: "cimg",
        title: "Company image",
        type: "image",
        options: {
          hotspot: true,
        },
    }),
    defineField({
        name: "sdatas",
        title: "Student Data",
        type: "array",
        of: [{ type: "sdata" }],
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
    }),

    defineField({
        name: "active",
        title: "Active",
        type: "boolean",
      
        }),
  ],
})
