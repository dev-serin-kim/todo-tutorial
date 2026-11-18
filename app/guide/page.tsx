import type { Metadata } from "next"
import Link from "next/link"

export const metadata: Metadata = {
  title: "사용법 · 내 할 일",
}

const STEPS: { title: string; description: string }[] = [
  {
    title: "할 일 추가",
    description: "입력창에 할 일을 쓰고 Enter를 누르면 목록 맨 위에 추가됩니다.",
  },
  {
    title: "완료 표시",
    description:
      "할 일 앞의 체크박스를 누르면 완료로 표시됩니다. 다시 누르면 되돌릴 수 있습니다.",
  },
  {
    title: "내용 수정",
    description:
      "할 일 글자를 두 번 클릭하면 고칠 수 있습니다. Enter로 저장하고 Esc로 취소합니다. 내용을 모두 지우면 원래 글이 유지됩니다.",
  },
  {
    title: "삭제",
    description: "오른쪽 휴지통 버튼을 누르면 그 할 일이 지워집니다.",
  },
  {
    title: "필터",
    description:
      "전체 · 진행중 · 완료 탭으로 보고 싶은 할 일만 골라 볼 수 있습니다. 새 할 일을 추가하면 전체 보기로 돌아갑니다.",
  },
  {
    title: "완료한 일 한 번에 지우기",
    description:
      "완료한 할 일이 있으면 목록 아래에 ‘완료한 일 지우기’ 버튼이 나타납니다.",
  },
  {
    title: "저장",
    description:
      "할 일은 이 브라우저에 자동으로 저장되어 새로고침해도 남아 있습니다. 다른 브라우저나 기기와는 공유되지 않습니다.",
  },
]

export default function GuidePage() {
  return (
    <main className="mx-auto flex min-h-svh w-full max-w-md flex-col gap-6 p-6 pt-16">
      <div className="flex flex-col gap-2">
        <h1 className="text-3xl font-bold tracking-tight">사용법</h1>
        <p className="text-sm text-muted-foreground">
          내 할 일 앱의 기능을 차례대로 소개합니다.
        </p>
      </div>
      <ol className="flex flex-col gap-4">
        {STEPS.map(({ title, description }, i) => (
          <li key={title} className="flex gap-3">
            <span
              aria-hidden
              className="flex size-6 shrink-0 items-center justify-center rounded-full bg-muted text-xs font-semibold"
            >
              {i + 1}
            </span>
            <div className="flex flex-col gap-1">
              <h2 className="text-sm font-semibold">{title}</h2>
              <p className="text-sm text-muted-foreground">{description}</p>
            </div>
          </li>
        ))}
      </ol>
      <Link
        href="/"
        className="text-sm font-medium underline-offset-4 hover:underline"
      >
        ← 할 일 목록으로 돌아가기
      </Link>
    </main>
  )
}
