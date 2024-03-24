
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, 'Noto Sans', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol', 'Noto Color Emoji'`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "24px",
		"--theme-rounded-container": "16px",
		"--theme-border-base": "4px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #ae623c 
		"--color-primary-50": "243 231 226", // #f3e7e2
		"--color-primary-100": "239 224 216", // #efe0d8
		"--color-primary-200": "235 216 206", // #ebd8ce
		"--color-primary-300": "223 192 177", // #dfc0b1
		"--color-primary-400": "198 145 119", // #c69177
		"--color-primary-500": "174 98 60", // #ae623c
		"--color-primary-600": "157 88 54", // #9d5836
		"--color-primary-700": "131 74 45", // #834a2d
		"--color-primary-800": "104 59 36", // #683b24
		"--color-primary-900": "85 48 29", // #55301d
		// secondary | #ae623c 
		"--color-secondary-50": "243 231 226", // #f3e7e2
		"--color-secondary-100": "239 224 216", // #efe0d8
		"--color-secondary-200": "235 216 206", // #ebd8ce
		"--color-secondary-300": "223 192 177", // #dfc0b1
		"--color-secondary-400": "198 145 119", // #c69177
		"--color-secondary-500": "174 98 60", // #ae623c
		"--color-secondary-600": "157 88 54", // #9d5836
		"--color-secondary-700": "131 74 45", // #834a2d
		"--color-secondary-800": "104 59 36", // #683b24
		"--color-secondary-900": "85 48 29", // #55301d
		// tertiary | #C18E74 
		"--color-tertiary-50": "246 238 234", // #f6eeea
		"--color-tertiary-100": "243 232 227", // #f3e8e3
		"--color-tertiary-200": "240 227 220", // #f0e3dc
		"--color-tertiary-300": "230 210 199", // #e6d2c7
		"--color-tertiary-400": "212 176 158", // #d4b09e
		"--color-tertiary-500": "193 142 116", // #C18E74
		"--color-tertiary-600": "174 128 104", // #ae8068
		"--color-tertiary-700": "145 107 87", // #916b57
		"--color-tertiary-800": "116 85 70", // #745546
		"--color-tertiary-900": "95 70 57", // #5f4639
		// success | #84cc16 
		"--color-success-50": "237 247 220", // #edf7dc
		"--color-success-100": "230 245 208", // #e6f5d0
		"--color-success-200": "224 242 197", // #e0f2c5
		"--color-success-300": "206 235 162", // #ceeba2
		"--color-success-400": "169 219 92", // #a9db5c
		"--color-success-500": "132 204 22", // #84cc16
		"--color-success-600": "119 184 20", // #77b814
		"--color-success-700": "99 153 17", // #639911
		"--color-success-800": "79 122 13", // #4f7a0d
		"--color-success-900": "65 100 11", // #41640b
		// warning | #EAB308 
		"--color-warning-50": "252 244 218", // #fcf4da
		"--color-warning-100": "251 240 206", // #fbf0ce
		"--color-warning-200": "250 236 193", // #faecc1
		"--color-warning-300": "247 225 156", // #f7e19c
		"--color-warning-400": "240 202 82", // #f0ca52
		"--color-warning-500": "234 179 8", // #EAB308
		"--color-warning-600": "211 161 7", // #d3a107
		"--color-warning-700": "176 134 6", // #b08606
		"--color-warning-800": "140 107 5", // #8c6b05
		"--color-warning-900": "115 88 4", // #735804
		// error | #d21919 
		"--color-error-50": "248 221 221", // #f8dddd
		"--color-error-100": "246 209 209", // #f6d1d1
		"--color-error-200": "244 198 198", // #f4c6c6
		"--color-error-300": "237 163 163", // #eda3a3
		"--color-error-400": "224 94 94", // #e05e5e
		"--color-error-500": "210 25 25", // #d21919
		"--color-error-600": "189 23 23", // #bd1717
		"--color-error-700": "158 19 19", // #9e1313
		"--color-error-800": "126 15 15", // #7e0f0f
		"--color-error-900": "103 12 12", // #670c0c
		// surface | #ddcdc5 
		"--color-surface-50": "250 248 246", // #faf8f6
		"--color-surface-100": "248 245 243", // #f8f5f3
		"--color-surface-200": "247 243 241", // #f7f3f1
		"--color-surface-300": "241 235 232", // #f1ebe8
		"--color-surface-400": "231 220 214", // #e7dcd6
		"--color-surface-500": "221 205 197", // #ddcdc5
		"--color-surface-600": "199 185 177", // #c7b9b1
		"--color-surface-700": "166 154 148", // #a69a94
		"--color-surface-800": "133 123 118", // #857b76
		"--color-surface-900": "108 100 97", // #6c6461
		
	}
}