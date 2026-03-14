---
description: how to publish a new blog post
---

# How to Publish a Blog Post

Follow these steps to add a new article to the Allergify Health Blog.

## 1. Create the Article File
Create a new HTML file in the `/blog/` directory. Use a URL-friendly name (e.g., `the-benefit-of-superfoods.html`).

## 2. Copy the Template
Use the structure of `blog/hidden-allergens.html` as your template. Ensure you update the following:
- `<title>` and `<meta name="description">`
- `JSON-LD` script (update `headline`, `image`, and `description`)
- `article-header` content (Title, Tag, Meta)
- `article-body` content

## 3. Handling Images
For a "premium" look, follow these image guidelines:
- **Source**: Use high-quality photography from [Unsplash](https://unsplash.com).
- **Format**: Use the following HTML snippet for consistent styling:
```html
<img src="URL" alt="Description" style="width: 100%; border-radius: var(--radius-3xl); margin-bottom: var(--space-12); box-shadow: 0 20px 40px rgba(0,0,0,0.05);">
```
- **SEO/AI**: Always provide a descriptive `alt` tag. AI models use this to "see" your content.
- **Featured Images**: The main article image should be at least 1200px wide.

## 4. SEO & AI Optimization
- **Keywords**: Include terms like "food allergy", "AI scanner", and "health score" naturally in the text.
- **JSON-LD**: This is CRITICAL for AI models (Gemini, ChatGPT) to summarize your post correctly.

## 4. Add to Blog Landing Page
Open `blog.html` and add a new `<article>` card to the `blog-grid`. 
- **Tags**: Use `tag-safety`, `tag-tech`, or `tag-nutrition`.
- **Image**: Match the image used in the article.

## 5. Verify
Check the formatting at [http://localhost:3000/blog](http://localhost:3000/blog).
