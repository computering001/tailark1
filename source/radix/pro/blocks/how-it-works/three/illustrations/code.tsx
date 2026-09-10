import CodeBlock from "@/components/illustrations/code-block"

const PHP_CODE = `<?php

$ch = curl_init();

curl_setopt($ch, CURLOPT_URL, 'https://api.example.com/data');
curl_setopt($ch, CURLOPT_POST, 1);
curl_setopt($ch, CURLOPT_POSTFIELDS, json_encode([
    'key' => 'value',
    'anotherKey' => 'anotherValue',
]));
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
curl_setopt($ch, CURLOPT_HTTPHEADER, [
    'Content-Type: application/json',
]);

$response = curl_exec($ch);

curl_close($ch);

echo $response;`

export const Code = ({ theme }: { theme?: string }) => (
  <div
    aria-hidden
    className="h-fit max-w-[calc(100vw-6rem)] overflow-hidden rounded-2xl border border-transparent bg-illustration text-sm shadow-md ring-1 shadow-black/6.5 ring-border-illustration"
  >
    <div aria-hidden className="mt-4 flex gap-1.5 px-4">
      <div className="size-2 rounded-full border border-foreground/5 bg-muted-foreground/10" />
      <div className="size-2 rounded-full border border-foreground/5 bg-muted-foreground/10" />
      <div className="size-2 rounded-full border border-foreground/5 bg-muted-foreground/10" />
    </div>
    <CodeBlock
      code={PHP_CODE}
      lang="php"
      maxHeight={300}
      theme={theme || "github-light"}
      lineNumbers
      className="[&_pre]:max-h-auto aspect-video border-t border-background bg-linear-to-b to-muted/50 [&_pre]:aspect-video [&_pre]:min-h-auto [&_pre]:border-none [&_pre]:bg-transparent! [&_pre]:mask-y-from-95% [&_pre]:px-1"
    />
  </div>
)
