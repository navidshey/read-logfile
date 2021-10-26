import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { ErrorBoundary } from "react-error-boundary";
import Spinner from "./components/custom/spinner/Spinner";
import MyRoute from "./components/custom/other/MyRoute";
import store from "./store/store";
import ErrorFallback from "./components/custom/other/ErrorFallback";

function App() {
  return (
    <Provider store={store}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Suspense fallback={<Spinner />}>
          <MyRoute></MyRoute>
        </Suspense>
      </ErrorBoundary>
    </Provider>
  );
}

export default App;
