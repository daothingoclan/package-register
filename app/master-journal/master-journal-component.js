(function(){
    'use strict';
    angular.module('journal', []);
    angular.module('journal').directive('masterJournal', masterJournal);

    function masterJournal($templateCache){
        var directive = {};
        directive.restrict = 'E';
        directive.template = $templateCache.get('master-journal/template.tpl.html');
        return directive;
    };
})();