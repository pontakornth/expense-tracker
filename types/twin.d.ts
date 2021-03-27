import 'twin.macro'
//import styledImport, { CSSProp, css as cssImport } from 'styled-components'
import {styled as styledImport, CSSAttribute, css as cssImport, CSSAttribute} from "goober"
import { TwStyle } from 'twin.macro'


declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport
  const css: (tag: CSSAttribute  | TemplateStringsArray | string | TwStyle[], ...props: (string | number)[] ) => string
}

declare module 'react' {
  // The css prop
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp
  }
  // The inline svg css prop
  interface SVGProps<T> extends SVGProps<SVGSVGElement> {
    css?: CSSProp
  }
}

declare module 'goober/global' {
  function createGlobalStyles(tag: CSSAttribute | TemplateStringsArray | string, ...props: Array<string | number | Function | TwStyle>)
}

// The 'as' prop on styled components
declare global {
  namespace JSX {
    interface IntrinsicAttributes<T> extends DOMAttributes<T> {
      as?: string | Element
    }
  }
}
