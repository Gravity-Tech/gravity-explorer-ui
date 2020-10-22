type Link = { label: string; link: string; target: string }
type SectionsDict = Record<
  string,
  {
    label: string
    links: Link[]
  }
>
export const getNode = () => 'https://forms.gle/mu7mf7aX9K9XFVds9'
export const sections: SectionsDict = {
  protocol: {
    label: 'Protocol',
    links: [
      {
        label: 'Whitepaper',
        link: 'https://gravity.tech/whitepaper',
        target: '_blank',
      },
      {
        label: 'FAQ',
        link:
          'https://medium.com/@gravity_protocol/gravity-protocol-faq-9092bc9c5cf7',
        target: '_blank',
      },
      {
        label: 'Submit',
        link:
          'http://explorer.gravity.tech/new-node-submission',
        target: '_blank',
      },
      {
        label: 'GitHub',
        link: 'https://github.com/Gravity-Tech',
        target: '_blank',
      },
      {
        label: 'Docs',
        link: 'https://github.com/Gravity-Tech',
        target: '_blank',
      },
      {
        label: 'Demo',
        link: '/explorer',
        target: '_blank',
      },
    ],
  },
  community: {
    label: 'Community',
    links: [
      {
        label: 'Telegram',
        link: 'https://t.me/gravity_protocol',
        target: '_blank',
      },
      {
        label: 'Discord',
        link: 'https://discord.gg/ANZKhTw',
        target: '_blank',
      },
      {
        label: 'Reddit',
        link: 'https://www.reddit.com/r/Protocol_Gravity/',
        target: '_blank',
      },
    ],
  },
  news: {
    label: 'News',
    links: [
      {
        label: 'Blog',
        link: 'https://medium.com/gravity-protocol',
        target: '_blank',
      },
      {
        label: 'Twitter',
        link: 'https://twitter.com/ProtocolGravity',
        target: '_blank',
      },
      {
        label: 'LinkedIn',
        link: 'https://linkedin.com/company/gravity-protocol',
        target: '_blank',
      },
    ],
  },
  resources: {
    label: 'Resources',
    links: [
      {
        label: 'Brand Assets',
        link:
          'https://drive.google.com/drive/folders/1D_RtcZ9-EkiUmM2uD7a2OTY430TqD-ue',
        target: '_blank',
      },
    ],
  },
}