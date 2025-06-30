import type { IconMap, SocialLink, Site } from '@/types'

export const SITE: Site = {
  title: 'Kriptowang.id',
  description:
    'Portal cryptocurrency terpercaya di Indonesia. Dapatkan berita, analisis, dan panduan tentang Bitcoin, Ethereum, DeFi, NFT, dan teknologi blockchain terbaru.',
  href: 'https://kriptowang.id',
  author: 'Kriptowang Team',
  locale: 'id-ID',
  featuredPostCount: 2,
  postsPerPage: 5,
}

export const NAV_LINKS: SocialLink[] = [
  {
    href: '/articles',
    label: 'artikel',
  },
  {
    href: '/authors',
    label: 'penulis',
  },
  {
    href: '/about',
    label: 'tentang',
  },
]

export const SOCIAL_LINKS: SocialLink[] = [
  {
    href: 'https://twitter.com/kriptowang_id',
    label: 'Twitter',
  },
  {
    href: 'https://t.me/kriptowang_id',
    label: 'Telegram',
  },
  {
    href: 'mailto:info@kriptowang.id',
    label: 'Email',
  },
  {
    href: '/rss.xml',
    label: 'RSS',
  },
]

export const ICON_MAP: IconMap = {
  Website: 'lucide:globe',
  GitHub: 'lucide:github',
  LinkedIn: 'lucide:linkedin',
  Twitter: 'lucide:twitter',
  Telegram: 'lucide:send',
  Email: 'lucide:mail',
  RSS: 'lucide:rss',
}
