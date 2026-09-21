"use client";

import dynamic from "next/dynamic";

const Model = dynamic(() => import("./model").then((m) => m.Model), {
  ssr: false,
  loading: () => <div className="aspect-square w-full" />,
});

export function ModelLazy(props: { className?: string }) {
  return <Model {...props} />;
}
