import { O } from "@aelea/core"
import { $element, style, stylePseudo } from "@aelea/dom"
import { IButton, layoutSheet } from "@aelea/ui-components"
import { colorAlpha, pallete } from "@aelea/ui-components-theme"
import { $Button } from "./$buttonCore"



export const buttonPrimaryStyle = style({
  color: pallete.background, whiteSpace: 'nowrap', fill: 'white', borderRadius: '30px',
  boxShadow: `0px 0px 0px 0 ${pallete.primary} inset`, position: 'relative',
  transition: 'ease-in',
  padding: '15px 24px', fontWeight: 'bold', borderWidth: '0px', backgroundColor: pallete.message,
})

export const secondaryButtonStyle = style({
  color: 'white', whiteSpace: 'nowrap', fill: 'white', borderRadius: '30px', borderStyle: 'solid',
  padding: '15px 24px', fontWeight: 'bold', borderWidth: '1px', borderColor: pallete.message
})


export const $ButtonPrimary = (config: IButton) => {
  return $Button({
    ...config,
    buttonOp: O(
      buttonPrimaryStyle,
      stylePseudo(':hover', { backgroundColor: colorAlpha(pallete.message, .75) }),
      config.buttonOp || O()
    )
  })
}

export const $ButtonSecondary = (config: IButton) => {
  return $Button({
    ...config,
    buttonOp: O(secondaryButtonStyle, stylePseudo(':hover', { borderColor: pallete.primary }), style({ fontSize: '.85em' }), config.buttonOp || O())
  })
}

export const $buttonAnchor = $element('a')(
  layoutSheet.spacingSmall,
  secondaryButtonStyle,
  stylePseudo(':hover', { color: 'inherit', boxShadow: 'none' }),
  style({
    alignItems: 'center',
    textDecoration: 'none',
    padding: '6px 12px',
    display: 'flex',
    cursor: 'pointer',
    color: pallete.message
  }),
)


// <div>
//   <a href="#">submit</a>
//   <a class="loading" href="#">Loading</a>
//   <svg viewBox="0 0 240 220">
//     <rect id="middle" x="20" y="100" width="200" height="60" rx="30"></rect>
//     <path id="top" d="
//       M 60,100
//       L 50,100
//       C 33.4357078,100 20,113.427814 20,130
//       L 20,130
//       C 20,146.568541 33.4331197,160  50,160
//       L190,160
//       C206.570288,160 220,146.572314 220,130
//       L220,100
//       C220,-60 180, 80 160,100
//       C140,120 100,160 100,160
//     "></path>
//     <path id="bottom" d="
//       M180,160
//       L190,160
//       C206.564295,160 220,146.572186 220,130
//       L220,130
//       C220,113.431458 206.56688,100 190,100
//       L 50,100
//       C33.4297125,100 20,113.435296 20,130
//       C20,130 20,120 20,140
//       C20,220 180,200 120,140
//       C100,120 80,100 80,100
//     "></path>
//   </svg>
//   <a class="feedback" href="#"></a>
// </div>