import _ from 'lodash';
import { CSSProperties } from 'react';

interface TextAlpha1Props {
  data?: any;
  style?: CSSProperties;
}

const TextAlpha1 = ({ data, style }: TextAlpha1Props) => {
  const title = _.get(data, 'title', 'Text');

  const newStyle: CSSProperties = {
    ...style,
  };

  return (
    <div style={newStyle} className="text-[#858585]">
      {title} TextAlpha1
    </div>
  );
};

export default TextAlpha1;
