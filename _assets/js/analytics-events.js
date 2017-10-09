if(typeof ga === "function") {
    $(document).ready(function () {
        $('a[href^="tel:"]').on('click', function () {
            ga('send', {
                hitType: 'event',
                eventCategory: "Contact",
                eventAction: "tel",
                eventLabel: this.href.replace(/^tel:/, '')
            });
        });

        $('a[href^="mailto:"]').on('click', function () {
            ga('send', {
                hitType: 'event',
                eventCategory: "Contact",
                eventAction: "mailto",
                eventLabel: this.href.replace(/^mailto:/, '')
            });
        });
    });
}
