export default {
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    {
      name: "companyname",
      title: "Company Name",
      type: "string",
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "companyname",
        maxLength: 96,
      },
    },
    {
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
    },
    {
      name: "mainImage",
      title: "Main image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    },
    {
      name: "publishedAt",
      title: "Published at",
      type: "datetime",
    },
    {
      name: "dinter",
      title: "DATE OF INTERVIEW",
      type: "datetime",
    },
    {
      name: "dlast",
      title: " last date of registration",
      type: "datetime",
    },
    {
      name: "description",
      title: "Description",
      type: "string",
    },
    {
      name: "job",
      title: "Job Post",
      type: "blockContent",
    },
    {
      name: "bond",
      title: " bond details",
      type: "blockContent",
    },
    {
      name: "package",
      title: "Package",
      type: "string",
    },
    {
      name: "vac",
      title: "Vacancy",
      type: "string",
    },

    {
      name: "inter",
      title: "internship",
      type: "blockContent",
    },
    {
      name: "loc",
      title: "Job Location",
      type: "string",
    },
    {
      name: "elig",
      title: "Eligibility",
      type: "string",
    },
    {
      name: "quali",
      title: "Qualification",
      type: "string",
    },
    {
      name: "sel",
      title: "Selection Process",
      type: "blockContent",
    },
    {
      name: "gurl",
      title: "Google forms",
      type: "string",
    },
    
    {
      name: "comments",
      title: "Comments",
      type: "array",
      of: [{ type: "comment" }],
    },
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return Object.assign({}, selection, {
        subtitle: author && `by ${author}`,
      });
    },
  },
};
