import dynamic from 'next/dynamic';

export const components = {
  background: dynamic(() => import('./background')),
  banner_video: dynamic(() => import('./bannerVideo')),
  button: dynamic(() => import('./button')),
  description: dynamic(() => import('./discription')),
  pagination: dynamic(() => import('./pagination')),
  icon: dynamic(() => import('./icon')),
  image: dynamic(() => import('./image')),
  link: dynamic(() => import('./link')),
  text: dynamic(() => import('./text')),
  title_complex: dynamic(() => import('./titleComplex')),
  title_header: dynamic(() => import('./titleHeader')),
  title_header_gradient: dynamic(() => import('./titleHeaderGradient')),
  text_custom: dynamic(() => import("./textCustom")),
  text_alpha: dynamic(() => import("./textAlpha")),
  text_alpha1: dynamic(() => import("./textAlpha1")),
  text_alpha2: dynamic(() => import("./textAlpha2")),
};
