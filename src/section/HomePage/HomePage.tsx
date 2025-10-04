"use client";

import { Suspense, lazy } from "react";
import React from "react";

const Main = lazy(() => import("@/section/main/Main").then(m => ({ default: m.Main })));
const HowWorks = lazy(() => import("@/section/how_works/HowWorks").then(m => ({ default: m.HowWorks })));
const Chart = lazy(() => import("@/section/chart/Chart").then(m => ({ default: m.Chart })));
const Market = lazy(() => import("@/section/market/Market").then(m => ({ default: m.Market })));

interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundaryWrapper extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: unknown, info: React.ErrorInfo): void {
    console.error("error component:", error, info);
  }

  render(): React.ReactNode {
    if (this.state.hasError) {
      return null;
    }
    return this.props.children;
  }
}

function SafeBlock({ children }: { children: React.ReactNode }) {
  return (
    <Suspense fallback={null}>
      <ErrorBoundaryWrapper>{children}</ErrorBoundaryWrapper>
    </Suspense>
  );
}

export default function HomePage() {
  return (
    <>
      <SafeBlock>
        <Main />
      </SafeBlock>

      <SafeBlock>
        <HowWorks />
      </SafeBlock>

      <SafeBlock>
        <Chart />
      </SafeBlock>

      <SafeBlock>
        <Market />
      </SafeBlock>
    </>
  );
}
