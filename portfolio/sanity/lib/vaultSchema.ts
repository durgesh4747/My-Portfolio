import { defineField, defineType } from "sanity";

export const VaultSchema = defineType({
  name: "work",
  title: "My Work",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Project Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "order",
      title: "Display Order",
      type: "number",
      description: "Used to sort projects (1, 2, 3...)",
      validation: (Rule) => Rule.required().min(1),
    }),
    defineField({
      name: "isFeatured",
      title: "Featured on Homepage",
      type: "boolean",
      initialValue: false,
    }),
    defineField({
      name: "thumbnail",
      title: "Thumbnail Image",
      type: "image",
      options: { hotspot: true },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "clip",
      title: "Preview Clip (Direct Upload)",
      type: "file",
      description: "2-3 second .mp4 overview for hover effects.",
      options: { accept: "video/mp4" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "videoUrl",
      title: "Video Link",
      type: "url",
      description: "YouTube link for this project.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "projectLink",
      title: "Project Link",
      type: "url",
      description: "External link for this project.",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "caseStudy",
      title: "Full Case Study / Details",
      type: "array",
      of: [{ type: "block" }],
    }),
  ],
});
