// 전체 컴포넌트의 CSS 학습 단계를 여기서 한 번에 선택한다.
export const STYLE_VERSION = 'ver02'

export function selectStyles(ver01, ver02) {
  return STYLE_VERSION === 'ver01' ? ver01 : ver02
}
