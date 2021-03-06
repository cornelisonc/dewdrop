require.config({
    paths: {
        "jquery-ui": DEWDROP.bowerUrl('/jquery-ui/jquery-ui.min')
    }
});

require(
    ['jquery', 'jquery-ui'],
    function ($) {
        'use strict';

        // Used to append popovers.  Avoids WP and Bootstrap CSS conflicts.
        var styleWrapper         = $('<div class="bootstrap-wrapper"></div>'),
            inputFormat          = 'MM/DD/YYYY',
            dateInputValueFormat = 'YYYY-MM-DD';

        $(document.body).append(styleWrapper);

        $('.input-date').each(
            function (index, input) {
                if (Modernizr.touch && Modernizr.inputtypes.date) {

                    var $inputDate = $(this),
                        inputDate  = $inputDate.val();

                    if (inputDate) {
                        $inputDate.val(moment(inputDate, inputFormat).format(dateInputValueFormat));
                    }

                    $inputDate.attr('type', 'date');

                } else {
                    var $input = $(input),
                        content,
                        yearRange,
                        inputName = $input.attr('name');

                    content  = '<div class="date-input-popover" data-input="' + $input.data('input') + '">';
                    content += '<a href="#" class="btn btn-link btn-close">';
                    content += '<span class="glyphicon glyphicon-remove text-muted"></span>';
                    content += '</a>';
                    content += '<div class="date-wrapper"></div>';
                    content += '</div>';

                    $input.popover({
                        container: styleWrapper,
                        placement: 'bottom',
                        trigger:   'manual',
                        content:   content,
                        html:      true
                    });

                    if (inputName && inputName.indexOf('birthdate') > -1) {
                        yearRange = '-100:+0';
                    } else {
                        yearRange = '-100:+100';
                    }

                    $input.on(
                        'focus',
                        function () {
                            var $popover;

                            $input.popover('show');

                            $popover = $('[data-input="' + $input.data('input') + '"] .date-wrapper');

                            $('[data-input="' + $input.data('input') + '"] a').on(
                                'click',
                                function (e) {
                                    e.preventDefault();
                                    $input.popover('hide');
                                }
                            );

                            var options = {
                                changeMonth: true,
                                changeYear:  true,
                                yearRange:   yearRange,
                                defaultDate: moment($input.val(), inputFormat).toDate(),
                                onSelect: function (e) {
                                    var selected = $popover.datepicker('getDate');

                                    if (selected) {
                                        $input.val(moment(selected, inputFormat).format(inputFormat));
                                    } else {
                                        $input.val('');
                                    }

                                    $input.trigger('change');
                                    $input.popover('hide');
                                }
                            };

                            $popover.datepicker(options);
                        }
                    );

                    $('input, textarea, select').on(
                        'focus',
                        function () {
                            if (this !== $input[0]) {
                                $input.popover('hide');
                            }
                        }
                    );
                }
            }
        );
    }
);
