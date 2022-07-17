export default {
  title: "Topbox",
  name: "topbox",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Body",
      name: "body",
      type: "array",
      validation: (Rule) => Rule.required(),
      of: [
        {
          type: "block",
        },
      ],
    },
    {
      title: "Call To Action",
      name: "cta",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
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
        },
      ],
    },
  ],
};
