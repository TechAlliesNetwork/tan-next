export default {
  title: "Pages",
  name: "page",
  type: "document",
  fields: [
    {
      title: "Page name",
      name: "pagename",
      type: "string",
      validation: (Rule) => Rule.required().regex(/^\//),
    },
    {
      title: "Hero",
      name: "hero",
      type: "reference",
      to: [{ type: "hero" }],
    },
    {
      title: "Page Elements",
      name: "pageElements",
      type: "array",
      validation: (Rule) => Rule.unique(),
      of: [
        {
          title: "Topbox",
          name: "topbox",
          type: "reference",
          to: [{ type: "topbox" }],
        },
        {
          title: "Card Grid",
          name: "cardGrid",
          type: "reference",
          to: [{ type: "cardGrid" }],
        },
      ],
    },
  ],
};
