import { Component, ErrorInfo, ReactNode } from 'react';
import { AlertTriangle } from 'lucide-react';

interface Props {
  children: ReactNode;
  sectionName: string;
}

interface State {
  hasError: boolean;
}

export class SectionErrorBoundary extends Component<Props, State> {
  public state: State = {
    hasError: false,
  };

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error(`Error in ${this.props.sectionName} section:`, error, errorInfo);
  }

  public render() {
    if (this.state.hasError) {
      return (
        <div className="p-8 text-center border border-red-500/20 rounded-lg bg-red-500/5">
          <AlertTriangle className="mx-auto h-8 w-8 text-red-400 mb-4" />
          <h3 className="text-lg font-semibold text-white mb-2">
            {this.props.sectionName} Section Unavailable
          </h3>
          <p className="text-white/60 text-sm">
            There was an error loading this section. Please try refreshing the page.
          </p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default SectionErrorBoundary;