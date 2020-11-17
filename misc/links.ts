type Link = { label: string; link: string; target: string }
type SectionsDict = Record<
  string,
  {
    label: string
    links: Link[]
  }
>

const filterObjectListBy = (objectsList: any[], fieldName: string) => {
  const res = [];

  for (const obj of objectsList) {
    const resultsMapped = res.map(item => item[fieldName])

    if (resultsMapped.includes(obj[fieldName])) {
      continue
    }

    res.push(obj)
  }

  return res
}
export const constructPreviewLinks = (sections: { protocol: { links: any; }; }) => {

  return {
    ...sections,
    protocol: {
      ...sections.protocol,
      links: filterObjectListBy([
        ...internalProtocolLinks.links,
        ...sections.protocol.links,
      ], 'label')
    },
  }
}

export const getNodeLink = (sections: { protocol: { links: any[]; }; }) => sections.protocol.links.find((item: { label: string; }) => item.label === 'AddNode');

export const internalProtocolLinks = {
  links: [
    {
      label: 'AddNode',
      link: '/new-node-submission',
      target: '_blank',
    },
  ],
}

export const sections: SectionsDict = {
  protocol: {
    label: 'Protocol',
    links: [
      {
        label: 'AddNode',
        link: 'https://docs.google.com/forms/d/e/1FAIpQLSf5EZ0baglFkEswgR0RCJTZx-YAgy07WjRlwEc5YiWf0hM-kw/viewform?embedded=true',
        target: '_blank',
      },
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