# CSS 단계별 비교 안내

초급 작업자가 같은 JSX에서 CSS가 발전하는 과정을 비교하기 위한 두 버전이다.

## 버전 구분

| 버전 | 목적 | 포함하는 스타일 |
| --- | --- | --- |
| `ver01` | 기본 배치 학습 | 1440px 기준 너비, 높이, 여백, Flex, Grid, 위치, 글자 크기 |
| `ver02` | 원본 화면 재현 | `ver01`의 배치에 색상, 배경, 테두리 모양, 그림자, hover, 가상 요소와 변형 추가 |

`ver01`은 검은 실선으로 박스 경계를 직접 보여준다. 테두리 두께는 `ver02`와 같아서 두 버전의 박스 크기가 달라지지 않는다.

## 파일 이름

각 컴포넌트 폴더에 두 CSS Module을 함께 둔다.

```text
Header_ver01.module.css
Header_ver02.module.css
```

파일명은 반드시 `.module.css`로 끝나야 Vite가 CSS Module로 인식한다.

## 버전 전환

JSX 맨 위의 import 경로에서 버전 번호만 바꾼다.

```jsx
// 기본 박스 모델
import styles from './Header_ver01.module.css'

// 시각 디자인 완성본
import styles from './Header_ver02.module.css'
```

모든 컴포넌트가 같은 버전을 사용해야 페이지 전체를 한 단계로 비교할 수 있다. 현재 기본 실행 버전은 `ver02`다.

## 공통 스타일

[`src/index.css`](../src/index.css)는 두 버전이 함께 사용하는 초기화, 글꼴, 색상 변수와 `box-sizing`을 담당하므로 버전 파일로 나누지 않는다.
