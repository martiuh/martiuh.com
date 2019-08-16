module.exports = {
  extends: 'react-tools',
  plugins: [
    'react-hooks'
  ],
  rules: {
    'jsx-a11y/label-has-for': 0,
    'jsx-a11y/label-has-associated-control': 1,
    'jsx-a11y/anchor-is-valid': ['error', {
      components: ['Link'],
      specialLink: ['to']
    }],
    "react-hooks/rules-of-hooks": "error", // Checks rules of Hooks
    "react-hooks/exhaustive-deps": "warn" // Checks effect dependencies  
  }
}
