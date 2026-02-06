# Newsletter

Use `Newsletter` to display an email subscription section with title, email input and subscribe button.

## Props

- `title?: string` — Section title (default: `STAY UPDATED ABOUT OUR LATEST OFFERS`).
- `placeholder?: string` — Input placeholder text (default: `Enter your email address`).
- `buttonText?: string` — Subscribe button text (default: `Subscribe to Newsletter`).
- `onSubscribe?: (email: string) => void` — Callback when user submits email.

## Example

```tsx
import Newsletter from '@/components/newsletter';

export default function Page() {
  return (
    <Newsletter
      onSubscribe={(email) => {
        console.log('Subscribed:', email);
      }}
    />
  );
}
```

## Features

- Responsive layout (stacked on mobile, horizontal on desktop)
- Email validation
- Icon from Lucide React (Mail)
- Dark mode support
- Semantic color tokens
- Enter key support for submission
