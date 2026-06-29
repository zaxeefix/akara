"use client";

import { useState } from "react";

type AsyncState<T> = {
  data?: T;
  error?: string;
  loading: boolean;
  success: boolean;
};

export function useApiState<T>() {
  const [state, setState] = useState<AsyncState<T>>({ loading: false, success: false });

  async function run(action: () => Promise<T>) {
    setState({ loading: true, success: false });
    try {
      const data = await action();
      setState({ data, loading: false, success: true });
      return data;
    } catch (error) {
      const message = error instanceof Error ? error.message : "Network request failed";
      setState({ error: message, loading: false, success: false });
      throw error;
    }
  }

  return { ...state, run };
}
