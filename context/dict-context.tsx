'use client';

import * as React from 'react';

export type Dictionary = typeof import('@/lang/en.json');

const DictContext = React.createContext<Dictionary | null>(null);

export function DictProvider({
  dict,
  children,
}: {
  dict: Dictionary;
  children: React.ReactNode;
}) {
  return <DictContext.Provider value={dict}>{children}</DictContext.Provider>;
}

export function useDictionary(): Dictionary {
  const dict = React.useContext(DictContext);
  if (!dict) {
    throw new Error('useDictionary must be used within a DictProvider');
  }
  return dict;
}
