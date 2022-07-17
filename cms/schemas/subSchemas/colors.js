export default {
  title: "Colors",
  name: "colors",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Hex Code",
      name: "hexCode",
      type: "string",
      validation: (Rule) =>
        Rule.required().custom((hex) => /^#(?:[0-9a-fA-F]{3}){1,2}$/.test(hex)),
    },
  ],
};
