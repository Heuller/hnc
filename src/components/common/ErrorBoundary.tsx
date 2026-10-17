import { Component, type ErrorInfo, type ReactNode } from 'react';
import { ErrorState } from './ErrorState';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error?: Error;
}

export class ErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[400px] flex items-center justify-center p-6 w-full">
          <ErrorState
            titulo="Algo inesperado aconteceu"
            descricao="Ocorreu uma falha ao renderizar este bloco. Seus dados e progresso continuam seguros no armazenamento local."
            detalhes={this.state.error?.message}
            onRetry={() => {
              this.setState({ hasError: false });
              window.location.reload();
            }}
            retryLabel="Recarregar Página"
          />
        </div>
      );
    }

    return this.props.children;
  }
}
