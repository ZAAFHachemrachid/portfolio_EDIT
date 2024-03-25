
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "16px",
		"--theme-rounded-container": "12px",
		"--theme-border-base": "6px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "255 255 255",
		"--on-secondary": "0 0 0",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "0 0 0",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #6F4518 
		"--color-primary-50": "233 227 220", // #e9e3dc
		"--color-primary-100": "226 218 209", // #e2dad1
		"--color-primary-200": "219 209 197", // #dbd1c5
		"--color-primary-300": "197 181 163", // #c5b5a3
		"--color-primary-400": "154 125 93", // #9a7d5d
		"--color-primary-500": "111 69 24", // #6F4518
		"--color-primary-600": "100 62 22", // #643e16
		"--color-primary-700": "83 52 18", // #533412
		"--color-primary-800": "67 41 14", // #43290e
		"--color-primary-900": "54 34 12", // #36220c
		// secondary | #d4ac8c 
		"--color-secondary-50": "249 243 238", // #f9f3ee
		"--color-secondary-100": "246 238 232", // #f6eee8
		"--color-secondary-200": "244 234 226", // #f4eae2
		"--color-secondary-300": "238 222 209", // #eeded1
		"--color-secondary-400": "225 197 175", // #e1c5af
		"--color-secondary-500": "212 172 140", // #d4ac8c
		"--color-secondary-600": "191 155 126", // #bf9b7e
		"--color-secondary-700": "159 129 105", // #9f8169
		"--color-secondary-800": "127 103 84", // #7f6754
		"--color-secondary-900": "104 84 69", // #685445
		// tertiary | #d4ac8c 
		"--color-tertiary-50": "249 243 238", // #f9f3ee
		"--color-tertiary-100": "246 238 232", // #f6eee8
		"--color-tertiary-200": "244 234 226", // #f4eae2
		"--color-tertiary-300": "238 222 209", // #eeded1
		"--color-tertiary-400": "225 197 175", // #e1c5af
		"--color-tertiary-500": "212 172 140", // #d4ac8c
		"--color-tertiary-600": "191 155 126", // #bf9b7e
		"--color-tertiary-700": "159 129 105", // #9f8169
		"--color-tertiary-800": "127 103 84", // #7f6754
		"--color-tertiary-900": "104 84 69", // #685445
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
		// error | #D2042D 
		"--color-error-50": "248 217 224", // #f8d9e0
		"--color-error-100": "246 205 213", // #f6cdd5
		"--color-error-200": "244 192 203", // #f4c0cb
		"--color-error-300": "237 155 171", // #ed9bab
		"--color-error-400": "224 79 108", // #e04f6c
		"--color-error-500": "210 4 45", // #D2042D
		"--color-error-600": "189 4 41", // #bd0429
		"--color-error-700": "158 3 34", // #9e0322
		"--color-error-800": "126 2 27", // #7e021b
		"--color-error-900": "103 2 22", // #670216
		// surface | #f2d8bd 
		"--color-surface-50": "253 249 245", // #fdf9f5
		"--color-surface-100": "252 247 242", // #fcf7f2
		"--color-surface-200": "252 245 239", // #fcf5ef
		"--color-surface-300": "250 239 229", // #faefe5
		"--color-surface-400": "246 228 209", // #f6e4d1
		"--color-surface-500": "242 216 189", // #f2d8bd
		"--color-surface-600": "218 194 170", // #dac2aa
		"--color-surface-700": "182 162 142", // #b6a28e
		"--color-surface-800": "145 130 113", // #918271
		"--color-surface-900": "119 106 93", // #776a5d
		
	}
}