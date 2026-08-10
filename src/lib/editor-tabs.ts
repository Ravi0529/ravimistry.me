export type EditorTab = {
  label: string
  href: string
}

export const editorTabs: EditorTab[] = [
  { label: "ME.md", href: "/" },
  { label: "EXPERIENCE.md", href: "/experience" },
  { label: "PROJECTS.md", href: "/projects" },
  { label: "RESUME.md", href: "/resume" },
  { label: "CONTACT.md", href: "/contact" },
]

export function buildEditorTabs(extraTab?: EditorTab, insertAfter?: string): EditorTab[] {
  if (!extraTab) return editorTabs

  const tabs = [...editorTabs]
  const index = tabs.findIndex((tab) => tab.label === insertAfter)

  if (index >= 0) {
    tabs.splice(index + 1, 0, extraTab)
  } else {
    tabs.push(extraTab)
  }

  return tabs
}
