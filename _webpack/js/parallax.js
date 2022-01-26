import $ from 'jquery';

// (function ($) {

    $.fn.parallax = function () {
        var window_width = $(window).width();
        // Parallax Scripts
        return this.each(function (i) {
            var $this = $(this);
            $this.addClass('parallax');

            function containerHeight($container) {
                if (window_width < 601) {
                    return ($container.height() > 0) ? $container.height() : $container.children("img").height();
                }
                else {
                    return ($container.height() > 0) ? $container.height() : 500;
                }
            };

            function updateParallax(initial) {
                var container_height = containerHeight($this);
                var container_width = $this.width();
                var $img = $this.children("img").first();
                var img_height = $img.height();
                var img_width = $img.width();
                var container_aspect = container_width / container_height;
                var img_aspect = img_width / img_height;
                if (container_aspect > img_aspect) {
                    // bound to width
                    $img.css('max-width', container_width);
                    $img.css('max-height', 'none');
                } else {
                    // bound to height
                    $img.css('max-width', 'none');
                    $img.css('max-height', container_height + 100);
                }
                // update image things after setting  the size
                img_height = $img.height();
                img_width = $img.width();

                var parallax_dist = img_height - container_height;
                var bottom = $this.offset().top + container_height;
                var top = $this.offset().top;
                var scrollTop = $(window).scrollTop();
                var windowHeight = window.innerHeight;
                var windowBottom = scrollTop + windowHeight;
                var percentScrolled = (windowBottom - top) / (container_height + windowHeight);
                var parallax = Math.round((parallax_dist * percentScrolled));

                if (initial) {
                    $img.css('display', 'block');
                }
                if ((bottom > scrollTop) && (top < (scrollTop + windowHeight))) {
                    $img.css('transform', "translate3D(-50%," + parallax + "px, 0)");
                }

            }

            // Wait for image load
            $this.children("img").one("load", function () {
                updateParallax(true);
            }).each(function () {
                if (this.complete) $(this).trigger("load");
            });

            $(window).scroll(function () {
                window_width = $(window).width();
                updateParallax(false);
            });

            $(window).resize(function () {
                window_width = $(window).width();
                updateParallax(false);
            });

        });

    };
// }(jQuery));
