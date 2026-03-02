# Portfolio Website

A modern, responsive portfolio website showcasing your development experience. Built with Next.js, TypeScript, and Tailwind CSS with integrated Netlify Form support.

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Smooth Navigation**: Smooth scrolling between sections
- **Hero Section**: Eye-catching introduction with call-to-action buttons
- **Skills Showcase**: Organized display of technical and soft skills
- **Project Portfolio**: Featured projects with technologies used
- **Experience Timeline**: Professional work history with descriptions
- **Contact Form**: Netlify Forms integration for easy message submissions
- **Footer**: Quick links and social media connections

## Tech Stack

- **Framework**: Next.js 16.1.6 with TypeScript
- **Styling**: Tailwind CSS 4
- **Deployment**: Netlify with form handling
- **Language**: TypeScript + React 19

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd portfolio-website
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

```
src/
├── app/
│   ├── page.tsx              # Main page
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
└── components/
    ├── Header.tsx            # Navigation header with mobile menu
    ├── Hero.tsx              # Hero section with introduction
    ├── Skills.tsx            # Skills showcase
    ├── Projects.tsx          # Featured projects
    ├── Experience.tsx        # Work experience timeline
    ├── Contact.tsx           # Contact form with Netlify integration
    └── Footer.tsx            # Footer section
```

## Customization

### Update Your Information

Edit each component to add your personal information:

- **Header.tsx**: Update the portfolio name/logo
- **Hero.tsx**: Customize introduction text and description
- **Skills.tsx**: Add your technical skills and categories
- **Projects.tsx**: Replace with your actual projects
- **Experience.tsx**: Update your work history
- **Contact.tsx**: Update contact email and social links
- **Footer.tsx**: Add your email and social media links

### Styling

Customize colors and styling in Tailwind CSS classes throughout components. The primary color is blue (blue-600). To change it:

1. Replace `blue-600` with your preferred color in all components
2. Update utility classes in `globals.css` if needed

## Deploying on Netlify

### Prerequisites

- Netlify account
- Repository pushed to GitHub/GitLab/Bitbucket

### Steps

1. Connect your repository to Netlify:
   - Go to [Netlify](https://netlify.com)
   - Click "New site from Git"
   - Choose your repository

2. Configure build settings:
   - **Build command**: `npm run build`
   - **Publish directory**: `.next`

3. Deploy:
   - Netlify will automatically deploy on push to main branch

### Form Handling

The contact form uses Netlify Forms. When deployed on Netlify:

1. The form will automatically work without additional configuration
2. Form submissions appear in your Netlify dashboard under "Forms"
3. You can set up notifications for new submissions in site settings

### Environment Variables (Optional)

If you need environment variables, create a `.env.local` file:

```
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
```

## Building for Production

```bash
npm run build
npm start
```

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Netlify Forms Documentation](https://docs.netlify.com/forms/overview/)
- [React Documentation](https://react.dev)

## License

This project is open source and available under the MIT License.

## Next Steps

1. Replace placeholder project information with your actual portfolio content
2. Update social media links in Header and Footer
3. Deploy to Netlify to enable form submissions
4. Add your custom domain
5. Set up form notifications in Netlify dashboard

---

Happy coding! 🚀

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
