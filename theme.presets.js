module.exports = {
  theme: {
    extend: {
      backgroundImage: {
        'body': "url('/assets/images/light-gray-background.jpg')",
        'profile': "url('https://i.pravatar.cc/300')",
        'profile-1': "url('/assets/images/profile_1.jpg')",
        'profile-2': "url('/assets/images/profile_2.jpg')",
        'profile-image-1': "url('/assets/images/white-red-background.jpg')",
        'profile-image-2': "url('/assets/images/white-red-black-background.jpg')",
      },
      boxShadow: {
        'image': 'rgba(0,0,0,0.8) 0 0 10px',
      },
      fontFamily: {
        'ubuntu': ['Ubuntu', 'sans-serif']
      },
      gridTemplateRows: {
        'layout': 'auto minmax(900px, 1fr) auto',
      }
    },
  },
  plugins: [
    require('postcss-import'),
    require('tailwindcss'),
    require('autoprefixer'),
  ]
}