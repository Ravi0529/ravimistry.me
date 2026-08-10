import type { ReactNode } from "react"
import { cn } from "@/lib/utils"
import { EditorTabBar } from "@/components/markdown-editor/EditorTabBar"

type MarkdownEditorShellProps = {
  activeFile: string
  children: ReactNode
  className?: string
}

export function MarkdownEditorShell({
  activeFile,
  children,
  className,
}: MarkdownEditorShellProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-lg border border-[var(--editor-border)] bg-[var(--editor-bg)] shadow-2xl shadow-black/40",
        className
      )}
    >
      <EditorTabBar activeFile={activeFile} />
      <div className="overflow-x-hidden break-words">{children}</div>
    </div>
  )
}
