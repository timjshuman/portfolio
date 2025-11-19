# Tim Shuman - Professional Portfolio

A modern, responsive portfolio website built with Next.js, React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Fully responsive layout that looks great on all devices
- **Modern UI**: Clean and professional design with smooth animations
- **Dark Mode Support**: Automatic dark mode based on system preferences
- **Smooth Scrolling**: Seamless navigation between sections
- **TypeScript**: Full type safety throughout the codebase
- **SEO Optimized**: Proper meta tags and semantic HTML

## 📋 Sections

- **Hero**: Eye-catching introduction with call-to-action buttons
- **About**: Personal introduction and key statistics
- **Experience**: Detailed work history with highlights
- **Skills**: Organized technology skills by category
- **Projects**: Showcase of featured projects with links
- **Contact**: Contact form and social media links

## 🛠️ Tech Stack

- **Framework**: Next.js 16.0.3
- **React**: 19.2.0
- **TypeScript**: 5.x
- **Styling**: Tailwind CSS 4.x
- **Font**: Geist Sans & Geist Mono

## 🏃‍♂️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:
```bash
cd /Users/timshuman/Desktop/cursor/portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open your browser and visit:
```
http://localhost:3035
```

### Build for Production

```bash
npm run build
npm start
```

## 🎨 Customization Guide

### Personal Information

Update the following components with your information:

#### `components/Hero.tsx`
- Change the initials in the avatar
- Update your name and title
- Modify the description
- Add your LinkedIn and GitHub URLs

#### `components/About.tsx`
- Update the about text with your story
- Modify the statistics (years of experience, projects, technologies)

#### `components/Experience.tsx`
- Replace the experience entries with your work history
- Update job titles, companies, periods, and descriptions
- Modify highlights for each position

#### `components/Skills.tsx`
- Add or remove skill categories
- Update the skills list to match your expertise

#### `components/Projects.tsx`
- Replace the project entries with your actual projects
- Update titles, descriptions, technologies, and links
- Add GitHub repository links and live demo URLs

#### `components/Contact.tsx`
- Update the email address
- Modify the location
- Update social media links
- Customize the contact form (connect to an email service if needed)

### Styling

The portfolio uses Tailwind CSS for styling. You can customize:

- **Colors**: Modify the color scheme in `app/globals.css` or component classes
- **Fonts**: Change fonts in `app/layout.tsx`
- **Spacing**: Adjust padding and margins in component files
- **Dark Mode**: Customize dark mode colors using `dark:` prefixes

### SEO & Metadata

Update the metadata in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Your Name - Your Title",
  description: "Your custom description",
};
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:
- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🌐 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Import the project in Vercel
3. Deploy with default settings

### Other Platforms

The portfolio can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- Render

## 📄 License

This project is open source and available for personal use.

## 🤝 Contributing

Feel free to fork this project and customize it for your own use!

## 📞 Support

For questions or issues, please open an issue on GitHub or contact via the contact form.

---

Built with ❤️ using Next.js and React
