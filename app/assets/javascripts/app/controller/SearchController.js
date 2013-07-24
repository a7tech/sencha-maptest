Ext.define('Proximity.controller.SearchController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
            mainView: 'mainview',
            searchView: 'searchview',
            resultView: 'resultview'
        },
        control: {
            mainView: {
                push: 'onMainPush',
                pop: 'onMainPop'
            },
            searchView: {
                displayResultsCommand: 'onDisplayResultsCommand'
            }
        }
    },

    onMainPush: function(view, item) {
        this.getMainView().prepareForResults();
    },

    onMainPop: function(view, item) {
        this.getMainView().prepareForSearch();
    },

    onDisplayResultsCommand: function (view, search) {
        if (!this.resultView) {
            this.resultView = Ext.create('Proximity.view.result.ResultView');
        }

        this.resultView.setTitle(search);
        this.getMainView().push(this.resultView);
    },

    // Base class methods.
    launch: function () {
        this.callParent(arguments);
        console.log('launch');
    },

    init: function () {
        this.callParent(arguments);
        console.log('init');
    }
});