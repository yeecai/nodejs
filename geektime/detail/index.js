// we need a template render here
// xss, helper, include

const usr = {
    name: "<script />"
}

const vm = require('vm')

console.log(vm.runInNewContext('`<h2>${helper(usr.name)}</h2>`', {
    usr,
    helper: function() {},
    _:function(markup) {
        if (!markup) return ''
        return String(markup).replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/'/g, '&#39')
        .replace(/"/g, '&quot')
    }
}))

