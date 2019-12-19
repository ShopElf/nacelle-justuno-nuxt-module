window.ju_num = '<%= options.justuno %>'
const justunoScript = document.createElement('script')
justunoScript.type = 'text/javascript'
justunoScript.src = '//cdn.justuno.com/vck.js'
justunoScript.defer = 1
document.getElementsByTagName('head')[0].appendChild(justunoScript)
