export default {
  title: "Card Grid",
  name: "cardGrid",
  type: "document",
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Is title visable?",
      name: "titleVisability",
      type: "boolean",
      initialValue: true,
    },
    {
      title: "Cards",
      name: "cards",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              title: "Image",
              name: "image",
              type: "image",
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
              title: "Is title visable?",
              name: "titleVisability",
              type: "boolean",
              initialValue: true,
            },
            {
              title: "Text",
              name: "text",
              type: "array",
              of: [
                {
                  type: "block",
                },
              ],
            },
            {
              title: "CTAs",
              name: "ctas",
              type: "array",
              of: [
                {
                  type: "object",
                  fields: [
                    {
                      title: "Text",
                      name: "text",
                      type: "string",
                    },
                    {
                      title: "Is this a link?",
                      name: "isLink",
                      type: "boolean",
                      initialValue: true,
                    },
                    {
                      title: "Link",
                      name: "link",
                      type: "string",
                      hidden: ({ parent, value }) => !value && !parent?.isLink,
                    },
                    {
                      title: "Document",
                      name: "document",
                      type: "file",
                      hidden: ({ parent, value }) => !value && parent?.isLink,
                    },
                    {
                      title:
                        "Is this a secondary button? (Secondary buttons have a white background and grey text).",
                      name: "isSecondaryButton",
                      type: "boolean",
                      initialValue: false,
                    },
                  ],
                },
              ],
            },
            {
              title: "Background Color",
              name: "bgColor",
              type: "reference",
              to: [{ type: "colors" }],
            },
          ],
        },
      ],
    },
    {
      title: "Columns",
      name: "columns",
      type: "number",
      validation: (Rule) => Rule.required().integer().min(1),
    },
    {
      title: "Card Body Spacing",
      name: "cardBodySpacing",
      type: "number",
      initialValue: 1,
      validation: (Rule) => Rule.required().integer().min(0).max(1),
    }
  ],
};
