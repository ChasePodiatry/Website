function gtag_report_conversion(url, id) {
    var callback = function () {
        if (typeof(url) != 'undefined') {
            window.location = url;
        }
    };
    gtag('event', 'conversion', {
        'send_to': id,
        'event_callback': callback
    });
    return false;
}

if(typeof gtag === "function") {
    $(document).ready(function () {
        $('a[href^="tel:"]').on('click', function () {
            gtag('event', 'tel', {
                'event_category': "Contact",
                'event_label': this.href.replace(/^tel:/, '')
            });
            gtag_report_conversion(this.href, "AW-1007176580/zRguCKSWoQMQhJeh4AM");
        });

        $('a[href^="mailto:"]').on('click', function () {
            gtag('event', 'mailto', {
                'event_category': "Contact",
                'event_label': this.href.replace(/^mailto:/, '')
            })
        });
    });
}
