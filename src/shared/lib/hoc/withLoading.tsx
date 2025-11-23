interface Props {
  isLoading: boolean;
};

export const withLoading = <P extends object>(WrappedComponent: React.ComponentType<P>) => {

  return function WithLoading(wrappedProps: P & Props) {
    const { isLoading, ...rest } = wrappedProps;
    
    if (isLoading) {
      return <p>Загрузка...</p>;
    }

    return <WrappedComponent {...(rest as P)} />;
  };
};
