export default defineAppConfig({
  ui: {
    primary: 'lime',
    gray: 'neutral',
        //ボタン
    button: {
      rounded: 'rounded',
      gap: {
        md: 'gap-x-1.5',
        lg: 'gap-x-1.5',
        xl: 'gap-x-1.5',
      },
      color: {
        white: {
          solid: 'text-vrblue-600 disabled:bg-gray-400 disabled:text-white',
        },
        gray: {
          outline: 'bg-white ring-1 ring-inset ring-current disabled:bg-gray-400 disabled:text-white disabled:ring-0 focus-visible:ring-2 ring-gray-600 text-gray-600 transition duration-200 hover:text-white hover:ring-gray-600 hover:bg-gray-600'
        },
      },
      variant: {
        primary: 'shadow-solid-3px !shadow-primary-900 text-white bg-{color}-600 transition duration-200 hover:shadow-solid-2px hover:translate-y-0.5 hover:opacity-70 hover:bg-{color}-600 disabled:!shadow-solid-3px disabled:translate-y-0 disabled:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-{color}-500 ',
        secondary: 'bg-white shadow-solid-3px ring-1 ring-inset ring-gray-600 text-gray-600 transition duration-200 hover:text-white hover:ring-gray-600 hover:shadow-solid-2px hover:translate-y-0.5 hover:opacity-100 hover:bg-gray-600 disabled:shadow-solid-3px disabled:translate-y-0 disabled:ring-gray-400 disabled:bg-gray-400 disabled:text-white focus-visible:ring-2 focus-visible:ring-{color}-500',
        link: 'text-{color}-600 transition duration-200 hover:opacity-70 disabled:text-gray-400 disabled:no-underline',
        outline: 'bg-white text-{color}-600 transition duration-200 hover:bg-{color}-600 hover:text-white hover:ring-{color}-600 disabled:bg-gray-400 disabled:text-white disabled:ring-0',
        solid: 'bg-{color}-600 transition duration-200 hover:opacity-70 disabled:bg-gray-400',
        ghost: 'transition duration-200',
      }
    },
  }
})