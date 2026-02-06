# App Footer

O componente `AppFooter` é um footer reutilizável e configurável para a aplicação. Ele apresenta marca, links organizados em seções, redes sociais e informações legais.

## Características

- ✅ Totalmente personalizável com props
- ✅ Responsivo para mobile, tablet e desktop
- ✅ Integração com ícones Lucide React
- ✅ Suporte a temas claro/escuro
- ✅ Estrutura semântica (acessibilidade)
- ✅ Links de redes sociais

## Instalação

O componente já está disponível em `components/app-footer.tsx`.

## Uso Básico

```tsx
import AppFooter from '@/components/app-footer';

export default function Page() {
  return (
    <div>
      {/* Seu conteúdo aqui */}
      <AppFooter />
    </div>
  );
}
```

## Uso Avançado (Customização)

```tsx
import AppFooter, { type FooterSection } from '@/components/app-footer';

export default function Page() {
  const customSections: FooterSection[] = [
    {
      title: 'PRODUTOS',
      links: [
        { label: 'Camisetas', href: '/products/camisetas' },
        { label: 'Calças', href: '/products/calcas' },
        { label: 'Acessórios', href: '/products/acessorios' },
      ],
    },
    {
      title: 'SUPORTE',
      links: [
        { label: 'Contato', href: '/contact' },
        { label: 'FAQ', href: '/faq' },
        { label: 'Envios', href: '/shipping' },
      ],
    },
  ];

  const customSocialLinks = [
    { icon: 'twitter', href: 'https://twitter.com' },
    { icon: 'instagram', href: 'https://instagram.com' },
  ];

  return (
    <AppFooter
      brandName="MINHA LOJA"
      brandDescription="Roupas de qualidade para sua rotina"
      sections={customSections}
      socialLinks={customSocialLinks}
    />
  );
}
```

## Props

### `AppFooterProps`

| Prop               | Tipo                               | Padrão           | Descrição                          |
| ------------------ | ---------------------------------- | ---------------- | ---------------------------------- |
| `brandName`        | `string`                           | `'SHOP.CO'`      | Nome da marca exibido no footer    |
| `brandDescription` | `string`                           | Descrição padrão | Descrição da marca                 |
| `sections`         | `FooterSection[]`                  | Seções padrão    | Array de seções com título e links |
| `socialLinks`      | `{ icon: string; href: string }[]` | Links padrão     | Links das redes sociais            |

### `FooterSection`

```tsx
interface FooterSection {
  title: string;
  links: { label: string; href: string }[];
}
```

## Ícones Suportados para Redes Sociais

Os ícones disponíveis são (através do Lucide React):

- `twitter`
- `facebook`
- `instagram`
- `linkedin`

## Exemplos

### Footer Minimalista

```tsx
<AppFooter brandName="BRAND" sections={[]} socialLinks={[]} />
```

### Footer com Links Personalizados

```tsx
<AppFooter
  brandName="TECH STORE"
  sections={[
    {
      title: 'DESENVOLVIMENTO',
      links: [
        { label: 'GitHub', href: 'https://github.com' },
        { label: 'Docs', href: '/docs' },
      ],
    },
  ]}
/>
```

## Acessibilidade

- Links possuem transições suaves para melhor experiência
- Estrutura semântica correta com elementos `<footer>`, `<section>`, `<nav>`
- Atributos `aria-label` nos ícones de redes sociais
- Cores seguem padrões de contraste do Tailwind

## Responsividade

O footer é totalmente responsivo:

- **Mobile**: Layout em coluna única com ícones de redes sociais
- **Tablet**: Dois ícones por linha
- **Desktop**: Layout em grade 4 colunas para as seções

## Personalizações CSS

O componente usa classes Tailwind CSS. Para customizações adicionais:

```tsx
// ComponentesModificados.tsx
export default function CustomFooter() {
  return (
    <AppFooter
    // ... props
    />
  );
}
```

Se precisar de estilos adicionais, adicione um archivo CSS ou use Tailwind diretamente no componente.

## Notas

- O componente é `'use client'` — funciona apenas no client-side
- Os links sociais usam `undefined` em `sidebar-opt-in-form.tsx` por padrão; implemente a navegação conforme necessário
- Personalize as cores através das variáveis CSS do tema (via dark mode)
