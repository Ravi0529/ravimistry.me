import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { EditorTabBar } from "@/components/markdown-editor/EditorTabBar"
import { buildEditorTabs, editorTabs, type EditorTab } from "@/lib/editor-tabs"

type MarkdownEditorShellProps = {
  activeFile: string
  children: ReactNode
  className?: string
  extraTab?: EditorTab
  insertAfter?: string
}

export function MarkdownEditorShell({
  activeFile,
  children,
  className,
  extraTab,
  insertAfter,
}: MarkdownEditorShellProps) {
  const tabs = extraTab ? buildEditorTabs(extraTab, insertAfter) : editorTabs

  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-[var(--editor-border)] bg-[var(--editor-bg)] shadow-2xl shadow-black/40",
        className
      )}
    >
      <EditorTabBar activeFile={activeFile} tabs={tabs} />
      <div className="overflow-x-hidden break-words">{children}</div>
    </div>
  )
}
