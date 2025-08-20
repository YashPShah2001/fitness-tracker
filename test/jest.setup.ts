import "@testing-library/jest-dom";
// ResieObserver was required for rechart elements as jsdom does not implement ResizeObserver.
class ResizeObserver {
    observe() {}
    unobserve() {}
    disconnect() {}
  }
  
  (global as any).ResizeObserver = ResizeObserver;