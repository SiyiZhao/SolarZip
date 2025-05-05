import { defineNoteConfig, defineNotesConfig } from 'vuepress-theme-plume'
import Inflation from './notes/inflation.ts'

/* =================== locale: zh-CN ======================= */

const zhDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

export const zhNotes = defineNotesConfig({
  dir: 'notes',
  link: '/',
  notes: [zhDemoNote, Inflation],
})

/* =================== locale: en-US ======================= */

const enDemoNote = defineNoteConfig({
  dir: 'demo',
  link: '/demo',
  sidebar: ['', 'foo', 'bar'],
})

export const enNotes = defineNotesConfig({
  dir: 'en/notes',
  link: '/en/',
  notes: [enDemoNote],
})

