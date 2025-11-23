import { type ComponentType, type ReactElement } from 'react';

interface Props {
  isLoading: boolean;
}

export const withLoading = <P extends object>(
  WrappedComponent: ComponentType<P>
): ComponentType<P & Props> => {
  return function WithLoading(wrappedProps: P & Props): ReactElement {
    const { isLoading, ...rest } = wrappedProps;
    
    if (isLoading) {
      return <p>Загрузка...</p>;
    }

    return <WrappedComponent {...(rest as P)} />;
  };
};
