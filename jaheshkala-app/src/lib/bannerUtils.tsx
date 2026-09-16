import React from 'react';

/**
 * Utility to render a banner title with custom colors, highlighted word/phrase,
 * or bracketed text: e.g. "همین حالا، [وب‌سایت حرفه‌ای] خود را بسازید!"
 */
export function renderFormattedBannerTitle(
  title: string,
  highlightText?: string,
  highlightColor: string = '#fbbf24',
  titleColor: string = '#ffffff'
): React.ReactNode {
  if (!title) return null;

  // Case 1: Bracket syntax [word to highlight]
  if (title.includes('[') && title.includes(']')) {
    const parts = title.split(/(\[.*?\])/g);
    return (
      <span style={{ color: titleColor }}>
        {parts.map((part, idx) => {
          if (part.startsWith('[') && part.endsWith(']')) {
            const inner = part.slice(1, -1);
            return (
              <span
                key={idx}
                style={{ color: highlightColor }}
                className="font-black drop-shadow-md mx-0.5 inline-block"
              >
                {inner}
              </span>
            );
          }
          return <React.Fragment key={idx}>{part}</React.Fragment>;
        })}
      </span>
    );
  }

  // Case 2: Explicit highlightText provided in field
  if (highlightText && highlightText.trim() && title.includes(highlightText.trim())) {
    const cleanWord = highlightText.trim();
    const parts = title.split(cleanWord);
    return (
      <span style={{ color: titleColor }}>
        {parts.map((part, idx) => (
          <React.Fragment key={idx}>
            {part}
            {idx < parts.length - 1 && (
              <span
                style={{ color: highlightColor }}
                className="font-black drop-shadow-md mx-0.5 inline-block"
              >
                {cleanWord}
              </span>
            )}
          </React.Fragment>
        ))}
      </span>
    );
  }

  // Case 3: Standard title with titleColor
  return <span style={{ color: titleColor }}>{title}</span>;
}
