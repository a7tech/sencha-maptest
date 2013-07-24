Ext.define('Proximity.controller.ResultController', {
    extend: 'Ext.app.Controller',

    alias: 'widget.resultcontroller',

    config: {
        refs: {
            mainView: 'mainview',
            resultView: 'resultview',
            detailView: 'detailview',
            otherView: 'otherview',
            resultList: 'resultlist',
            flipButton: 'button[action=viewFlip]'
        },

        control: {
            flipButton: {
                tap: 'onFlipTap'
            },
            resultList: {
                showDetailsCommand: 'onShowDetailsCommand'
            }
        }
    },

    onFlipTap: function() {
        this.getMainView().getInnerItems().length > 2 ? this.doDetailFlip() : this.doListFlip();
    },

    doListFlip: function() {
        var tab = this.getResultView().getActiveItem();
        tab.setActiveItem(tab.activeList ^= 1);
        this.getFlipButton().setText(tab.activeList ? 'List' : 'Map');
    },

    doDetailFlip: function() {
        var view = this.getDetailView();
        this.getDetailView().setActiveItem(view.activeDetails ^= 1);
        this.getFlipButton().setText(view.activeDetails ? 'Details' : 'Map');
    },

    doCalendar: function() {
        var icsMSG = "BEGIN:VCALENDAR\n" +
            "VERSION:2.0\n" +
            "PRODID:-//Apple Inc.//Mac OS X 10.8.3//EN\n" +
            "CALSCALE:GREGORIAN\n" +
            "BEGIN:VEVENT\n" +
            "CREATED:20130429T121249Z\n" +
            "UID:something-random\n" +
            "DTEND;VALUE=DATE:20130503\n" +
            "TRANSP:TRANSPARENT\n" +
            "SUMMARY:Test Event 3\n" +
            "DTSTART;VALUE=DATE:20130502\n" +
            "DTSTAMP:20130429T121255Z\n" +
            "END:VEVENT\n" +
            "END:VCALENDAR\n";

        document.location = "data:text/calendar;charset=utf8," + encodeURIComponent(icsMSG);
    },

    onShowDetailsCommand: function(view, record, index) {
        if (!this.detailView) {
            this.detailView = Ext.create('Proximity.view.detail.DetailView');
        }

        this.loadCarousel(this.detailView.down('#carousel'), index);
        this.getMainView().push(this.detailView);

        var flipButton = this.getFlipButton();
        flipButton.setText(flipButton.activeDetails ? 'Details' : 'Map');
    },

    loadCarousel: function(carousel, index) {
        var store = Ext.getStore('RemoteResultStore');

        carousel.removeAll();
        store.each(function(result) {
            var panel = Ext.create('Proximity.view.detail.DetailPanel');
            panel.getAt(0).setData(result.data);
//            panel.setData(result.data);
            carousel.add(panel);
        });

        carousel.setActiveItem(index);
    },

    launch: function() {
        this.callParent(arguments);
        console.log('launch');
    },

    init: function() {
        this.callParent(arguments);
        console.log('init');
    }
});