// First, we must import the schema creator
import createSchema from "part:@sanity/base/schema-creator";

// Then import schema types from any plugins that might expose them
import schemaTypes from "all:part:@sanity/base/schema-type";

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
	// We name our schema
	name: "default",
	// Then proceed to concatenate our document type
	// to the ones provided by any plugins that are installed
	types: schemaTypes.concat([
		{
			name: "work",
			type: "document",
			title: "Work",
			fields: [
				{
					name: "title",
					type: "string",
					title: "Title",
					validation: (Rule) => Rule.required(),
				},
				{
					name: "description",
					type: "string",
					title: "Description",
					validation: (Rule) => Rule.required(),
				},
				{
					name: "tech",
					type: "string",
					title: "Tech",
					validation: (Rule) => Rule.required(),
				},
				{
					name: "projectlink",
					type: "string",
					title: "ProjectLink",
				},
				{
					name: "githublink",
					type: "string",
					title: "GithubLink",
				},
				{
					name: "mediumlink",
					type: "string",
					title: "MediumLink",
				},
				{
					name: "image",
					type: "image",
					title: "Image",
					fields: [
						{
							type: "text",
							name: "alt",
							title: "Alt",
						},
					],
					options: {
						hotspot: true,
					},
				},
				{
					name: "content",
					title: "Content",
					type: "array",
					of: [
						{
							type: "block",
						},
						{
							type: "image",
							fields: [
								{
									title: "Position",
									name: "position",
									type: "string",
									options: {
										list: [
											{
												title: "Center",
												value: "center",
											},
											{
												title: "Left",
												value: "left",
											},
											{
												title: "Right",
												value: "right",
											},
										],
										layout: "radio",
										isHighlighted: true,
									},
								},
								{
									type: "text",
									name: "alt",
									title: "Alt",
									options: {
										isHighlighted: true,
									},
								},
							],
							options: {
								hotspot: true,
							},
						},
						{
							type: "code",
							options: {
								withFilename: true,
							},
						},
					],
				},
				{
					name: "date",
					title: "Date",
					type: "datetime",
					validation: (Rule) => Rule.required(),
				},
				{
					name: "slug",
					type: "slug",
					title: "Slug",
					validation: (Rule) => Rule.required(),
				},
			],
		},
	]),
});
