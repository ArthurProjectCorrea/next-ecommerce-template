# HappyCustomers

Use `HappyCustomers` to display customer reviews in a responsive carousel with ratings, verification badges, and review text.

## Props

- `title?: string` — Section title (default: `OUR HAPPY CUSTOMERS`).
- `reviews: Array<{ id: string; author: string; verification: boolean; evaluation: number; commit: string }>` — Array of customer reviews.

## Example

```tsx
import HappyCustomers from '@/components/happy-customers';
import commitsData from '@/data/commit.json';

export default function Page() {
  return <HappyCustomers reviews={commitsData.commits} />;
}
```

## Features

- Responsive carousel layout (1 col mobile, 2 cols tablet, 3 cols desktop)
- Star ratings based on evaluation score
- Verification badge indicator
- Dark mode support
- Semantic color tokens
