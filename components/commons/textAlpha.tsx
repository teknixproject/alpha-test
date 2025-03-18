import _ from 'lodash';
import { CSSProperties } from 'react';

interface TextAlphaProps {
  data?: any;
  style?: CSSProperties;
}

const TextAlpha = ({ data, style }: TextAlphaProps) => {
  const title = _.get(data, 'title', 'Text');

  const newStyle: CSSProperties = {
    ...style,
  };

  return (
    <div style={newStyle} className="text-[#858585]">
      {title} TextAlpha
    </div>
  );
};

export default TextAlpha;
