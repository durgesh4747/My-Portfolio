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
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title", // direct slug generation from title!
        maxLength: 96,
      },
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
      // Temporarily removed .required() so you don't get blocked if you don't have a video yet
    }),
    defineField({
      name: "projectLink",
      title: "Project Link",
      type: "url",
      description: "External link for this project.",
      // Temporarily removed .required() to be safe for tonight
    }),
    defineField({
      name: "description",
      title: "Project Description",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "caseStudy",
      title: "Full Case Study / Details",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "techStack",
      title: "Tech Stack",
      type: "array",
      of: [{ type: "string" }],
    }),
    defineField({
      name: "timeline",
      title: "Timeline",
      type: "string",
    }),
    defineField({
      name: "role",
      title: "Role",
      type: "string",
    }),
    defineField({
      name: "liveLink",
      title: "Live Link",
      type: "url",
    }),
    defineField({
      name: "githubLink",
      title: "GitHub Link",
      type: "url",
    }),
  ],
});
