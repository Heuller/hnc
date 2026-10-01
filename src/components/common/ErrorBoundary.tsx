import { Component, type ErrorInfo, type ReactNode } from 'react';
import { AlertTriangle, RotateCcw } from 'lucide-react';

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
        <div
          role="alert"
          className="min-h-[400px] flex items-center justify-center p-6 text-center max-w-lg mx-auto"
        >
          <div className="bg-surface p-6 sm:p-8 rounded-2xl border border-border shadow-xs space-y-4">
            <div className="w-12 h-12 rounded-full bg-alerta-soft flex items-center justify-center text-alerta-cebraspe mx-auto">
              <AlertTriangle className="w-6 h-6" />
            </div>

            <h2 className="text-lg font-sans font-bold text-ink">
              Algo inesperado aconteceu
            </h2>

            <p className="text-xs sm:text-sm text-ink-2 font-serif leading-relaxed">
              Ocorreu uma falha ao renderizar este bloco. Seus dados e progresso continuam
              seguros no armazenamento local.
            </p>

            {this.state.error && (
              <pre className="p-3 bg-surface-2 rounded-lg text-[11px] font-mono text-ink-2 text-left overflow-x-auto border border-border">
                {this.state.error.message}
              </pre>
            )}

            <button
              type="button"
              onClick={() => {
                this.setState({ hasError: false });
                window.location.reload();
              }}
              className="py-2.5 px-4 rounded-lg bg-primary text-primary-text font-sans font-semibold text-xs sm:text-sm flex items-center justify-center gap-2 mx-auto hover:opacity-95 transition-opacity"
            >
              <RotateCcw className="w-4 h-4" />
              <span>Recarregar Página</span>
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
