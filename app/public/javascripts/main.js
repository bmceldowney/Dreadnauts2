angular.module('app', ['directives', 'services', 'controllers', 'filters', 'xeditable']);

angular.module('app').run(function(editableOptions, editableThemes) {
    editableThemes.bs3.inputClass = 'input-sm';
    editableThemes.bs3.buttonsClass = 'btn-sm';
    editableOptions.theme = 'bs3';
});