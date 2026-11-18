# Todo Tutorial

[Claude Code Playbook](https://docs.claude-hunt.com) 강의에서 작은 할 일 앱을 직접 만들어 보며 Claude Code 쓰는 법을 배우는 연습용 저장소입니다.

## 관련 링크

- 강의 본문: https://docs.claude-hunt.com
- 수강생 결과물 공유: https://claude-hunt.com

## 기술 스택

- Next.js 16 (App Router, Turbopack)
- React 19
- Tailwind CSS v4
- shadcn/ui (radix-maia 스타일, taupe 베이스)
- TypeScript / ESLint / Prettier
- 패키지 매니저: bun 1.3.6

## 시작하기

### 1. 준비물

아래 프로그램이 설치되어 있어야 합니다. 터미널에서 버전을 확인해 보세요.

| 프로그램 | 필요한 버전 | 확인 명령        |
| -------- | ----------- | ---------------- |
| Git      | 아무 버전   | `git --version`  |
| Node.js  | 20.9 이상   | `node --version` |
| bun      | 1.3.6 이상  | `bun --version`  |

- Node.js는 [nodejs.org](https://nodejs.org)에서 LTS 버전을 설치합니다. Next.js가 Node.js 위에서 돌아가므로 bun이 있어도 필요합니다.
- bun이 없다면 다음 명령으로 설치한 뒤 **터미널을 새로 엽니다**.

  ```bash
  # macOS / Linux
  curl -fsSL https://bun.sh/install | bash
  ```

  ```powershell
  # Windows (PowerShell)
  powershell -c "irm bun.sh/install.ps1 | iex"
  ```

### 2. 코드 받기

```bash
git clone https://github.com/dev-serin-kim/todo-tutorial.git
cd todo-tutorial
```

### 3. 의존성 설치

```bash
bun install
```

`bun.lock`에 적힌 버전 그대로 `node_modules`에 설치됩니다. 별도의 환경 변수(`.env`) 설정은 필요 없습니다.

### 4. 개발 서버 실행

```bash
bun dev
```

터미널에 `Ready`가 보이면 브라우저에서 [http://localhost:3000](http://localhost:3000)을 엽니다. "내 할 일" 화면이 보이면 성공입니다. 서버는 `Ctrl+C`로 끕니다.

> 3000번 포트를 이미 다른 프로그램이 쓰고 있으면 Next.js가 3001 같은 다른 포트로 엽니다. 터미널에 찍힌 주소를 확인하세요.

### 5. 잘 동작하는지 확인 (선택)

```bash
bun run test       # 테스트 실행 (Vitest)
bun run lint       # ESLint 검사
bun run typecheck  # 타입 검사 (tsc --noEmit)
```

> `bun test`가 아니라 `bun run test`로 실행해야 합니다. `bun test`는 bun 내장 테스트 러너를 실행해서 이 프로젝트의 Vitest 설정을 쓰지 않고, 테스트가 모두 실패합니다.

### 그 밖의 스크립트

```bash
bun run test:watch # 파일을 고칠 때마다 테스트 다시 실행
bun run format     # Prettier 포맷팅
bun run build      # 프로덕션 빌드
bun run start      # 빌드 결과 실행 (build 먼저 실행)
```

## 레슨별 시작 브랜치

레슨마다 시작 시점의 코드를 `lesson/<레슨 이름>` 브랜치로 제공합니다. 레슨 본문이 안내하는 브랜치로 바꾼 뒤 따라가세요.

```shell
git checkout lesson/claude-md
```

## 컴포넌트 추가

shadcn/ui 컴포넌트는 다음과 같이 추가합니다.

```bash
bunx --bun shadcn@latest add button
```

`components/ui` 디렉토리에 컴포넌트가 추가됩니다.

## 컴포넌트 사용

```tsx
import { Button } from "@/components/ui/button"
```
