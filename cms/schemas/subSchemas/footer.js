export default {
  title: "Footer",
  name: "footer",
  type: "document",
  fields: [
    {
      title: "Image",
      name: "image",
      type: "image",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          title: "Alt text",
          name: "alt",
          type: "string",
        },
      ],
    },
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Link",
      name: "link",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
  ],
};
