if(typeof ga === "function") {
    $(document).ready(function () {
        $('a[href^="tel:"]').on('click', function () {
            ga('send', {
                hitType: 'event',
                eventCategory: "Contact",
                eventAction: "tel",
                eventValue: this.href.replace(/^tel:/, ''),
                eventLabel: this.dataset.galabel
            });
        });

        $('a[href^="mailto:"]').on('click', function () {
            ga('send', {
                hitType: 'event',
                eventCategory: "Contact",
                eventAction: "tel",
                eventValue: this.href.replace(/^tel:/, ''),
                eventLabel: this.dataset.galabel
            });
        });
    });
}
