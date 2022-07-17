export default {
  title: "Heros",
  name: "hero",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Subtitle",
      name: "subtitle",
      type: "array",
      of: [{ type: "string" }],
      validation: (Rule) => Rule.required(),
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
