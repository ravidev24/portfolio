import clsx from 'clsx'

const defaultSnippet = `export const buildStack = async () => {
  const api = await createREST('Laravel');
  const ui  = mountReact('#root');
  const cache = redis.connect();

  await api.auth({ oauth: true });
  return ui.deploy({ cache, secure: true });
};`

export default function CodingFrame({
  src,
  alt,
  snippet = defaultSnippet,
  fileName = 'stack.js',
  className = '',
  aspect = 'aspect-video',
  children,
}) {
  const lines = snippet.split('\n')

  return (
    <div className={clsx('coding-frame group', className)}>
      <div className="coding-frame-scan" aria-hidden="true" />
      <div className="coding-frame-grid" aria-hidden="true" />

      {children ?? (
        <img src={src} alt={alt} className={clsx('coding-frame-media', aspect)} />
      )}

      <div className="coding-frame-overlay">
        <div className="code-editor-panel">
          <div className="code-editor-bar">
            <span className="code-dot code-dot-red" />
            <span className="code-dot code-dot-yellow" />
            <span className="code-dot code-dot-green" />
            <span className="code-editor-file">{fileName}</span>
          </div>
          <pre className="code-editor-body">
            {lines.map((line, index) => (
              <code key={index} className="code-line">
                <span className="code-line-no">{index + 1}</span>
                <span className="code-line-text">{line || ' '}</span>
              </code>
            ))}
          </pre>
        </div>
      </div>
    </div>
  )
}
