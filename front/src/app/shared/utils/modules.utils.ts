export interface Module {
  id: string;
  title: string;
  parent_id: string | null;
  children?: Module[];
}

export function buildModuleTree(modules: Module[]): Module[] {
  const map = new Map<string, Module & { children: Module[] }>();
  const roots: Module[] = [];

  modules.forEach((m) => {
    map.set(m.id, { ...m, children: [] });
  });

  map.forEach((m) => {
    if (m.parent_id) {
      const parent = map.get(m.parent_id);
      if (parent) parent.children!.push(m);
    } else {
      roots.push(m);
    }
  });

  return roots;
}

export function flattenTree(
  modules: Module[],
  level: number = 0
): { id: string; title: string }[] {
  const flat: { id: string; title: string }[] = [];

  for (const m of modules) {
    flat.push({
      id: m.id,
      title: '—'.repeat(level) + ' ' + m.title,
    });
    if (m.children?.length) {
      flat.push(...flattenTree(m.children, level + 1));
    }
  }

  return flat;
}
