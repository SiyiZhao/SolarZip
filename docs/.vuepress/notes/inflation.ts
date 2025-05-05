import { defineNoteConfig } from 'vuepress-theme-plume'

export default defineNoteConfig({
  dir: 'inflation',
  link: '/inflation',
  sidebar: ['', 
    {
      text: '暴胀理论',
      collapsed: false,
      items: [
        'sec2a',
      ]
    },
    // {
    //   text: '弦论',
    //   collapsed: true,
    //   items: [
    //     'sec3.1',
    //   ]
    // }
  ],
})