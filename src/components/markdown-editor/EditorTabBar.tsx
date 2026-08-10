import { FileText } from "lucide-react"
import { cn } from "@/lib/utils"
import type { EditorTab } from "@/lib/editor-tabs"

type EditorTabBarProps = {
  activeFile: string
  tabs: EditorTab[]
}

export function EditorTabBar({ activeFile, tabs }: EditorTabBarProps) {
  return (
    <div className="editor-tab-bar flex overflow-x-auto border-b border-[var(--editor-border)] bg-[var(--editor-tab-inactive)]">
      {tabs.map((tab) => {
        const isActive = tab.label === activeFile

        return (
          <a
            key={`${tab.href}-${tab.label}`}
            href={tab.href}
            aria-current={isActive ? "page" : undefined}
            className={cn(
              "flex shrink-0 items-center gap-2 border-r border-[var(--editor-border)] px-4 py-2 font-mono text-xs transition-colors",
              isActive
                ? "border-b-2 border-b-[var(--md-heading)] bg-[var(--editor-tab-active)] text-[var(--editor-fg)]"
                : "text-[var(--editor-muted)] hover:bg-[var(--editor-tab-active)]/60 hover:text-[var(--editor-fg)]"
            )}
          >
            <FileText
              className={cn(
                "size-3.5 shrink-0",
                isActive ? "text-[var(--md-heading)]" : "text-[var(--editor-muted)]"
              )}
            />
            {tab.label}
          </a>
        )
      })}
    </div>
  )
}
