export interface TextHighlightProps {
  text: string;
  mode?: keyof typeof textHighlightMode;
}

const textHighlightMode = {
  "color-brand": "text-brand",
  "color-accent": "text-accent",
  italic: "font-garamond font-light italic",
};

const TextHighlight = ({ text, mode = "color-brand" }: TextHighlightProps) => (
  <span className={textHighlightMode[mode]}>{text}</span>
);

export default TextHighlight;
