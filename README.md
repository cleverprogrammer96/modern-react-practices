# Modern Sidebar React Application

A modern React application featuring a sleek, animated sidebar component with nested navigation items, built with React and Framer Motion.

## Features

- **Modern Sidebar Component**:
  - Fixed position sidebar that integrates with header and footer
  - Collapsible/expandable functionality - shows only icons by default, expands on hover
  - Supports nested navigation items with smooth animations
  - Dark theme with accent colors

- **Responsive Layout**:
  - Adapts to different screen sizes
  - Header and footer that integrate with the sidebar

- **Animations**:
  - Smooth transitions using Framer Motion
  - Micro-interactions for better user experience

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/modern-sidebar-app.git
cd modern-sidebar-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
modern-sidebar-app/
├── public/
├── src/
│   ├── components/
│   │   ├── Dashboard.jsx       # Sample dashboard content
│   │   ├── Footer.jsx          # Footer component
│   │   ├── Header.jsx          # Header component
│   │   ├── Layout.jsx          # Layout wrapper component
│   │   └── Sidebar.jsx         # Main sidebar component
│   ├── App.css                 # Application styles
│   ├── App.jsx                 # Main application component
│   ├── index.css               # Global styles
│   └── main.jsx                # Entry point
├── package.json
└── README.md
```

## Customizing the Sidebar

### Changing Navigation Items

To customize the navigation items, edit the `navItems` array in `src/components/Sidebar.jsx`:

```jsx
const navItems = [
  {
    id: 'dashboard',
    label: 'Dashboard',
    icon: <FaHome />,
    path: '/dashboard'
  },
  // Add or modify items here
  {
    id: 'custom-item',
    label: 'Custom Item',
    icon: <YourCustomIcon />,
    path: '/custom-path',
    children: [
      { id: 'sub-item-1', label: 'Sub Item 1', path: '/custom-path/sub-1' },
      { id: 'sub-item-2', label: 'Sub Item 2', path: '/custom-path/sub-2' }
    ]
  }
];
```

### Changing Colors and Theme

The color scheme is defined using CSS variables in `src/App.css`. To change the theme, modify these variables:

```css
:root {
  --primary-color: #6366f1;      /* Main accent color */
  --primary-hover: #4f46e5;      /* Hover state for primary color */
  --dark-bg: #1e1e2d;            /* Sidebar background */
  --darker-bg: #151521;          /* Darker elements */
  --light-text: #f8fafc;         /* Light text color */
  --muted-text: #94a3b8;         /* Secondary text color */
  --border-color: #2e2e3f;       /* Border color for sidebar elements */
  /* ... other variables ... */
}
```

### Adjusting Sidebar Width

To change the width of the sidebar in collapsed or expanded states, modify these CSS variables:

```css
:root {
  --sidebar-collapsed-width: 70px;    /* Width when sidebar is collapsed */
  --sidebar-expanded-width: 240px;    /* Width when sidebar is expanded */
  /* ... other variables ... */
}
```

### Customizing Animations

The animations are powered by Framer Motion. To customize them, modify the variant objects in `src/components/Sidebar.jsx`:

```jsx
const sidebarVariants = {
  expanded: {
    width: '240px',
    transition: {
      type: 'spring',
      stiffness: 300,  // Adjust for faster/slower animation
      damping: 30      // Adjust for more/less bounce
    }
  },
  collapsed: {
    width: '70px',
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 30
    }
  }
};
```

## Technologies Used

- [React](https://reactjs.org/) - UI library
- [Vite](https://vitejs.dev/) - Build tool and development server
- [Framer Motion](https://www.framer.com/motion/) - Animation library
- [React Icons](https://react-icons.github.io/react-icons/) - Icon library

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Inspired by modern dashboard designs and sidebar patterns
- Built with best practices for React component architecture
