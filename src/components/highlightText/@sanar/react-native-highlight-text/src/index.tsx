import React from 'react';
import { Text as RNText, TextProps, TextStyle } from 'react-native';
import { findAll, FindAllArgs } from 'highlight-words-core';
import { styles } from './style';

interface HighlightTextProps extends FindAllArgs, TextProps {
  highlightStyle?: TextStyle;
  highlightComponent?: React.ComponentType<TextProps>;
  textComponent?: React.ComponentType<TextProps>;
}

export default function HighlightText({
  autoEscape,
  caseSensitive,
  sanitize,
  searchWords,
  textToHighlight,
  highlightStyle,
  highlightComponent,
  textComponent,
  style,
  ...props
}: HighlightTextProps) {
  const chunks = findAll({
    autoEscape,
    caseSensitive,
    sanitize,
    searchWords,
    textToHighlight,
  });
  const Text = textComponent || RNText;
  const Highlight = highlightComponent || RNText;

  return (
    <Text style={[styles.text, style]} {...props}>
      {chunks.map((chunk, index) => {
        const text = textToHighlight.substr(
          chunk.start,
          chunk.end - chunk.start
        );

        return chunk.highlight ? (
          <Highlight key={`chunk-${index}`} style={highlightStyle}>
            {text}
          </Highlight>
        ) : (
          text
        );
      })}
    </Text>
  );
}
