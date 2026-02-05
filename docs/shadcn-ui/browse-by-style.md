# BrowseByStyle

Use `BrowseByStyle` to render a set of visual category tiles with responsive layouts for desktop and mobile.

## Props

- `title?: string` — Section title (default: `BROWSE BY DRESS STYLE`).
- `items: Array<{ id: string; title: string; href?: string; image: string }>` — Array of items. The component assumes up to 4 items for the desktop grid layout.

## Example

```tsx
import BrowseByStyle from '@/components/browse-by-style';

const items = [
  {
    id: 'casual',
    title: 'Casual',
    href: '/style/casual',
    image: '/product/prod-8.svg',
  },
  {
    id: 'formal',
    title: 'Formal',
    href: '/style/formal',
    image: '/product/prod-1.svg',
  },
  {
    id: 'party',
    title: 'Party',
    href: '/style/party',
    image: '/product/prod-3.svg',
  },
  { id: 'gym', title: 'Gym', href: '/style/gym', image: '/product/prod-5.svg' },
];

export default function Page() {
  return <BrowseByStyle items={items} />;
}
```

## Notes

- Place component files under `components/` (not `components/ui/`) following repo conventions.
- The desktop layout expects up to 4 items and maps them to the visual pattern shown in the design.
