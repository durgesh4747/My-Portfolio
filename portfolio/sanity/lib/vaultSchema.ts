import { defineField, defineType } from "sanity";

export const VaultSchema = defineType({
  name: "work",
  title: "My Videos",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "category",
      title: "Category",
      type: "string",
      options: {
        list: [
          { title: "Reel", value: "Reel" },
          { title: "Shorts", value: "Shorts" },
          { title: "Promotion Video", value: "Promotion Video" },
          { title: "Property Tour", value: "Property Tour" },
          { title: "Real Estate", value: "Real Estate" },
          { title: "Wedding", value: "Wedding" },
          { title: "Custom Video", value: "Custom Video" },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "link",
      title: "Video Link",
      type: "url",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "duration",
      title: "Duration",
      type: "string",
      description: "Example: 0:30 or 3:45",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(150).warning("Keep descriptions short."),
    }),
  ],
});
