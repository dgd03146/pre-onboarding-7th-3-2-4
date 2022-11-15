'use client';

import { useStyledComponentsRegistry } from '../../styles/styled-componets';
import { useServerInsertedHTML } from 'next/navigation';

export default function RootStyleRegistry({
  children
}: {
  children: React.ReactNode;
}) {
  const [StyledComponentsRegistry, styledComponentsFlushEffect] =
    useStyledComponentsRegistry();

  useServerInsertedHTML(() => {
    return <>{styledComponentsFlushEffect()}</>;
  });

  return <StyledComponentsRegistry>{children}</StyledComponentsRegistry>;
}
