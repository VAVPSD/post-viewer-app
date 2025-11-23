import { type ReactNode } from 'react';

export interface ItemListProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => ReactNode;
  keyExtractor?: (item: T, index: number) => string | number;
  className?: string;
  emptyMessage?: string;
}

export function ItemList<T>({
  items,
  renderItem,
  keyExtractor,
  className,
  emptyMessage = 'Список пуст',
}: ItemListProps<T>) {
  if (items.length === 0) {
    return <div className={className}>{emptyMessage}</div>;
  }

  return (
    <ul className={className}>
      {items.map((item, index) => (
        <li key={keyExtractor ? keyExtractor(item, index) : index}>
          {renderItem(item, index)}
        </li>
      ))}
    </ul>
  );
}

