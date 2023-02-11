export default {
    name: "placed",
    title: "Placed Student Data",
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
    }
  },
  {
    name: "sdatas",
    title: "Student Data",
    type: "array",
    of: [{ type: "sdata" }],
  },
],
};